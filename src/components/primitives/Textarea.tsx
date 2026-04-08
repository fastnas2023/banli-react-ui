import * as React from 'react'
import { cn } from '../../lib/cn'

export type TextareaSize = 'sm' | 'md' | 'lg'

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  size?: TextareaSize
  loading?: boolean
  invalid?: boolean
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size = 'md', disabled, loading, invalid, 'aria-invalid': ariaInvalid, ...props }, ref) => {
    const isDisabled = Boolean(disabled || loading)
    const isInvalid = Boolean(invalid || ariaInvalid)

    const base =
      'w-full rounded-lg border bg-black/20 text-white outline-none transition placeholder:text-white/30 ' +
      'focus-visible:ring-2 focus-visible:ring-aivent-secondary/60 disabled:pointer-events-none disabled:opacity-50'

    const sizes: Record<TextareaSize, string> = {
      sm: 'min-h-[96px] px-3 py-2 text-sm',
      md: 'min-h-[140px] px-3 py-3 text-sm',
      lg: 'min-h-[180px] px-4 py-3 text-base',
    }

    return (
      <textarea
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

Textarea.displayName = 'Textarea'

