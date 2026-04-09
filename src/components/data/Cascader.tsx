import * as React from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../lib/cn'

export type CascaderOption = {
  value: string
  label: React.ReactNode
  disabled?: boolean
  /** 显式标记为叶子节点（没有下一列） */
  isLeaf?: boolean
  /** 子节点（若为空且 isLeaf !== true，可通过 loadData 异步加载） */
  children?: CascaderOption[]
  /** 异步加载时用于展示 loading */
  loading?: boolean
}

export type CascaderFilterOption = (inputValue: string, path: CascaderOption[]) => boolean

export type CascaderProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  options: CascaderOption[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (value: string[], selectedOptions: CascaderOption[]) => void
  placeholder?: React.ReactNode
  disabled?: boolean
  /** 显示搜索输入框（仅支持基础字符串过滤） */
  showSearch?: boolean
  searchValue?: string
  defaultSearchValue?: string
  onSearchValueChange?: (v: string) => void
  filterOption?: CascaderFilterOption
  /** 异步加载下一列：通常在 selectedOptions 最末级上补齐 children */
  loadData?: (selectedOptions: CascaderOption[]) => void | Promise<void>
}

function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value: T | undefined
  defaultValue: T
  onChange?: (v: T) => void
}) {
  const [uncontrolled, setUncontrolled] = React.useState<T>(defaultValue)
  const isControlled = value !== undefined
  const state = isControlled ? (value as T) : uncontrolled

  const setState = React.useCallback(
    (next: T) => {
      if (!isControlled) setUncontrolled(next)
      onChange?.(next)
    },
    [isControlled, onChange]
  )

  return [state, setState] as const
}

function defaultFilterOption(inputValue: string, path: CascaderOption[]) {
  const needle = inputValue.trim().toLowerCase()
  if (!needle) return true
  const text = path
    .map((o) => {
      const v = o.label
      if (typeof v === 'string') return v
      if (typeof v === 'number') return String(v)
      return o.value
    })
    .join(' / ')
    .toLowerCase()
  return text.includes(needle)
}

function getFirstEnabled(list: CascaderOption[]) {
  return list.find((o) => !o.disabled)
}

function findPathByValues(options: CascaderOption[], values: string[]): CascaderOption[] {
  const path: CascaderOption[] = []
  let current = options
  for (const v of values) {
    const hit = current.find((o) => o.value === v)
    if (!hit) break
    path.push(hit)
    current = hit.children ?? []
  }
  return path
}

function getColumns(options: CascaderOption[], activeValues: string[]) {
  const columns: CascaderOption[][] = [options]
  let current = options
  for (let depth = 0; depth < activeValues.length; depth++) {
    const v = activeValues[depth]
    const hit = current.find((o) => o.value === v)
    if (!hit) break
    if (hit.children && hit.children.length > 0) {
      columns.push(hit.children)
      current = hit.children
    } else {
      break
    }
  }
  return columns
}

function pathToText(path: CascaderOption[]) {
  return path
    .map((o) => {
      const v = o.label
      if (typeof v === 'string' || typeof v === 'number') return String(v)
      return o.value
    })
    .join(' / ')
}

type SearchHit = {
  values: string[]
  path: CascaderOption[]
  text: string
}

function buildSearchHits(options: CascaderOption[], filter: CascaderFilterOption, inputValue: string) {
  const hits: SearchHit[] = []
  const walk = (list: CascaderOption[], prefix: CascaderOption[]) => {
    for (const opt of list) {
      const next = [...prefix, opt]
      // 叶子节点或没有 children（也可能是懒加载节点），都允许作为可选结果
      if (filter(inputValue, next)) {
        hits.push({
          values: next.map((o) => o.value),
          path: next,
          text: pathToText(next),
        })
      }
      if (opt.children && opt.children.length) walk(opt.children, next)
    }
  }
  walk(options, [])
  return hits
}

export function Cascader({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = '请选择',
  disabled = false,
  showSearch = false,
  searchValue,
  defaultSearchValue,
  onSearchValueChange,
  filterOption = defaultFilterOption,
  loadData,
  className,
  ...props
}: CascaderProps) {
  const isValueControlled = value !== undefined
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string[]>(defaultValue ?? [])
  const selectedValue = isValueControlled ? (value as string[]) : uncontrolledValue

  const [open, setOpen] = React.useState(false)
  const [optionsTick, setOptionsTick] = React.useState(0)
  const [internalOptions, setInternalOptions] = React.useState(options)

  const [sv, setSv] = useControllableState<string>({
    value: searchValue,
    defaultValue: defaultSearchValue ?? '',
    onChange: onSearchValueChange,
  })
  const [searchActiveIndex, setSearchActiveIndex] = React.useState(0)

  const triggerRef = React.useRef<HTMLButtonElement | null>(null)
  const contentRef = React.useRef<HTMLDivElement | null>(null)
  const searchInputRef = React.useRef<HTMLInputElement | null>(null)

  const [activeValues, setActiveValues] = React.useState<string[]>([])
  const [focusDepth, setFocusDepth] = React.useState(0)

  // sync internal options when prop reference changes
  React.useEffect(() => {
    setInternalOptions(options)
  }, [options])

  // close on outside click
  React.useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node
      if (triggerRef.current?.contains(t)) return
      if (contentRef.current?.contains(t)) return
      setOpen(false)
    }
    window.addEventListener('pointerdown', onPointerDown)
    return () => window.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  const selectedPath = React.useMemo(() => findPathByValues(internalOptions, selectedValue), [internalOptions, optionsTick, selectedValue])

  const triggerText = selectedPath.length ? pathToText(selectedPath) : null

  const columns = React.useMemo(() => getColumns(internalOptions, activeValues), [activeValues, internalOptions, optionsTick])

  const isSearching = showSearch && sv.trim().length > 0
  const searchHits = React.useMemo(() => (isSearching ? buildSearchHits(internalOptions, filterOption, sv) : []), [filterOption, internalOptions, isSearching, sv])

  React.useEffect(() => {
    if (!isSearching) return
    setSearchActiveIndex(0)
  }, [isSearching, sv])

  const commitSelect = React.useCallback(
    (next: { values: string[]; path: CascaderOption[] }) => {
      if (!isValueControlled) setUncontrolledValue(next.values)
      onChange?.(next.values, next.path)
      setOpen(false)
      triggerRef.current?.focus()
    },
    [isValueControlled, onChange]
  )

  const focusOption = React.useCallback((depth: number, v?: string) => {
    const root = contentRef.current
    if (!root) return
    const selector = v
      ? `[data-cascader-option="true"][data-depth="${depth}"][data-value="${CSS.escape(v)}"]`
      : `[data-cascader-option="true"][data-depth="${depth}"]:not([data-disabled="true"])`
    const el = root.querySelector<HTMLElement>(selector)
    el?.focus()
  }, [])

  // open init
  React.useEffect(() => {
    if (!open) return
    setFocusDepth(0)
    // active values default: selectedValue -> first enabled root
    setActiveValues((prev) => {
      if (prev.length) return prev
      if (selectedValue.length) return selectedValue
      const first = getFirstEnabled(internalOptions)
      return first ? [first.value] : []
    })
    // focus: search input or first option
    queueMicrotask(() => {
      if (showSearch) {
        searchInputRef.current?.focus()
        return
      }
      const first = selectedValue.length ? selectedValue[0] : getFirstEnabled(internalOptions)?.value
      focusOption(0, first)
    })
  }, [focusOption, internalOptions, open, selectedValue, showSearch])

  const ensureNextColumnLoaded = React.useCallback(
    async (path: CascaderOption[]) => {
      if (!loadData) return
      const last = path[path.length - 1]
      if (!last) return
      const hasChildren = !!last.children?.length
      const canLoad = !hasChildren && last.isLeaf !== true
      if (!canLoad) return
      last.loading = true
      setOptionsTick((t) => t + 1)
      try {
        await loadData(path)
      } finally {
        last.loading = false
        // props.options 可能被原地 mutation，这里强制 tick 触发重绘
        setInternalOptions((prev) => [...prev])
        setOptionsTick((t) => t + 1)
      }
    },
    [loadData]
  )

  const activateAtDepth = React.useCallback(
    async (depth: number, opt: CascaderOption, { focusNext }: { focusNext: boolean }) => {
      if (opt.disabled) return
      setActiveValues((prev) => {
        const next = prev.slice(0, depth)
        next[depth] = opt.value
        return next
      })

      const nextActiveValues = (() => {
        const base = activeValues.slice(0, depth)
        base[depth] = opt.value
        return base
      })()
      const path = findPathByValues(internalOptions, nextActiveValues)

      const hasChildren = !!opt.children?.length
      const canLoad = !!loadData && !hasChildren && opt.isLeaf !== true
      const isLeaf = opt.isLeaf === true || (!hasChildren && !canLoad)

      if (isLeaf) {
        commitSelect({ values: path.map((o) => o.value), path })
        return
      }

      if (canLoad) await ensureNextColumnLoaded(path)

      // 尝试进入下一列
      const last = path[path.length - 1]
      const children = last?.children ?? []
      const firstChild = getFirstEnabled(children)
      if (firstChild) {
        setActiveValues((prev) => {
          const next = prev.slice(0, depth + 1)
          next[depth] = opt.value
          next[depth + 1] = firstChild.value
          return next
        })
        if (focusNext) {
          setFocusDepth(depth + 1)
          queueMicrotask(() => focusOption(depth + 1, firstChild.value))
        }
      }
    },
    [activeValues, commitSelect, ensureNextColumnLoaded, focusOption, internalOptions, loadData]
  )

  const onPopupKeyDown = React.useCallback(
    async (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
        triggerRef.current?.focus()
        return
      }

      if (isSearching) {
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setSearchActiveIndex((i) => Math.min(searchHits.length - 1, i + 1))
          return
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault()
          setSearchActiveIndex((i) => Math.max(0, i - 1))
          return
        }
        if (e.key === 'Enter') {
          const hit = searchHits[searchActiveIndex]
          if (hit) {
            e.preventDefault()
            commitSelect({ values: hit.values, path: hit.path })
          }
          return
        }
        return
      }

      const depth = Math.max(0, Math.min(focusDepth, columns.length - 1))
      const list = columns[depth] ?? []
      if (!list.length) return
      const currentValue = activeValues[depth] ?? getFirstEnabled(list)?.value
      let idx = currentValue ? list.findIndex((o) => o.value === currentValue) : -1
      if (idx < 0) idx = list.findIndex((o) => !o.disabled)
      const current = list[idx]
      if (!current) return

      const nextEnabledIndex = (start: number, dir: 1 | -1) => {
        let i = start
        while (true) {
          i += dir
          if (i < 0 || i >= list.length) return start
          if (!list[i].disabled) return i
        }
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        const nextIdx = nextEnabledIndex(idx, 1)
        const next = list[nextIdx]
        if (next) {
          setActiveValues((prev) => {
            const v = prev.slice(0, depth)
            v[depth] = next.value
            return v
          })
          queueMicrotask(() => focusOption(depth, next.value))
        }
        return
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault()
        const nextIdx = nextEnabledIndex(idx, -1)
        const next = list[nextIdx]
        if (next) {
          setActiveValues((prev) => {
            const v = prev.slice(0, depth)
            v[depth] = next.value
            return v
          })
          queueMicrotask(() => focusOption(depth, next.value))
        }
        return
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        if (depth > 0) {
          setFocusDepth(depth - 1)
          setActiveValues((prev) => prev.slice(0, depth))
          queueMicrotask(() => focusOption(depth - 1, activeValues[depth - 1]))
        }
        return
      }

      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        e.preventDefault()
        await activateAtDepth(depth, current, { focusNext: true })
        return
      }
    },
    [activateAtDepth, activeValues, columns, commitSelect, focusDepth, focusOption, isSearching, searchActiveIndex, searchHits]
  )

  const popup = open ? (
    <div
      ref={contentRef}
      className={cn(
        'z-50 mt-2 min-w-72 overflow-hidden rounded-xl2 border border-aivent-border bg-aivent-panel text-sm text-aivent-text shadow-glow outline-none',
        'focus-visible:ring-2 focus-visible:ring-white/20'
      )}
      onKeyDown={onPopupKeyDown}
    >
      {showSearch ? (
        <div className="border-b border-aivent-border p-2">
          <input
            ref={searchInputRef}
            value={sv}
            onChange={(e) => setSv(e.target.value)}
            className={cn(
              'h-9 w-full rounded-lg border border-aivent-border bg-transparent px-3 text-sm outline-none',
              'focus-visible:ring-2 focus-visible:ring-white/20'
            )}
            placeholder="搜索"
            aria-label="搜索"
            onKeyDown={onPopupKeyDown}
          />
        </div>
      ) : null}

      {isSearching ? (
        <div role="listbox" aria-label="Cascader search results" className="max-h-72 overflow-auto p-1">
          {searchHits.length ? (
            searchHits.map((hit, i) => (
              <button
                key={hit.values.join('>')}
                type="button"
                role="option"
                aria-selected={i === searchActiveIndex}
                tabIndex={-1}
                className={cn(
                  'flex w-full cursor-default select-none items-center rounded-lg px-3 py-2 text-left outline-none transition',
                  i === searchActiveIndex ? 'bg-white/10 text-white' : 'hover:bg-white/5'
                )}
                onMouseEnter={() => setSearchActiveIndex(i)}
                onClick={() => commitSelect({ values: hit.values, path: hit.path })}
              >
                <span className="truncate">{hit.text}</span>
              </button>
            ))
          ) : (
            <div className="px-3 py-2 text-aivent-muted">无匹配项</div>
          )}
        </div>
      ) : (
        <div className="flex max-h-72 min-w-72 overflow-auto">
          {columns.map((col, depth) => (
            <div
              key={depth}
              role="listbox"
              aria-label={`Cascader column ${depth + 1}`}
              className={cn('min-w-44 border-r border-aivent-border p-1 last:border-r-0')}
            >
              {col.map((opt) => {
                const selected = activeValues[depth] === opt.value
                const hasChildren = !!opt.children?.length
                const canLoad = !!loadData && !hasChildren && opt.isLeaf !== true
                const hasNext = hasChildren || canLoad
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    aria-disabled={opt.disabled || undefined}
                    tabIndex={-1}
                    data-cascader-option="true"
                    data-depth={depth}
                    data-value={opt.value}
                    data-disabled={opt.disabled ? 'true' : 'false'}
                    disabled={opt.disabled}
                    className={cn(
                      'flex w-full cursor-default select-none items-center justify-between gap-3 rounded-lg px-3 py-2 text-left outline-none transition',
                      selected ? 'bg-white/10 text-white' : 'hover:bg-white/5',
                      opt.disabled ? 'opacity-40' : ''
                    )}
                    onMouseEnter={() => {
                      if (opt.disabled) return
                      setActiveValues((prev) => {
                        const next = prev.slice(0, depth)
                        next[depth] = opt.value
                        return next
                      })
                    }}
                    onClick={async () => {
                      await activateAtDepth(depth, opt, { focusNext: true })
                    }}
                  >
                    <span className="truncate">{opt.label}</span>
                    {opt.loading ? (
                      <span aria-hidden="true" className="ml-2 text-white/70">
                        …
                      </span>
                    ) : hasNext ? (
                      <span aria-hidden="true" className="ml-2 text-white/60">
                        ▸
                      </span>
                    ) : null}
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  ) : null

  return (
    <div className={cn('inline-flex', className)} {...props}>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-disabled={disabled || undefined}
        disabled={disabled}
        className={cn(
          'inline-flex min-w-44 items-center justify-between gap-3 rounded-lg border border-aivent-border bg-aivent-panel px-3.5 py-2 text-sm text-aivent-text outline-none transition',
          'focus-visible:ring-2 focus-visible:ring-white/20',
          disabled ? 'opacity-50' : 'hover:bg-white/5'
        )}
        onClick={() => {
          if (disabled) return
          setOpen((prev) => {
            const next = !prev
            if (next) setActiveValues([])
            return next
          })
        }}
        onKeyDown={(e) => {
          if (disabled) return
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setOpen(true)
          }
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            setOpen(true)
          }
        }}
      >
        <span className={cn('truncate text-left', triggerText ? 'text-aivent-text' : 'text-aivent-muted')}>
          {triggerText ?? placeholder}
        </span>
        <span aria-hidden="true" className="text-white/60">
          ▾
        </span>
      </button>

      {open ? createPortal(popup, document.body) : null}
    </div>
  )
}
