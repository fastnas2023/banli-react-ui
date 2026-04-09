import * as React from 'react'
import { cn } from '../../lib/cn'

export type ResultStatus = 'info' | 'success' | 'warning' | 'error'

export type ResultProps = React.HTMLAttributes<HTMLDivElement> & {
  status?: ResultStatus
  /**
   * 图标（可选）。未提供时会根据 status 渲染默认图标。
   */
  icon?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
}

function statusBorderClass(status: ResultStatus) {
  switch (status) {
    case 'success':
      return 'border-emerald-500/60'
    case 'warning':
      return 'border-yellow-500/60'
    case 'error':
      return 'border-red-500/70'
    case 'info':
    default:
      return 'border-aivent-border'
  }
}

function statusIconClass(status: ResultStatus) {
  switch (status) {
    case 'success':
      return 'text-emerald-400'
    case 'warning':
      return 'text-yellow-400'
    case 'error':
      return 'text-red-400'
    case 'info':
    default:
      return 'text-aivent-primary'
  }
}

function DefaultStatusIcon({ status }: { status: ResultStatus }) {
  const common = 'h-7 w-7'
  switch (status) {
    case 'success':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'warning':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M12 9v5"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 17h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path
            d="M10.29 3.86a2 2 0 0 1 3.42 0l8.08 14.02A2 2 0 0 1 20.08 21H3.92a2 2 0 0 1-1.71-3.12L10.29 3.86Z"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'error':
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path d="M15 9l-6 6" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
          <path d="M9 9l6 6" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
          <path
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
            stroke="currentColor"
            strokeWidth="2.25"
          />
        </svg>
      )
    case 'info':
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
          <path
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
            stroke="currentColor"
            strokeWidth="2.25"
          />
          <path d="M12 10v6" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
          <path d="M12 7h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
  }
}

/**
 * Result：结果反馈组件（status / icon / title / description / actions）。
 * - 默认 `role="alert"`（可通过 props 覆盖）
 */
export const Result = React.forwardRef<HTMLDivElement, ResultProps>(function Result(
  { className, status = 'info', icon, title, description, actions, role = 'alert', ...props },
  ref
) {
  return (
    <div
      ref={ref}
      data-status={status}
      role={role}
      className={cn(
        'flex w-full flex-col items-center justify-center gap-4 rounded-xl2 border bg-aivent-panel px-8 py-10 text-center text-aivent-text',
        statusBorderClass(status),
        className
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className={cn('grid h-14 w-14 place-items-center rounded-full border border-aivent-border bg-white/5', statusIconClass(status))}
      >
        {icon ?? <DefaultStatusIcon status={status} />}
      </div>

      <div className="grid gap-2">
        {title ? <div className="text-base font-semibold text-white">{title}</div> : null}
        {description ? <div className="max-w-[64ch] text-sm text-aivent-text/70">{description}</div> : null}
      </div>

      {actions ? <div className="mt-2 flex flex-wrap items-center justify-center gap-3">{actions}</div> : null}
    </div>
  )
})

Result.displayName = 'Result'

