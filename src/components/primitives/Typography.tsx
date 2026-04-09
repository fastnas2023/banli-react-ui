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
  as?: keyof React.JSX.IntrinsicElements
  variant?: TypographyVariant
  size?: TypographySize
}

const defaultAs: Record<TypographyVariant, keyof React.JSX.IntrinsicElements> = {
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
  muted: 'text-sm leading-relaxed text-banli-muted md:text-base',
  small: 'text-xs text-banli-muted',
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
  const Tag = as ?? defaultAs[variant]

  return (
    React.createElement(Tag, {
      ...props,
      ref,
      className: cn(variantClass[variant], size ? sizeClass[size] : undefined, className),
    })
  )
})

/**
 * Text：更直观的别名（默认 body）。
 */
export const Text = React.forwardRef<HTMLElement, Omit<TypographyProps, 'variant'>>(function Text(props, ref) {
  return <Typography ref={ref} variant="body" {...props} />
})

/**
 * Title：标题别名（level=1..6 对应 h1..h6）。
 */
export const Title = React.forwardRef<
  HTMLElement,
  Omit<TypographyProps, 'variant' | 'as'> & { level?: 1 | 2 | 3 | 4 | 5 | 6 }
>(function Title({ level = 2, ...props }, ref) {
  const variantMap: Record<1 | 2 | 3 | 4 | 5 | 6, TypographyVariant> = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
  }
  const variant = variantMap[level]
  return <Typography ref={ref} variant={variant} {...props} />
})

Text.displayName = 'Text'
Title.displayName = 'Title'
