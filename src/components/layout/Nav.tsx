import * as React from 'react'
import { cn } from '../../lib/cn'

export type NavItem = { label: string; href?: string }

export function Nav({
  items,
  className,
  onNavigate,
}: {
  items: NavItem[]
  className?: string
  onNavigate?: (item: NavItem) => void
}) {
  return (
    <nav className={cn('flex items-center gap-6 text-sm font-semibold', className)} aria-label="Main">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href ?? '#'}
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault()
              onNavigate(item)
            }
          }}
          className="text-aivent-muted hover:text-white transition"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

