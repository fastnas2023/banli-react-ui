import * as React from 'react'
import { cn } from '../../lib/cn'

export type IconSize = 'sm' | 'md' | 'lg' | number
export type IconVariant = 'inherit' | 'primary' | 'secondary' | 'muted' | 'danger'

export type IconProps = Omit<React.SVGAttributes<SVGSVGElement>, 'children'> & {
  /**
   * `<symbol id="...">` 的 id，例如 `check`、`github-icon`
   */
  name: string
  /**
   * 可选：外部 sprite 的 URL（例如 `/icons.svg`）。
   * - 未提供时默认引用页面内的 `#${name}`（配合 <IconSprite /> 使用）
   */
  spriteUrl?: string
  size?: IconSize
  variant?: IconVariant
  /**
   * 可访问性标题。提供后 Icon 会以 `role="img"` 渲染（非装饰性）。
   */
  title?: string
}

const sizeMap: Record<Exclude<IconSize, number>, number> = { sm: 16, md: 20, lg: 24 }
const variantClass: Record<IconVariant, string> = {
  inherit: '',
  primary: 'text-banli-primary',
  secondary: 'text-banli-secondary',
  muted: 'text-banli-muted',
  danger: 'text-red-400',
}

/**
 * Icon：基于 public/icons.svg 的 SVG sprite。
 * - 默认装饰性：`aria-hidden`
 * - 提供 `title` 或 `aria-label` 后：`role="img"`
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(
  { className, name, spriteUrl, size = 'md', variant = 'inherit', title, ...props },
  ref
) {
  const px = typeof size === 'number' ? size : sizeMap[size]
  const href = spriteUrl ? `${spriteUrl}#${name}` : `#${name}`
  const hasLabel = Boolean(title) || Boolean(props['aria-label'])
  const decorative = !hasLabel

  return (
    <svg
      ref={ref}
      width={px}
      height={px}
      focusable="false"
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : 'img'}
      className={cn('inline-block shrink-0 align-middle', variantClass[variant], className)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <use href={href} xlinkHref={href} />
    </svg>
  )
})
