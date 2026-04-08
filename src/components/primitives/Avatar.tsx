import * as React from 'react'
import { cn } from '../../lib/cn'

export type AvatarSize = 'sm' | 'md' | 'lg' | number
export type AvatarVariant = 'circle' | 'rounded' | 'square'

export type AvatarProps = Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> & {
  src?: string
  alt?: string
  /**
   * 无图片或加载失败时展示的内容。若不传，会自动从 alt 生成首字母。
   */
  fallback?: React.ReactNode
  size?: AvatarSize
  variant?: AvatarVariant
}

const sizeMap: Record<Exclude<AvatarSize, number>, number> = { sm: 28, md: 40, lg: 56 }
const radiusClass: Record<AvatarVariant, string> = {
  circle: 'rounded-full',
  rounded: 'rounded-xl',
  square: 'rounded-none',
}

function initialsFromAlt(alt?: string) {
  if (!alt) return ''
  const parts = alt.trim().split(/\s+/).filter(Boolean)
  const letters = parts.slice(0, 2).map((p) => p[0]?.toUpperCase())
  return letters.join('')
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  { className, src, alt, fallback, size = 'md', variant = 'circle', style, ...props },
  ref
) {
  const [errored, setErrored] = React.useState(false)
  const px = typeof size === 'number' ? size : sizeMap[size]
  const showImg = Boolean(src) && !errored
  const initials = typeof fallback === 'undefined' ? initialsFromAlt(alt) : ''

  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden border border-aivent-border bg-white/10 text-xs font-semibold text-white',
        radiusClass[variant],
        className
      )}
      style={{ width: px, height: px, ...style }}
      {...props}
    >
      {showImg ? (
        <img
          src={src}
          alt={alt ?? ''}
          aria-hidden={alt ? undefined : true}
          className="h-full w-full object-cover"
          onError={() => setErrored(true)}
        />
      ) : (
        <span role="img" aria-label={alt || 'Avatar'} className="select-none">
          {fallback ?? (initials || '•')}
        </span>
      )}
    </span>
  )
})
