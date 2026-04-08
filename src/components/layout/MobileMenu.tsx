import * as React from 'react'
import { cn } from '../../lib/cn'
import { useAiventMessages } from '../../i18n/provider'
import type { NavItem } from './Nav'

export function MobileMenu({
  open,
  items,
  onClose,
  className,
}: {
  open: boolean
  items: NavItem[]
  onClose: () => void
  className?: string
}) {
  if (!open) return null
  const m = useAiventMessages().header

  return (
    <div className={cn('fixed inset-0 z-50', className)} role="dialog" aria-modal="true">
      <button
        className="absolute inset-0 bg-black/60"
        aria-label={m.closeMenuAriaLabel}
        onClick={onClose}
      />

      <div className="absolute right-4 top-4 w-[min(360px,calc(100%-2rem))] rounded-xl2 border border-aivent-border bg-aivent-panel p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold tracking-wide">{m.menuTitle}</div>
          <button
            className="rounded-lg border border-aivent-border bg-white/5 px-2 py-1 text-sm hover:bg-white/10"
            onClick={onClose}
            aria-label={m.closeMenuAriaLabel}
          >
            ✕
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href ?? '#'}
              className="rounded-lg px-3 py-2 text-aivent-muted hover:bg-white/5 hover:text-white transition"
              onClick={(e) => {
                e.preventDefault()
                onClose()
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
