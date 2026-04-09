import * as React from 'react'
import { cn } from '../../lib/cn'

export type BreadcrumbItem = {
  label: React.ReactNode
  href?: string
  onClick?: (e: React.MouseEvent) => void
  disabled?: boolean
}

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement> & {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  disabled?: boolean
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ items, separator = '/', disabled = false, className, ...props }, ref) => {
    return (
      <nav ref={ref} aria-label="breadcrumb" aria-disabled={disabled || undefined} className={cn('text-sm', className)} {...props}>
        <ol className="flex flex-wrap items-center gap-1 text-aivent-text/80">
          {items.map((item, idx) => {
            const last = idx === items.length - 1
            const itemDisabled = disabled || Boolean(item.disabled)

            const content = last ? (
              <span aria-current="page" className="font-semibold text-white">
                {item.label}
              </span>
            ) : item.href ? (
              <a
                href={item.href}
                onClick={itemDisabled ? undefined : item.onClick}
                aria-disabled={itemDisabled || undefined}
                className={cn('transition hover:text-white', itemDisabled ? 'pointer-events-none opacity-50' : '')}
              >
                {item.label}
              </a>
            ) : item.onClick ? (
              <button
                type="button"
                onClick={itemDisabled ? undefined : item.onClick}
                disabled={itemDisabled}
                className={cn('transition hover:text-white', itemDisabled ? 'opacity-50' : '')}
              >
                {item.label}
              </button>
            ) : (
              <span className={cn(itemDisabled ? 'opacity-50' : '')}>{item.label}</span>
            )

            return (
              <li key={idx} className="inline-flex items-center gap-1">
                {content}
                {!last ? (
                  <span aria-hidden="true" className="px-1 text-aivent-text/40">
                    {separator}
                  </span>
                ) : null}
              </li>
            )
          })}
        </ol>
      </nav>
    )
  }
)

Breadcrumb.displayName = 'Breadcrumb'

