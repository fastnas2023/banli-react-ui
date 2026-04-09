import * as React from 'react'
import { cn } from '../../lib/cn'

function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value: T | undefined
  defaultValue: T
  onChange?: (v: T) => void
}) {
  const [uncontrolled, setUncontrolled] = React.useState<T>(defaultValue)
  const isControlled = value !== undefined
  const state = isControlled ? (value as T) : uncontrolled

  const setState = React.useCallback(
    (next: T) => {
      if (!isControlled) setUncontrolled(next)
      onChange?.(next)
    },
    [isControlled, onChange]
  )

  return [state, setState] as const
}

type PaginationToken = number | 'ellipsis'

function range(start: number, end: number) {
  const out: number[] = []
  for (let i = start; i <= end; i++) out.push(i)
  return out
}

function getPaginationTokens({
  page,
  pageCount,
  siblingCount,
}: {
  page: number
  pageCount: number
  siblingCount: number
}): PaginationToken[] {
  if (pageCount <= 0) return []

  // 1st + last + current + 2 siblings + 2 ellipsis
  const totalNumbers = siblingCount * 2 + 5
  if (pageCount <= totalNumbers) return range(1, pageCount)

  const leftSibling = Math.max(page - siblingCount, 1)
  const rightSibling = Math.min(page + siblingCount, pageCount)

  const showLeftEllipsis = leftSibling > 2
  const showRightEllipsis = rightSibling < pageCount - 1

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftCount = 3 + siblingCount * 2
    return [...range(1, leftCount), 'ellipsis', pageCount]
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightCount = 3 + siblingCount * 2
    return [1, 'ellipsis', ...range(pageCount - rightCount + 1, pageCount)]
  }

  return [1, 'ellipsis', ...range(leftSibling, rightSibling), 'ellipsis', pageCount]
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

export type PaginationProps = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> & {
  total: number
  pageSize?: number
  /** 受控：当前页（从 1 开始） */
  value?: number
  /** 非受控：默认页（从 1 开始） */
  defaultValue?: number
  /** AntD 风格 */
  onChange?: (page: number) => void
  siblingCount?: number
  disabled?: boolean
}

/**
 * Pagination
 *
 * - 受控：value + onChange
 * - 非受控：defaultValue
 */
export function Pagination({
  total,
  pageSize = 10,
  value,
  defaultValue = 1,
  onChange,
  siblingCount = 1,
  disabled = false,
  className,
  ...props
}: PaginationProps) {
  const pageCount = Math.max(1, Math.ceil(Math.max(0, total) / Math.max(1, pageSize)))
  const [page, setPage] = useControllableState<number>({
    value,
    defaultValue: clamp(defaultValue, 1, pageCount),
    onChange,
  })

  const current = clamp(page, 1, pageCount)
  const tokens = getPaginationTokens({ page: current, pageCount, siblingCount })

  const setPageSafe = (next: number) => {
    if (disabled) return
    setPage(clamp(next, 1, pageCount))
  }

  return (
    <nav
      aria-label="pagination"
      aria-disabled={disabled || undefined}
      className={cn('inline-flex items-center', className)}
      {...props}
    >
      <ul className="inline-flex items-center gap-1">
        <li>
          <button
            type="button"
            aria-label="Previous page"
            disabled={disabled || current <= 1}
            className={cn(
              'h-9 rounded-lg border px-3 text-sm text-aivent-text outline-none transition',
              'focus-visible:ring-2 focus-visible:ring-white/20',
              'border-aivent-border bg-aivent-panel hover:bg-white/5 disabled:pointer-events-none disabled:opacity-40'
            )}
            onClick={() => setPageSafe(current - 1)}
          >
            Prev
          </button>
        </li>

        {tokens.map((t, idx) => {
          if (t === 'ellipsis') {
            return (
              <li key={`e-${idx}`} aria-hidden="true" className="px-2 text-aivent-text/60">
                …
              </li>
            )
          }

          const p = t
          const active = p === current
          return (
            <li key={p}>
              <button
                type="button"
                aria-label={`Page ${p}`}
                aria-current={active ? 'page' : undefined}
                disabled={disabled}
                className={cn(
                  'h-9 min-w-9 rounded-lg border px-3 text-sm outline-none transition',
                  'focus-visible:ring-2 focus-visible:ring-white/20',
                  active
                    ? 'border-white/15 bg-white/10 text-white'
                    : 'border-aivent-border bg-aivent-panel text-aivent-text hover:bg-white/5',
                  disabled ? 'opacity-40' : ''
                )}
                onClick={() => setPageSafe(p)}
              >
                {p}
              </button>
            </li>
          )
        })}

        <li>
          <button
            type="button"
            aria-label="Next page"
            disabled={disabled || current >= pageCount}
            className={cn(
              'h-9 rounded-lg border px-3 text-sm text-aivent-text outline-none transition',
              'focus-visible:ring-2 focus-visible:ring-white/20',
              'border-aivent-border bg-aivent-panel hover:bg-white/5 disabled:pointer-events-none disabled:opacity-40'
            )}
            onClick={() => setPageSafe(current + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

