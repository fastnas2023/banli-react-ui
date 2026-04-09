import * as React from 'react'
import { cn } from '../../lib/cn'
import type { UIStatus } from './checkbox'

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

type CollapseContextValue = {
  value: string[]
  setValue: (v: string[]) => void
  disabled: boolean
  multiple: boolean
  invalid?: boolean
  status?: UIStatus
  baseId: string
}

const CollapseContext = React.createContext<CollapseContextValue | null>(null)

type CollapseItemContextValue = {
  itemValue: string
  itemDisabled: boolean
  open: boolean
  triggerId: string
  contentId: string
  toggle: () => void
}

const CollapseItemContext = React.createContext<CollapseItemContextValue | null>(null)

export type CollapseRootProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> & {
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (v: string[]) => void
  disabled?: boolean
  /** false = Accordion（只允许展开一个） */
  multiple?: boolean
  status?: UIStatus
  invalid?: boolean
}

export const CollapseRoot = React.forwardRef<HTMLDivElement, CollapseRootProps>(
  (
    {
      value,
      defaultValue = [],
      onValueChange,
      disabled = false,
      multiple = true,
      status,
      invalid,
      className,
      ...props
    },
    ref
  ) => {
    const [v, setV] = useControllableState<string[]>({
      value,
      defaultValue,
      onChange: onValueChange,
    })
    const baseId = React.useId()

    return (
      <CollapseContext.Provider value={{ value: v, setValue: setV, disabled, multiple, status, invalid, baseId }}>
        <div
          ref={ref}
          aria-disabled={disabled || undefined}
          className={cn('rounded-xl2 border bg-aivent-panel', statusClass(status, invalid), className)}
          {...props}
        />
      </CollapseContext.Provider>
    )
  }
)

CollapseRoot.displayName = 'CollapseRoot'

export type CollapseItemProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string
  disabled?: boolean
}

export const CollapseItem = React.forwardRef<HTMLDivElement, CollapseItemProps>(
  ({ value, disabled: itemDisabled = false, className, ...props }, ref) => {
    const ctx = React.useContext(CollapseContext)
    if (!ctx) throw new Error('CollapseItem must be used within CollapseRoot')

    const disabled = ctx.disabled || itemDisabled
    const open = ctx.value.includes(value)
    const triggerId = `${ctx.baseId}-collapse-trigger-${value}`
    const contentId = `${ctx.baseId}-collapse-content-${value}`

    const toggle = () => {
      if (disabled) return
      if (ctx.multiple) {
        ctx.setValue(open ? ctx.value.filter((k) => k !== value) : [...ctx.value, value])
      } else {
        ctx.setValue(open ? [] : [value])
      }
    }

    return (
      <CollapseItemContext.Provider value={{ itemValue: value, itemDisabled: disabled, open, triggerId, contentId, toggle }}>
        <div
          ref={ref}
          data-state={open ? 'open' : 'closed'}
          data-disabled={disabled ? '' : undefined}
          className={cn('border-t border-aivent-border first:border-t-0', className)}
          {...props}
        />
      </CollapseItemContext.Provider>
    )
  }
)

CollapseItem.displayName = 'CollapseItem'

export type CollapseTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const CollapseTrigger = React.forwardRef<HTMLButtonElement, CollapseTriggerProps>(
  ({ className, type = 'button', children, onClick, ...props }, ref) => {
    const item = React.useContext(CollapseItemContext)
    if (!item) throw new Error('CollapseTrigger must be used within CollapseItem')

    return (
      <button
        ref={ref}
        type={type}
        id={item.triggerId}
        aria-controls={item.contentId}
        aria-expanded={item.open}
        aria-disabled={item.itemDisabled || undefined}
        disabled={item.itemDisabled}
        className={cn(
          'flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-aivent-text outline-none transition',
          'focus-visible:ring-2 focus-visible:ring-white/20',
          item.itemDisabled ? 'opacity-40' : 'hover:bg-white/5',
          className
        )}
        onClick={(e) => {
          item.toggle()
          onClick?.(e)
        }}
        {...props}
      >
        <span>{children}</span>
        <span aria-hidden="true" className={cn('transition-transform', item.open ? 'rotate-180' : 'rotate-0')}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    )
  }
)

CollapseTrigger.displayName = 'CollapseTrigger'

export type CollapseContentProps = React.HTMLAttributes<HTMLDivElement>

export const CollapseContent = React.forwardRef<HTMLDivElement, CollapseContentProps>(
  ({ className, children, ...props }, ref) => {
    const item = React.useContext(CollapseItemContext)
    if (!item) throw new Error('CollapseContent must be used within CollapseItem')

    return (
      <div
        ref={ref}
        id={item.contentId}
        role="region"
        aria-labelledby={item.triggerId}
        hidden={!item.open}
        className={cn('px-4 pb-4 text-sm text-aivent-text/80', className)}
        {...props}
      >
        {item.open ? children : null}
      </div>
    )
  }
)

CollapseContent.displayName = 'CollapseContent'

export type CollapseItemOption = {
  key: string
  label: React.ReactNode
  content: React.ReactNode
  disabled?: boolean
}

export type CollapseProps = Omit<CollapseRootProps, 'children' | 'onValueChange' | 'defaultValue'> & {
  /** AntD 风格 */
  value?: string[]
  defaultValue?: string[]
  onChange?: (v: string[]) => void
  items: CollapseItemOption[]
}

/**
 * Collapse（便捷封装）
 *
 * 组合式组件：CollapseRoot / CollapseItem / CollapseTrigger / CollapseContent
 */
export function Collapse({ items, value, defaultValue, onChange, ...props }: CollapseProps) {
  return (
    <CollapseRoot value={value} defaultValue={defaultValue ?? []} onValueChange={onChange} {...props}>
      {items.map((it) => (
        <CollapseItem key={it.key} value={it.key} disabled={it.disabled}>
          <CollapseTrigger>{it.label}</CollapseTrigger>
          <CollapseContent>{it.content}</CollapseContent>
        </CollapseItem>
      ))}
    </CollapseRoot>
  )
}

