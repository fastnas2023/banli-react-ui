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
  if (invalid || status === 'error') return 'ring-red-500/40'
  if (status === 'warning') return 'ring-yellow-500/40'
  return ''
}

function switchSizeClass(size: UISize) {
  switch (size) {
    case 'small':
      return { root: 'h-5 w-9', thumb: 'h-4 w-4', on: 'translate-x-4' }
    case 'large':
      return { root: 'h-7 w-12', thumb: 'h-6 w-6', on: 'translate-x-5' }
    case 'middle':
    default:
      return { root: 'h-6 w-10', thumb: 'h-5 w-5', on: 'translate-x-4' }
  }
}

type SwitchContextValue = {
  checked: boolean
  disabled: boolean
  size: UISize
}

const SwitchContext = React.createContext<SwitchContextValue | null>(null)

export type SwitchRootProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> & {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  status?: UIStatus
  size?: UISize
  invalid?: boolean
}

export const SwitchRoot = React.forwardRef<HTMLButtonElement, SwitchRootProps>(
  (
    {
      checked,
      defaultChecked = false,
      onCheckedChange,
      disabled = false,
      status,
      size = 'middle',
      invalid,
      className,
      children,
      onClick,
      onKeyDown,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useControllableState<boolean>({
      value: checked,
      defaultValue: defaultChecked,
      onChange: onCheckedChange,
    })

    const sizes = switchSizeClass(size)
    const toggle = React.useCallback(() => {
      if (disabled) return
      setIsChecked(!isChecked)
    }, [disabled, isChecked, setIsChecked])

    return (
      <SwitchContext.Provider value={{ checked: isChecked, disabled, size }}>
        <button
          ref={ref}
          type={type}
          role="switch"
          aria-checked={isChecked}
          aria-disabled={disabled || undefined}
          aria-invalid={invalid || status === 'error' ? true : undefined}
          data-state={isChecked ? 'checked' : 'unchecked'}
          disabled={disabled}
          className={cn(
            'relative inline-flex items-center rounded-full border border-aivent-border bg-aivent-panel outline-none transition',
            'focus-visible:ring-2 focus-visible:ring-white/20',
            sizes.root,
            isChecked ? 'bg-white/10' : '',
            disabled ? 'opacity-50' : 'hover:bg-white/5',
            statusClass(status, invalid),
            className
          )}
          onClick={(e) => {
            toggle()
            onClick?.(e)
          }}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              e.preventDefault()
              toggle()
            }
            onKeyDown?.(e)
          }}
          {...props}
        >
          {children}
        </button>
      </SwitchContext.Provider>
    )
  }
)

SwitchRoot.displayName = 'SwitchRoot'

export type SwitchThumbProps = React.HTMLAttributes<HTMLSpanElement>

export const SwitchThumb = React.forwardRef<HTMLSpanElement, SwitchThumbProps>(({ className, ...props }, ref) => {
  const ctx = React.useContext(SwitchContext)
  if (!ctx) return null
  const sizes = switchSizeClass(ctx.size)
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute left-0.5 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-sm transition-transform',
        sizes.thumb,
        ctx.checked ? sizes.on : 'translate-x-0',
        className
      )}
      {...props}
    />
  )
})

SwitchThumb.displayName = 'SwitchThumb'

export type SwitchProps = Omit<SwitchRootProps, 'checked' | 'defaultChecked' | 'onCheckedChange'> & {
  /** AntD 风格：value 即是否开启（boolean） */
  value?: boolean
  defaultValue?: boolean
  onChange?: (checked: boolean) => void
}

/**
 * Switch（便捷封装）
 *
 * 组合式组件：SwitchRoot / SwitchThumb
 */
export function Switch({ value, defaultValue, onChange, className, ...props }: SwitchProps) {
  return (
    <SwitchRoot checked={value} defaultChecked={defaultValue} onCheckedChange={onChange} className={cn('px-0', className)} {...props}>
      <SwitchThumb />
    </SwitchRoot>
  )
}

