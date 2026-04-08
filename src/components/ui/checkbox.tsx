import * as React from 'react'
import { cn } from '../../lib/cn'

export type UIStatus = 'error' | 'warning'
export type UISize = 'small' | 'middle' | 'large'

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

function checkboxSizeClass(size: UISize) {
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

function statusClass(status?: UIStatus, invalid?: boolean) {
  if (invalid || status === 'error') return 'border-red-500/80'
  if (status === 'warning') return 'border-yellow-500/80'
  return 'border-aivent-border'
}

type CheckboxContextValue = {
  checked: boolean
  disabled: boolean
  setChecked: (v: boolean) => void
}

const CheckboxContext = React.createContext<CheckboxContextValue | null>(null)

export type CheckboxRootProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> & {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  invalid?: boolean
  status?: UIStatus
  size?: UISize
}

export const CheckboxRoot = React.forwardRef<HTMLButtonElement, CheckboxRootProps>(
  (
    {
      checked,
      defaultChecked = false,
      onCheckedChange,
      disabled = false,
      invalid,
      status,
      size = 'middle',
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

    const checkedRef = React.useRef(isChecked)
    // 同步更新：避免在紧接着的键盘事件中读到旧值（useEffect 可能尚未执行）
    checkedRef.current = isChecked

    const toggle = React.useCallback(() => {
      if (disabled) return
      setIsChecked(!checkedRef.current)
    }, [disabled, setIsChecked])

    const ignoreNextClickRef = React.useRef(false)

    return (
      <CheckboxContext.Provider value={{ checked: isChecked, disabled, setChecked: setIsChecked }}>
        <button
          ref={ref}
          type={type}
          role="checkbox"
          aria-checked={isChecked}
          aria-disabled={disabled || undefined}
          aria-invalid={invalid || status === 'error' ? true : undefined}
          data-state={isChecked ? 'checked' : 'unchecked'}
          data-disabled={disabled ? '' : undefined}
          disabled={disabled}
          className={cn(
            'inline-flex items-center justify-center rounded-md border bg-aivent-panel text-aivent-text outline-none transition',
            'focus-visible:ring-2 focus-visible:ring-white/20',
            checkboxSizeClass(size),
            statusClass(status, invalid),
            disabled ? 'opacity-50' : 'hover:bg-white/5',
            className
          )}
          onClick={(e) => {
            // Space 触发的 click 可能与自定义键盘切换重复；这里过滤掉下一次键盘 click
            if (ignoreNextClickRef.current) {
              ignoreNextClickRef.current = false
              onClick?.(e)
              return
            }
            ignoreNextClickRef.current = false
            toggle()
            onClick?.(e)
          }}
          onKeyDown={(e) => {
            // role=checkbox：Space 触发切换；同时阻止默认滚动
            if (e.key === ' ' || e.key === 'Spacebar' || e.key === 'Space') {
              e.preventDefault()
              ignoreNextClickRef.current = true
              toggle()
              window.setTimeout(() => {
                ignoreNextClickRef.current = false
              }, 0)
            }
            onKeyDown?.(e)
          }}
          {...props}
        >
          {children}
        </button>
      </CheckboxContext.Provider>
    )
  }
)

CheckboxRoot.displayName = 'CheckboxRoot'

export type CheckboxIndicatorProps = React.HTMLAttributes<HTMLSpanElement>

export const CheckboxIndicator = React.forwardRef<HTMLSpanElement, CheckboxIndicatorProps>(
  ({ className, ...props }, ref) => {
    const ctx = React.useContext(CheckboxContext)
    if (!ctx) return null
    const { checked } = ctx
    return (
      <span
        ref={ref}
        aria-hidden="true"
        className={cn(
          'pointer-events-none grid place-items-center text-white',
          // always reserve space; fade icon
          checked ? 'opacity-100' : 'opacity-0',
          className
        )}
        {...props}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M13.5 4.5L6.5 11.5L2.5 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    )
  }
)

CheckboxIndicator.displayName = 'CheckboxIndicator'

export type CheckboxProps = Omit<CheckboxRootProps, 'checked' | 'defaultChecked' | 'onCheckedChange'> & {
  /** AntD 风格：value 即是否选中（boolean） */
  value?: boolean
  defaultValue?: boolean
  onChange?: (checked: boolean) => void
}

/**
 * Checkbox（便捷封装）
 *
 * - 受控：value + onChange
 * - 非受控：defaultValue
 *
 * 同时保留组合式组件：CheckboxRoot / CheckboxIndicator
 */
export function Checkbox({ value, defaultValue, onChange, children, className, ...props }: CheckboxProps) {
  return (
    <CheckboxRoot
      checked={value}
      defaultChecked={defaultValue}
      onCheckedChange={onChange}
      className={cn('gap-2 px-2', className)}
      {...props}
    >
      <CheckboxIndicator />
      {children ? <span className="select-none text-sm">{children}</span> : null}
    </CheckboxRoot>
  )
}
