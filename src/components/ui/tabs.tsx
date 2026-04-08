import * as React from 'react'
import { cn } from '../../lib/cn'
import type { UISize, UIStatus } from './checkbox'

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

function statusClass(status?: UIStatus, invalid?: boolean) {
  if (invalid || status === 'error') return 'border-red-500/80'
  if (status === 'warning') return 'border-yellow-500/80'
  return 'border-aivent-border'
}

function triggerSizeClass(size: UISize) {
  switch (size) {
    case 'small':
      return 'px-3 py-1 text-sm'
    case 'large':
      return 'px-4 py-2 text-base'
    case 'middle':
    default:
      return 'px-3.5 py-1.5 text-sm'
  }
}

type TabsContextValue = {
  value: string
  setValue: (v: string) => void
  disabled: boolean
  size: UISize
  status?: UIStatus
  invalid?: boolean
  baseId: string
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

export type TabsRootProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  value?: string
  defaultValue: string
  onValueChange?: (v: string) => void
  disabled?: boolean
  status?: UIStatus
  size?: UISize
  invalid?: boolean
}

export const TabsRoot = React.forwardRef<HTMLDivElement, TabsRootProps>(
  (
    { value, defaultValue, onValueChange, disabled = false, status, size = 'middle', invalid, className, ...props },
    ref
  ) => {
    const [v, setV] = useControllableState<string>({
      value,
      defaultValue,
      onChange: onValueChange,
    })
    const baseId = React.useId()
    return (
      <TabsContext.Provider value={{ value: v, setValue: setV, disabled, status, size, invalid, baseId }}>
        <div ref={ref} className={cn('w-full', className)} {...props} />
      </TabsContext.Provider>
    )
  }
)

TabsRoot.displayName = 'TabsRoot'

export type TabsListProps = React.HTMLAttributes<HTMLDivElement>

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(({ className, onKeyDown, ...props }, ref) => {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error('TabsList must be used within TabsRoot')

  const listRef = React.useRef<HTMLDivElement | null>(null)
  React.useImperativeHandle(ref, () => listRef.current as HTMLDivElement)

  const moveFocusAndActivate = (dir: 'prev' | 'next' | 'first' | 'last') => {
    const container = listRef.current ?? (document.activeElement?.closest?.('[role="tablist"]') as HTMLElement | null)
    if (!container) return
    const tabs = Array.from(container.querySelectorAll<HTMLElement>('[data-tabs-trigger="true"]')).filter(
      (el) => el.getAttribute('data-disabled') !== 'true'
    )
    if (!tabs.length) return
    const active = document.activeElement as HTMLElement | null
    const idx = active ? tabs.indexOf(active) : tabs.findIndex((t) => t.getAttribute('data-value') === ctx.value)
    const base = idx >= 0 ? idx : 0
    let next = base
    if (dir === 'first') next = 0
    else if (dir === 'last') next = tabs.length - 1
    else if (dir === 'prev') next = (base - 1 + tabs.length) % tabs.length
    else next = (base + 1) % tabs.length
    const el = tabs[next]
    el.focus()
    const val = el.getAttribute('data-value')
    if (val) ctx.setValue(val)
  }

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-disabled={ctx.disabled || undefined}
      className={cn('inline-flex items-center gap-1 rounded-xl2 border bg-aivent-panel p-1', statusClass(ctx.status, ctx.invalid), className)}
      onKeyDown={(e) => {
        if (ctx.disabled) return
        switch (e.key) {
          case 'ArrowLeft':
          case 'ArrowUp':
            e.preventDefault()
            moveFocusAndActivate('prev')
            break
          case 'ArrowRight':
          case 'ArrowDown':
            e.preventDefault()
            moveFocusAndActivate('next')
            break
          case 'Home':
            e.preventDefault()
            moveFocusAndActivate('first')
            break
          case 'End':
            e.preventDefault()
            moveFocusAndActivate('last')
            break
        }
        onKeyDown?.(e)
      }}
      {...props}
    />
  )
})

TabsList.displayName = 'TabsList'

export type TabsTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string
  disabled?: boolean
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, disabled: itemDisabled = false, className, children, onClick, type = 'button', ...props }, ref) => {
    const ctx = React.useContext(TabsContext)
    if (!ctx) throw new Error('TabsTrigger must be used within TabsRoot')
    const disabled = ctx.disabled || itemDisabled
    const selected = ctx.value === value
    const triggerId = `${ctx.baseId}-trigger-${value}`
    const panelId = `${ctx.baseId}-panel-${value}`

    return (
      <button
        ref={ref}
        type={type}
        role="tab"
        id={triggerId}
        aria-controls={panelId}
        aria-selected={selected}
        aria-disabled={disabled || undefined}
        tabIndex={selected ? 0 : -1}
        data-tabs-trigger="true"
        data-value={value}
        data-disabled={disabled ? 'true' : 'false'}
        disabled={disabled}
        className={cn(
          'rounded-lg text-aivent-text outline-none transition',
          'focus-visible:ring-2 focus-visible:ring-white/20',
          triggerSizeClass(ctx.size),
          selected ? 'bg-white/10 text-white' : 'hover:bg-white/5',
          disabled ? 'opacity-40' : '',
          className
        )}
        onClick={(e) => {
          if (!disabled) ctx.setValue(value)
          onClick?.(e)
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
)

TabsTrigger.displayName = 'TabsTrigger'

export type TabsContentProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(({ value, className, children, ...props }, ref) => {
  const ctx = React.useContext(TabsContext)
  if (!ctx) throw new Error('TabsContent must be used within TabsRoot')
  const selected = ctx.value === value
  const triggerId = `${ctx.baseId}-trigger-${value}`
  const panelId = `${ctx.baseId}-panel-${value}`
  return (
    <div
      ref={ref}
      role="tabpanel"
      id={panelId}
      aria-labelledby={triggerId}
      hidden={!selected}
      className={cn('mt-4 rounded-xl2 border border-aivent-border bg-aivent-panel p-4 text-aivent-text', className)}
      {...props}
    >
      {selected ? children : null}
    </div>
  )
})

TabsContent.displayName = 'TabsContent'

export type TabOption = {
  label: React.ReactNode
  value: string
  content: React.ReactNode
  disabled?: boolean
}

export type TabsProps = Omit<TabsRootProps, 'children' | 'onValueChange' | 'defaultValue'> & {
  /** AntD 风格 */
  value?: string
  defaultValue?: string
  onChange?: (v: string) => void
  options: TabOption[]
}

/**
 * Tabs（便捷封装）
 *
 * 组合式组件：TabsRoot / TabsList / TabsTrigger / TabsContent
 */
export function Tabs({ options, value, defaultValue, onChange, ...props }: TabsProps) {
  const dv = defaultValue ?? options[0]?.value ?? ''
  return (
    <TabsRoot value={value} defaultValue={dv} onValueChange={onChange} {...props}>
      <TabsList>
        {options.map((t) => (
          <TabsTrigger key={t.value} value={t.value} disabled={t.disabled}>
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {options.map((t) => (
        <TabsContent key={t.value} value={t.value}>
          {t.content}
        </TabsContent>
      ))}
    </TabsRoot>
  )
}
