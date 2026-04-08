import * as React from 'react'
import { cn } from '../../lib/cn'

export type DividerOrientation = 'horizontal' | 'vertical'
export type DividerVariant = 'solid' | 'dashed'

export type DividerProps = React.HTMLAttributes<HTMLElement> & {
  orientation?: DividerOrientation
  variant?: DividerVariant
  /**
   * 装饰性分割线默认不参与无障碍树。
   * 若希望被读屏识别，可传 `decorative={false}` 并配合 `aria-label` 使用。
   */
  decorative?: boolean
}

export const Divider = React.forwardRef<HTMLElement, DividerProps>(function Divider(
  { className, orientation = 'horizontal', variant = 'solid', decorative = true, ...props },
  ref
) {
  const borderStyle = variant === 'dashed' ? 'border-dashed' : 'border-solid'

  if (orientation === 'vertical') {
    return (
      <div
        ref={ref as any}
        role="separator"
        aria-orientation="vertical"
        aria-hidden={decorative ? true : undefined}
        className={cn('h-full w-px shrink-0 border-l border-aivent-border', borderStyle, className)}
        {...props}
      />
    )
  }

  return (
    <hr
      ref={ref as any}
      aria-hidden={decorative ? true : undefined}
      className={cn('w-full border-0 border-t border-aivent-border', borderStyle, className)}
      {...(props as any)}
    />
  )
})

