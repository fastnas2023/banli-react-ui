import * as React from 'react'
import { cn } from '../../lib/cn'

export type InputSize = 'sm' | 'md' | 'lg'

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  /**
   * 视觉尺寸（与 HTML 原生 `size` 属性无关）
   */
  size?: InputSize
  loading?: boolean
  invalid?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size = 'md', disabled, loading, invalid, 'aria-invalid': ariaInvalid, ...props }, ref) => {
    const isDisabled = Boolean(disabled || loading)
    const isInvalid = Boolean(invalid || ariaInvalid)

    const base =
      'w-full rounded-lg border bg-black/20 text-white outline-none transition placeholder:text-white/30 ' +
      'focus-visible:ring-2 focus-visible:ring-aivent-secondary/60 disabled:pointer-events-none disabled:opacity-50'

    const sizes: Record<InputSize, string> = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-3 text-sm',
      lg: 'h-12 px-4 text-base',
    }

    return (
      <input
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        aria-invalid={isInvalid || undefined}
        data-loading={loading ? '' : undefined}
        data-invalid={isInvalid ? '' : undefined}
        className={cn(
          base,
          sizes[size],
          isInvalid ? 'border-red-500/70 focus:border-red-500' : 'border-aivent-border focus:border-aivent-secondary/70',
          loading ? 'cursor-wait' : '',
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

