import * as React from 'react'
import { cn } from '../../lib/cn'

export type SpinnerSize = 'sm' | 'md' | 'lg' | number
export type SpinnerVariant = 'inherit' | 'primary' | 'secondary' | 'muted'

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> & {
  size?: SpinnerSize
  variant?: SpinnerVariant
  /**
   * 读屏可见的加载文案（用于可访问性）。
   */
  label?: string
}

const sizeClass: Record<Exclude<SpinnerSize, number>, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

const variantClass: Record<SpinnerVariant, string> = {
  inherit: '',
  primary: 'text-aivent-primary',
  secondary: 'text-aivent-secondary',
  muted: 'text-aivent-muted',
}

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(function Spinner(
  { className, size = 'md', variant = 'inherit', label = 'Loading', ...props },
  ref
) {
  const isNumber = typeof size === 'number'

  return (
    <span
      ref={ref}
      role="status"
      aria-label={label}
      className={cn('inline-flex items-center justify-center', className)}
      {...props}
    >
      <svg
        className={cn('animate-spin', variantClass[variant], isNumber ? undefined : sizeClass[size])}
        style={isNumber ? { width: size, height: size } : undefined}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
        />
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  )
})

