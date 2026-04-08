import * as React from 'react'
import { cn } from '../../lib/cn'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'muted'
  | 'small'
  | 'code'

export type TypographySize = 'xs' | 'sm' | 'md' | 'lg'

export type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements
  variant?: TypographyVariant
  size?: TypographySize
}

const defaultAs: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  muted: 'p',
  small: 'span',
  code: 'code',
}

const variantClass: Record<TypographyVariant, string> = {
  h1: 'text-4xl font-bold tracking-tight text-white md:text-6xl',
  h2: 'text-3xl font-bold tracking-tight text-white md:text-4xl',
  h3: 'text-2xl font-bold tracking-tight text-white md:text-3xl',
  h4: 'text-xl font-semibold text-white',
  h5: 'text-lg font-semibold text-white',
  h6: 'text-base font-semibold text-white',
  body: 'text-sm leading-relaxed text-white md:text-base',
  muted: 'text-sm leading-relaxed text-aivent-muted md:text-base',
  small: 'text-xs text-aivent-muted',
  code: 'rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.85em] text-white',
}

const sizeClass: Record<TypographySize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
}

/**
 * Typography：文本语义与样式的最小抽象。
 * - 默认根据 `variant` 选择语义标签（可用 `as` 覆盖）
 * - `variant` 决定主样式；`size` 可用于微调字号
 */
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(function Typography(
  { as, className, variant = 'body', size, ...props },
  ref
) {
  const Tag = (as ?? defaultAs[variant]) as any

  return (
    <Tag
      ref={ref as any}
      className={cn(variantClass[variant], size ? sizeClass[size] : undefined, className)}
      {...props}
    />
  )
})

