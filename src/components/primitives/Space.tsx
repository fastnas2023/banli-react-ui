import * as React from 'react'
import { cn } from '../../lib/cn'

export type SpaceDirection = 'horizontal' | 'vertical'
export type SpaceSize = 'xs' | 'sm' | 'md' | 'lg' | number

export type SpaceProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
  direction?: SpaceDirection
  size?: SpaceSize
  align?: React.CSSProperties['alignItems']
  wrap?: boolean
  children?: React.ReactNode
}

const gapClass: Record<Exclude<SpaceSize, number>, string> = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
}

/**
 * Space：用于快速排列子元素的 gap 容器（类似 antd Space 的最小实现）。
 * - `direction` 控制横/竖排列
 * - `size` 支持预设与自定义数值（数值会写入 style.gap）
 */
export const Space = React.forwardRef<HTMLDivElement, SpaceProps>(function Space(
  { className, direction = 'horizontal', size = 'md', align, wrap = false, style, ...props },
  ref
) {
  const isNumber = typeof size === 'number'
  const mergedStyle: React.CSSProperties = {
    ...style,
    ...(align ? { alignItems: align } : null),
    ...(isNumber ? { gap: size } : null),
  }

  return (
    <div
      ref={ref}
      className={cn(
        'flex',
        direction === 'vertical' ? 'flex-col' : 'flex-row',
        wrap ? 'flex-wrap' : undefined,
        isNumber ? undefined : gapClass[size],
        className
      )}
      style={mergedStyle}
      {...props}
    />
  )
})

