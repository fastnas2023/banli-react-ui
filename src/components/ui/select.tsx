import * as React from 'react'
import { createPortal } from 'react-dom'
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
      return 'h-8 px-3 text-sm'
    case 'large':
      return 'h-11 px-4 text-base'
    case 'middle':
    default:
      return 'h-9 px-3.5 text-sm'
  }
}

type SelectContextValue = {
  open: boolean
  setOpen: (v: boolean) => void
  value: string | undefined
  setValue: (v: string) => void
  disabled: boolean
  size: UISize
  status?: UIStatus
  invalid?: boolean
  placeholder?: React.ReactNode
  triggerRef: React.RefObject<HTMLButtonElement | null>
  contentRef: React.RefObject<HTMLDivElement | null>
  registerLabel: (value: string, label: React.ReactNode) => void
  getLabel: (value: string | undefined) => React.ReactNode | undefined
}

const SelectContext = React.createContext<SelectContextValue | null>(null)

export type SelectRootProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  value?: string
  defaultValue?: string
  onValueChange?: (v: string) => void
  disabled?: boolean
  status?: UIStatus
  size?: UISize
  invalid?: boolean
  placeholder?: React.ReactNode
}

export const SelectRoot = React.forwardRef<HTMLDivElement, SelectRootProps>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      disabled = false,
      status,
      size = 'middle',
      invalid,
      placeholder,
      className,
      ...props
    },
    ref
  ) => {
    const [v, setV] = useControllableState<string | undefined>({
      value,
      defaultValue,
      onChange: onValueChange,
    })
    const [open, setOpen] = React.useState(false)
    const triggerRef = React.useRef<HTMLButtonElement | null>(null)
    const contentRef = React.useRef<HTMLDivElement | null>(null)
    const labelsRef = React.useRef(new Map<string, React.ReactNode>())

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

    const registerLabel = React.useCallback((val: string, label: React.ReactNode) => {
      labelsRef.current.set(val, label)
    }, [])
    const getLabel = React.useCallback((val: string | undefined) => (val ? labelsRef.current.get(val) : undefined), [])

    const ctx: SelectContextValue = React.useMemo(
      () => ({
        open,
        setOpen,
        value: v,
        setValue: setV as (v: string) => void,
        disabled,
        status,
        size,
        invalid,
        placeholder,
        triggerRef,
        contentRef,
        registerLabel,
        getLabel,
      }),
      [disabled, getLabel, invalid, open, placeholder, registerLabel, setV, size, status, v]
    )

    return (
      <SelectContext.Provider value={ctx}>
        <div ref={ref} className={cn('inline-flex', className)} {...props} />
      </SelectContext.Provider>
    )
  }
)

SelectRoot.displayName = 'SelectRoot'

export type SelectTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, children, onClick, onKeyDown, type = 'button', ...props }, ref) => {
    const ctx = React.useContext(SelectContext)
    if (!ctx) throw new Error('SelectTrigger must be used within SelectRoot')

    return (
      <button
        ref={(node) => {
          ctx.triggerRef.current = node
          if (typeof ref === 'function') ref(node)
          else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node
        }}
        type={type}
        aria-haspopup="listbox"
        aria-expanded={ctx.open}
        aria-disabled={ctx.disabled || undefined}
        aria-invalid={ctx.invalid || ctx.status === 'error' ? true : undefined}
        disabled={ctx.disabled}
        className={cn(
          'inline-flex min-w-44 items-center justify-between gap-3 rounded-lg border bg-aivent-panel text-aivent-text outline-none transition',
          'focus-visible:ring-2 focus-visible:ring-white/20',
          triggerSizeClass(ctx.size),
          statusClass(ctx.status, ctx.invalid),
          ctx.disabled ? 'opacity-50' : 'hover:bg-white/5',
          className
        )}
        onClick={(e) => {
          if (!ctx.disabled) ctx.setOpen(!ctx.open)
          onClick?.(e)
        }}
        onKeyDown={(e) => {
          if (ctx.disabled) return
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            ctx.setOpen(true)
          }
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            ctx.setOpen(true)
          }
          onKeyDown?.(e)
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
)

SelectTrigger.displayName = 'SelectTrigger'

export type SelectValueProps = React.HTMLAttributes<HTMLSpanElement> & {
  placeholder?: React.ReactNode
}

export const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(({ className, placeholder, ...props }, ref) => {
  const ctx = React.useContext(SelectContext)
  if (!ctx) throw new Error('SelectValue must be used within SelectRoot')
  const label = ctx.getLabel(ctx.value)
  const fallbackValue = ctx.value ? ctx.value : null
  const show = label ?? fallbackValue ?? placeholder ?? ctx.placeholder
  const hasValue = label != null || fallbackValue != null
  return (
    <span ref={ref} className={cn('truncate text-left', hasValue ? 'text-aivent-text' : 'text-aivent-muted', className)} {...props}>
      {show}
    </span>
  )
})

SelectValue.displayName = 'SelectValue'

export type SelectContentProps = React.HTMLAttributes<HTMLDivElement>

export const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(({ className, children, onKeyDown, ...props }, ref) => {
  const ctx = React.useContext(SelectContext)
  if (!ctx) throw new Error('SelectContent must be used within SelectRoot')

  React.useEffect(() => {
    if (!ctx.open) return
    const root = ctx.contentRef.current
    if (!root) return
    // focus selected item or first enabled
    const selected = ctx.value ? root.querySelector<HTMLElement>(`[data-value="${CSS.escape(ctx.value)}"]`) : null
    const firstEnabled = root.querySelector<HTMLElement>('[data-select-item="true"]:not([data-disabled="true"])')
    ;(selected ?? firstEnabled)?.focus()
  }, [ctx.open, ctx.value, ctx.contentRef])

  if (!ctx.open) return null

  const el = (
    <div
      ref={(node) => {
        ctx.contentRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
      }}
      role="listbox"
      tabIndex={-1}
      className={cn(
        'z-50 mt-2 min-w-44 overflow-hidden rounded-xl2 border border-aivent-border bg-aivent-panel p-1 text-sm text-aivent-text shadow-glow outline-none',
        className
      )}
      onKeyDown={(e) => {
        const root = ctx.contentRef.current
        if (!root) return
        const items = Array.from(root.querySelectorAll<HTMLElement>('[data-select-item="true"]')).filter(
          (n) => n.getAttribute('data-disabled') !== 'true'
        )
        const active = document.activeElement as HTMLElement | null
        const idx = active ? items.indexOf(active) : -1
        const focusAt = (nextIdx: number) => {
          const el = items[nextIdx]
          el?.focus()
        }

        if (e.key === 'Escape') {
          e.preventDefault()
          ctx.setOpen(false)
          ctx.triggerRef.current?.focus()
        }
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          focusAt(Math.min(items.length - 1, (idx >= 0 ? idx + 1 : 0)))
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault()
          focusAt(Math.max(0, (idx >= 0 ? idx - 1 : items.length - 1)))
        }
        if (e.key === 'Home') {
          e.preventDefault()
          focusAt(0)
        }
        if (e.key === 'End') {
          e.preventDefault()
          focusAt(items.length - 1)
        }
        if (e.key === 'Enter' || e.key === ' ') {
          const val = active?.getAttribute?.('data-value')
          if (val) {
            e.preventDefault()
            ctx.setValue(val)
            ctx.setOpen(false)
            ctx.triggerRef.current?.focus()
          }
        }
        onKeyDown?.(e)
      }}
      {...props}
    >
      {children}
    </div>
  )

  return createPortal(el, document.body)
})

SelectContent.displayName = 'SelectContent'

export type SelectItemProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> & {
  value: string
  disabled?: boolean
  textValue?: string
}

export const SelectItem = React.forwardRef<HTMLButtonElement, SelectItemProps>(
  ({ value, disabled: itemDisabled = false, textValue, className, children, onClick, type = 'button', ...props }, ref) => {
    const ctx = React.useContext(SelectContext)
    if (!ctx) throw new Error('SelectItem must be used within SelectRoot')
    const disabled = ctx.disabled || itemDisabled
    const selected = ctx.value === value

    React.useEffect(() => {
      ctx.registerLabel(value, children ?? textValue ?? value)
    }, [children, ctx, textValue, value])

    return (
      <button
        ref={ref}
        type={type}
        role="option"
        aria-selected={selected}
        aria-disabled={disabled || undefined}
        tabIndex={-1}
        data-select-item="true"
        data-value={value}
        data-disabled={disabled ? 'true' : 'false'}
        disabled={disabled}
        className={cn(
          'flex w-full cursor-default select-none items-center justify-between rounded-lg px-3 py-2 text-left outline-none transition',
          'focus:bg-white/10 data-[selected=true]:bg-white/10 data-[selected=true]:text-white',
          disabled ? 'opacity-40' : '',
          className
        )}
        data-selected={selected ? 'true' : 'false'}
        onClick={(e) => {
          if (!disabled) {
            ctx.setValue(value)
            ctx.setOpen(false)
            ctx.triggerRef.current?.focus()
          }
          onClick?.(e)
        }}
        {...props}
      >
        <span className="truncate">{children}</span>
        {selected ? (
          <span aria-hidden="true" className="ml-3 text-white">
            ✓
          </span>
        ) : null}
      </button>
    )
  }
)

SelectItem.displayName = 'SelectItem'

export type SelectOption = {
  label: React.ReactNode
  value: string
  disabled?: boolean
}

export type SelectProps = Omit<SelectRootProps, 'children' | 'onValueChange'> & {
  /** AntD 风格 */
  value?: string
  defaultValue?: string
  onChange?: (v: string) => void
  options: SelectOption[]
}

/**
 * Select（便捷封装）
 *
 * 组合式组件：SelectRoot / SelectTrigger / SelectContent / SelectItem / SelectValue
 */
export function Select({ options, value, defaultValue, onChange, placeholder, ...props }: SelectProps) {
  return (
    <SelectRoot value={value} defaultValue={defaultValue} onValueChange={onChange} placeholder={placeholder} {...props}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
        <span aria-hidden="true" className="text-white/60">
          ▾
        </span>
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  )
}
