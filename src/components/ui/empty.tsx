import * as React from 'react'
import { cn } from '../../lib/cn'
import type { UISize } from './checkbox'

export type EmptyProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 图标（通常为装饰性）。建议传入 `aria-hidden` 的 icon。
   */
  icon?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  /**
   * 与现有 UI 组件保持一致：small / middle / large
   */
  size?: UISize
  /**
   * 可选：是否启用 a11y `role="status"`（不默认开启，避免对页面读屏造成干扰）。
   * - 若你显式传入 `role`，则以 `role` 为准。
   */
  useStatusRole?: boolean
}

function emptySizeClass(size: UISize) {
  switch (size) {
    case 'small':
      return {
        root: 'px-5 py-8 gap-3',
        iconWrap: 'h-12 w-12 text-[26px]',
        title: 'text-sm',
        description: 'text-xs',
        actions: 'mt-3',
      }
    case 'large':
      return {
        root: 'px-10 py-14 gap-4',
        iconWrap: 'h-16 w-16 text-[34px]',
        title: 'text-lg',
        description: 'text-sm',
        actions: 'mt-5',
      }
    case 'middle':
    default:
      return {
        root: 'px-8 py-12 gap-4',
        iconWrap: 'h-14 w-14 text-[30px]',
        title: 'text-base',
        description: 'text-sm',
        actions: 'mt-4',
      }
  }
}

/**
 * Empty：空状态通用组件（icon / title / description / actions）。
 */
export const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(function Empty(
  { className, icon, title, description, actions, size = 'middle', useStatusRole = false, role, ...props },
  ref
) {
  const s = emptySizeClass(size)

  return (
    <div
      ref={ref}
      data-size={size}
      role={role ?? (useStatusRole ? 'status' : undefined)}
      className={cn(
        'flex w-full flex-col items-center justify-center rounded-xl2 border border-aivent-border bg-aivent-panel text-center text-aivent-text',
        s.root,
        className
      )}
      {...props}
    >
      {icon ? (
        <div
          aria-hidden="true"
          className={cn(
            'grid place-items-center rounded-full border border-aivent-border bg-white/5 text-white',
            s.iconWrap
          )}
        >
          {icon}
        </div>
      ) : null}

      {title ? <div className={cn('font-semibold text-white', s.title)}>{title}</div> : null}
      {description ? <div className={cn('max-w-[56ch] text-aivent-text/70', s.description)}>{description}</div> : null}

      {actions ? <div className={cn('flex flex-wrap items-center justify-center gap-3', s.actions)}>{actions}</div> : null}
    </div>
  )
})

Empty.displayName = 'Empty'

