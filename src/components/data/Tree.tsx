import * as React from 'react'
import { cn } from '../../lib/cn'
import { Input } from '../primitives/Input'
import { Spinner } from '../primitives/Spinner'

export type TreeNode = {
  key: string
  title: React.ReactNode
  children?: TreeNode[]
  /**
   * 显式标记为叶子节点（即使 loadData 存在，也不会尝试异步加载）。
   */
  isLeaf?: boolean
  disabled?: boolean
}

export type TreeFilterOption = (searchValue: string, node: TreeNode) => boolean

export type TreeLoadData = (node: TreeNode) => Promise<TreeNode[] | void>

export type TreeProps = {
  data: TreeNode[]
  className?: string

  /**
   * 是否渲染搜索框（否则仅支持通过传入 searchValue/defaultSearchValue 来过滤）。
   */
  showSearch?: boolean
  searchValue?: string
  defaultSearchValue?: string
  onSearchValueChange?: (next: string) => void
  filterOption?: TreeFilterOption

  /**
   * 异步加载子节点：在展开且节点未加载时调用。
   * - 若 resolve 返回 TreeNode[]，会被写入到该节点的 children 中并触发渲染
   * - 若 resolve 返回 void，视为“已加载但无子节点”，不会重复调用
   */
  loadData?: TreeLoadData

  /**
   * 受控/非受控：加载中的 key 列表（用于展示 loading 指示）。
   */
  loadingKeys?: string[]
  defaultLoadingKeys?: string[]
  onLoadingKeysChange?: (next: string[]) => void

  /**
   * 展开状态（用于键盘左右键与异步加载）。
   */
  expandedKeys?: string[]
  defaultExpandedKeys?: string[]
  onExpandedKeysChange?: (next: string[]) => void

  /**
   * 单选选中（用于 aria-selected）。
   */
  selectedKey?: string
  defaultSelectedKey?: string
  onSelectedKeyChange?: (next?: string) => void
}

type FlatNode = {
  key: string
  node: TreeNode
  level: number
  parentKey?: string
}

function useControllableState<T>(
  controlled: T | undefined,
  defaultValue: T,
  onChange?: (next: T) => void
) {
  const [uncontrolled, setUncontrolled] = React.useState<T>(defaultValue)
  const isControlled = controlled !== undefined
  const value = isControlled ? (controlled as T) : uncontrolled

  const setValue = React.useCallback(
    (next: T | ((prev: T) => T)) => {
      if (!isControlled) {
        setUncontrolled((prev) => {
          const resolved = typeof next === 'function' ? (next as (p: T) => T)(prev) : next
          onChange?.(resolved)
          return resolved
        })
        return
      }

      const resolved = typeof next === 'function' ? (next as (p: T) => T)(controlled as T) : next
      onChange?.(resolved)
    },
    [controlled, isControlled, onChange]
  )

  return [value, setValue] as const
}

function getNodeText(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(getNodeText).join('')
  if (React.isValidElement(node)) return getNodeText(node.props?.children)
  return ''
}

function defaultFilterOption(searchValue: string, node: TreeNode) {
  const t = getNodeText(node.title).toLowerCase()
  return t.includes(searchValue.toLowerCase())
}

function updateTreeNodeChildren(nodes: TreeNode[], key: string, children: TreeNode[] | undefined): TreeNode[] {
  return nodes.map((n) => {
    if (n.key === key) return { ...n, children }
    if (!n.children) return n
    return { ...n, children: updateTreeNodeChildren(n.children, key, children) }
  })
}

function hasChildren(node: TreeNode) {
  return Array.isArray(node.children) && node.children.length > 0
}

function isExpandable(node: TreeNode, loadData?: TreeLoadData) {
  if (node.isLeaf) return false
  return hasChildren(node) || Boolean(loadData)
}

export function Tree({
  data,
  className,
  showSearch = false,
  searchValue,
  defaultSearchValue,
  onSearchValueChange,
  filterOption,
  loadData,
  loadingKeys,
  defaultLoadingKeys,
  onLoadingKeysChange,
  expandedKeys,
  defaultExpandedKeys,
  onExpandedKeysChange,
  selectedKey,
  defaultSelectedKey,
  onSelectedKeyChange,
}: TreeProps) {
  const [innerData, setInnerData] = React.useState<TreeNode[]>(data)
  React.useEffect(() => setInnerData(data), [data])

  const [mergedSearchValue, setSearchValue] = useControllableState(
    searchValue,
    defaultSearchValue ?? '',
    onSearchValueChange
  )

  const [mergedExpandedKeys, setExpandedKeys] = useControllableState<string[]>(
    expandedKeys,
    defaultExpandedKeys ?? [],
    onExpandedKeysChange
  )

  const [mergedLoadingKeys, setLoadingKeys] = useControllableState<string[]>(
    loadingKeys,
    defaultLoadingKeys ?? [],
    onLoadingKeysChange
  )

  const [mergedSelectedKey, setSelectedKey] = useControllableState<string | undefined>(
    selectedKey,
    defaultSelectedKey,
    onSelectedKeyChange
  )

  const loadedKeysRef = React.useRef<Set<string>>(new Set())
  const inFlightLoadRef = React.useRef<Map<string, Promise<unknown>>>(new Map())

  const actualFilterOption = filterOption ?? defaultFilterOption

  const { filteredData, autoExpandKeys } = React.useMemo(() => {
    const sv = mergedSearchValue.trim()
    if (!sv) return { filteredData: innerData, autoExpandKeys: new Set<string>() }

    const auto = new Set<string>()

    function loop(nodes: TreeNode[]): TreeNode[] {
      const res: TreeNode[] = []
      for (const n of nodes) {
        const match = actualFilterOption(sv, n)
        const nextChildren = n.children ? loop(n.children) : undefined
        if (match) {
          res.push({ ...n, children: nextChildren ?? n.children })
          continue
        }
        if (nextChildren && nextChildren.length > 0) {
          auto.add(n.key)
          res.push({ ...n, children: nextChildren })
        }
      }
      return res
    }

    return { filteredData: loop(innerData), autoExpandKeys: auto }
  }, [actualFilterOption, innerData, mergedSearchValue])

  const expandedKeySet = React.useMemo(() => new Set(mergedExpandedKeys), [mergedExpandedKeys])
  const effectiveExpandedKeySet = React.useMemo(() => {
    if (!mergedSearchValue.trim()) return expandedKeySet
    const next = new Set(expandedKeySet)
    for (const k of autoExpandKeys) next.add(k)
    return next
  }, [autoExpandKeys, expandedKeySet, mergedSearchValue])

  const loadingKeySet = React.useMemo(() => new Set(mergedLoadingKeys), [mergedLoadingKeys])

  const flat = React.useMemo(() => {
    const out: FlatNode[] = []
    function walk(nodes: TreeNode[], level: number, parentKey?: string) {
      for (const n of nodes) {
        out.push({ key: n.key, node: n, level, parentKey })
        const expanded = effectiveExpandedKeySet.has(n.key)
        if (expanded && n.children && n.children.length > 0) {
          walk(n.children, level + 1, n.key)
        }
      }
    }
    walk(filteredData, 1, undefined)
    return out
  }, [effectiveExpandedKeySet, filteredData])

  const nodeByKey = React.useMemo(() => {
    const m = new Map<string, FlatNode>()
    for (const f of flat) m.set(f.key, f)
    return m
  }, [flat])

  const itemRefs = React.useRef<Map<string, HTMLDivElement | null>>(new Map())

  const [activeKey, setActiveKey] = React.useState<string | undefined>(flat[0]?.key)
  React.useEffect(() => {
    if (activeKey && nodeByKey.has(activeKey)) return
    setActiveKey(flat[0]?.key)
  }, [activeKey, flat, nodeByKey])

  const focusKey = React.useCallback(
    (key: string) => {
      setActiveKey(key)
      queueMicrotask(() => {
        itemRefs.current.get(key)?.focus()
      })
    },
    [setActiveKey]
  )

  const toggleExpand = React.useCallback(
    async (key: string, nextExpanded?: boolean) => {
      const f = nodeByKey.get(key)
      if (!f) return
      const expandable = isExpandable(f.node, loadData)
      if (!expandable) return

      const expandedNow = expandedKeySet.has(key)
      const shouldExpand = nextExpanded ?? !expandedNow
      const nextKeys = shouldExpand
        ? Array.from(new Set([...mergedExpandedKeys, key]))
        : mergedExpandedKeys.filter((k) => k !== key)
      setExpandedKeys(nextKeys)

      if (!shouldExpand) return

      // 如果需要异步加载
      if (!loadData) return
      if (f.node.isLeaf) return
      if (hasChildren(f.node)) return
      if (loadedKeysRef.current.has(key)) return
      if (inFlightLoadRef.current.has(key)) return

      const nextLoading = Array.from(new Set([...mergedLoadingKeys, key]))
      setLoadingKeys(nextLoading)

      const p = (async () => {
        try {
          const result = await loadData(f.node)
          loadedKeysRef.current.add(key)
          if (Array.isArray(result)) {
            setInnerData((prev) => updateTreeNodeChildren(prev, key, result))
          }
        } finally {
          inFlightLoadRef.current.delete(key)
          setLoadingKeys((prev) => prev.filter((k) => k !== key))
        }
      })()

      inFlightLoadRef.current.set(key, p)
    },
    [
      expandedKeySet,
      loadData,
      mergedExpandedKeys,
      mergedLoadingKeys,
      nodeByKey,
      setExpandedKeys,
      setLoadingKeys,
    ]
  )

  const onItemKeyDown = React.useCallback(
    async (e: React.KeyboardEvent, key: string) => {
      const idx = flat.findIndex((f) => f.key === key)
      if (idx < 0) return
      const f = flat[idx]

      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault()
          const next = flat[idx + 1]
          if (next) focusKey(next.key)
          return
        }
        case 'ArrowUp': {
          e.preventDefault()
          const prev = flat[idx - 1]
          if (prev) focusKey(prev.key)
          return
        }
        case 'ArrowRight': {
          e.preventDefault()
          if (!isExpandable(f.node, loadData)) return
          const expanded = effectiveExpandedKeySet.has(key)
          if (!expanded) {
            await toggleExpand(key, true)
            return
          }
          const child = flat[idx + 1]
          if (child && child.parentKey === key) focusKey(child.key)
          return
        }
        case 'ArrowLeft': {
          e.preventDefault()
          const expanded = effectiveExpandedKeySet.has(key)
          if (expanded && isExpandable(f.node, loadData)) {
            await toggleExpand(key, false)
            return
          }
          if (f.parentKey) focusKey(f.parentKey)
          return
        }
        case 'Enter':
        case ' ': {
          e.preventDefault()
          if (isExpandable(f.node, loadData)) {
            await toggleExpand(key)
          } else {
            setSelectedKey(key)
          }
          return
        }
      }
    },
    [effectiveExpandedKeySet, flat, focusKey, loadData, setSelectedKey, toggleExpand]
  )

  return (
    <div className={cn('grid gap-2', className)}>
      {showSearch ? (
        <Input
          aria-label="tree search"
          placeholder="Search"
          value={mergedSearchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      ) : null}

      <div role="tree" aria-label="tree" className="grid gap-1">
        {flat.length === 0 ? (
          <div className="text-sm text-aivent-muted">No data</div>
        ) : (
          flat.map(({ key, node, level }) => {
            const expanded = effectiveExpandedKeySet.has(key)
            const expandable = isExpandable(node, loadData)
            const selected = mergedSelectedKey === key
            const loading = loadingKeySet.has(key)
            const labelText = getNodeText(node.title)

            return (
              <div
                key={key}
                ref={(el) => {
                  itemRefs.current.set(key, el)
                }}
                role="treeitem"
                aria-label={labelText || undefined}
                aria-level={level}
                aria-expanded={expandable ? expanded : undefined}
                aria-selected={selected}
                tabIndex={activeKey === key ? 0 : -1}
                data-tree-key={key}
                onFocus={() => setActiveKey(key)}
                onKeyDown={(e) => onItemKeyDown(e, key)}
                onClick={() => {
                  if (node.disabled) return
                  focusKey(key)
                  setSelectedKey(key)
                }}
                className={cn(
                  'flex items-center gap-2 rounded-md px-2 py-1 text-sm outline-none',
                  'focus-visible:ring-2 focus-visible:ring-aivent-primary/60',
                  node.disabled ? 'cursor-not-allowed opacity-60' : 'cursor-default',
                  selected ? 'bg-aivent-primary/10' : 'hover:bg-aivent-primary/5'
                )}
                style={{ paddingLeft: (level - 1) * 16 + 8 }}
              >
                {expandable ? (
                  <button
                    type="button"
                    tabIndex={-1}
                    aria-label={expanded ? 'Collapse' : 'Expand'}
                    disabled={node.disabled}
                    onClick={async (e) => {
                      e.stopPropagation()
                      await toggleExpand(key)
                    }}
                    className={cn(
                      'inline-flex h-5 w-5 items-center justify-center rounded text-aivent-muted hover:bg-aivent-primary/10'
                    )}
                  >
                    {loading ? (
                      <Spinner size="sm" variant="muted" label="Loading children" />
                    ) : (
                      <span aria-hidden="true">{expanded ? '▾' : '▸'}</span>
                    )}
                  </button>
                ) : (
                  <span
                    aria-hidden="true"
                    className="inline-flex h-5 w-5 items-center justify-center opacity-0"
                  >
                    ▸
                  </span>
                )}
                <span className="min-w-0 flex-1 truncate">{node.title}</span>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
