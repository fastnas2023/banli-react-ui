import * as React from 'react'
import { cn } from '../../lib/cn'

export type SkeletonVariant = 'text' | 'block' | 'avatar'
export type SkeletonSize = 'small' | 'middle' | 'large'

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: SkeletonVariant
  size?: SkeletonSize
}

function sizeClass(variant: SkeletonVariant, size: SkeletonSize) {
  if (variant === 'avatar') {
    switch (size) {
      case 'small':
        return 'h-8 w-8'
      case 'large':
        return 'h-12 w-12'
      case 'middle':
      default:
        return 'h-10 w-10'
    }
  }

  if (variant === 'text') {
    switch (size) {
      case 'small':
        return 'h-3 w-full'
      case 'large':
        return 'h-5 w-full'
      case 'middle':
      default:
        return 'h-4 w-full'
    }
  }

  // block
  switch (size) {
    case 'small':
      return 'h-24 w-full'
    case 'large':
      return 'h-40 w-full'
    case 'middle':
    default:
      return 'h-32 w-full'
  }
}

function variantClass(variant: SkeletonVariant) {
  switch (variant) {
    case 'avatar':
      return 'rounded-full'
    case 'text':
      return 'rounded'
    case 'block':
    default:
      return 'rounded-md'
  }
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant = 'block', size = 'middle', className, ...props }, ref) => {
    const { role = 'status', ...rest } = props
    // React 的 aria-* 使用 kebab-case key；这里做默认值：aria-busy=true
    const { ['aria-busy']: ariaBusyProp, ...restProps } = rest as Record<string, unknown>
    const ariaBusy = (ariaBusyProp ?? true) as React.AriaAttributes['aria-busy']

    return (
      <div
        ref={ref}
        role={role}
        aria-busy={ariaBusy}
        data-variant={variant}
        data-size={size}
        className={cn(
          'animate-pulse bg-white/10',
          variantClass(variant),
          sizeClass(variant, size),
          className
        )}
        {...(restProps as React.HTMLAttributes<HTMLDivElement>)}
      />
    )
  }
)

Skeleton.displayName = 'Skeleton'

