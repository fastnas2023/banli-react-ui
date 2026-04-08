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

function itemSizeClass(size: UISize) {
  switch (size) {
    case 'small':
      return 'h-4 w-4'
    case 'large':
      return 'h-6 w-6'
    case 'middle':
    default:
      return 'h-5 w-5'
  }
}

type RadioGroupContextValue = {
  value: string | undefined
  setValue: (v: string) => void
  disabled: boolean
  size: UISize
  status?: UIStatus
  invalid?: boolean
}

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null)

export type RadioGroupRootProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  value?: string
  defaultValue?: string
  onValueChange?: (v: string) => void
  disabled?: boolean
  status?: UIStatus
  size?: UISize
  invalid?: boolean
}

export const RadioGroupRoot = React.forwardRef<HTMLDivElement, RadioGroupRootProps>(
  (
    {
      value,
      defaultValue,
      onValueChange,
      disabled = false,
      status,
      size = 'middle',
      invalid,
      className,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const [v, setV] = useControllableState<string | undefined>({
      value,
      defaultValue,
      onChange: onValueChange,
    })

    const localRef = React.useRef<HTMLDivElement | null>(null)
    React.useImperativeHandle(ref, () => localRef.current as HTMLDivElement)

    const moveFocusAndSelect = React.useCallback(
      (dir: 'prev' | 'next' | 'first' | 'last') => {
        const root = localRef.current
        if (!root) return
        const items = Array.from(root.querySelectorAll<HTMLElement>('[data-radio-item="true"]'))
          .filter((el) => el.getAttribute('data-disabled') !== 'true')
          .filter((el) => !el.hasAttribute('disabled'))
        if (!items.length) return

        const active = document.activeElement as HTMLElement | null
        const currentIndex = active ? items.indexOf(active) : -1
        const selectedIndex = v ? items.findIndex((el) => el.getAttribute('data-value') === v) : -1
        const base = currentIndex >= 0 ? currentIndex : selectedIndex >= 0 ? selectedIndex : 0

        let nextIndex = base
        if (dir === 'first') nextIndex = 0
        else if (dir === 'last') nextIndex = items.length - 1
        else if (dir === 'prev') nextIndex = (base - 1 + items.length) % items.length
        else nextIndex = (base + 1) % items.length

        const nextEl = items[nextIndex]
        nextEl.focus()
        const nextValue = nextEl.getAttribute('data-value')
        if (nextValue) setV(nextValue)
      },
      [setV, v]
    )

    return (
      <RadioGroupContext.Provider value={{ value: v, setValue: setV as (v: string) => void, disabled, status, size, invalid }}>
        <div
          ref={localRef}
          role="radiogroup"
          aria-disabled={disabled || undefined}
          aria-invalid={invalid || status === 'error' ? true : undefined}
          className={cn('flex flex-col gap-2', className)}
          onKeyDown={(e) => {
            if (disabled) return
            switch (e.key) {
              case 'ArrowUp':
              case 'ArrowLeft':
                e.preventDefault()
                moveFocusAndSelect('prev')
                break
              case 'ArrowDown':
              case 'ArrowRight':
                e.preventDefault()
                moveFocusAndSelect('next')
                break
              case 'Home':
                e.preventDefault()
                moveFocusAndSelect('first')
                break
              case 'End':
                e.preventDefault()
                moveFocusAndSelect('last')
                break
            }
            onKeyDown?.(e)
          }}
          {...props}
        />
      </RadioGroupContext.Provider>
    )
  }
)

RadioGroupRoot.displayName = 'RadioGroupRoot'

export type RadioGroupItemProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> & {
  value: string
  disabled?: boolean
}

export const RadioGroupItem = React.forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ value, disabled: itemDisabled = false, className, children, onClick, onKeyDown, type = 'button', ...props }, ref) => {
    const ctx = React.useContext(RadioGroupContext)
    if (!ctx) throw new Error('RadioGroupItem must be used within RadioGroupRoot')
    const disabled = ctx.disabled || itemDisabled
    const checked = ctx.value === value

    return (
      <button
        ref={ref}
        type={type}
        role="radio"
        aria-checked={checked}
        aria-disabled={disabled || undefined}
        data-radio-item="true"
        data-value={value}
        data-disabled={disabled ? 'true' : 'false'}
        disabled={disabled}
        className={cn(
          'group inline-flex items-center gap-2 rounded-lg px-2 py-1 text-left text-aivent-text outline-none transition',
          'focus-visible:ring-2 focus-visible:ring-white/20',
          disabled ? 'opacity-50' : 'hover:bg-white/5',
          className
        )}
        onClick={(e) => {
          if (!disabled) ctx.setValue(value)
          onClick?.(e)
        }}
        onKeyDown={(e) => {
          if (!disabled && (e.key === ' ' || e.key === 'Enter')) {
            e.preventDefault()
            ctx.setValue(value)
          }
          onKeyDown?.(e)
        }}
        {...props}
      >
        <span
          aria-hidden="true"
          className={cn(
            'grid place-items-center rounded-full border bg-aivent-panel',
            itemSizeClass(ctx.size),
            statusClass(ctx.status, ctx.invalid),
            checked ? 'text-white' : 'text-transparent'
          )}
        >
          <span className={cn('block rounded-full bg-current', ctx.size === 'small' ? 'h-1.5 w-1.5' : ctx.size === 'large' ? 'h-2.5 w-2.5' : 'h-2 w-2')} />
        </span>
        {children ? <span className="select-none text-sm">{children}</span> : null}
      </button>
    )
  }
)

RadioGroupItem.displayName = 'RadioGroupItem'

export type RadioOption = {
  label: React.ReactNode
  value: string
  disabled?: boolean
}

export type RadioGroupProps = Omit<RadioGroupRootProps, 'children' | 'onValueChange'> & {
  /** AntD 风格 */
  value?: string
  defaultValue?: string
  onChange?: (v: string) => void
  options: RadioOption[]
}

/**
 * RadioGroup（便捷封装）
 *
 * 组合式组件：RadioGroupRoot / RadioGroupItem
 */
export function RadioGroup({ options, value, defaultValue, onChange, ...props }: RadioGroupProps) {
  return (
    <RadioGroupRoot value={value} defaultValue={defaultValue} onValueChange={onChange} {...props}>
      {options.map((opt) => (
        <RadioGroupItem key={opt.value} value={opt.value} disabled={opt.disabled}>
          {opt.label}
        </RadioGroupItem>
      ))}
    </RadioGroupRoot>
  )
}

