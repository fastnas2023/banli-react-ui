import * as React from 'react'
import { cn } from '../../../lib/cn'

export type ListPageProps = {
  title: React.ReactNode
  description?: React.ReactNode
  /**
   * 顶部操作区（常见：新建、导出、批量操作入口等）。
   */
  actions?: React.ReactNode
  /**
   * 筛选区（通常是搜索表单）。
   */
  filters?: React.ReactNode
  /**
   * 表格上方的操作栏（常见：批量操作、已选统计、分页/刷新按钮等）。
   */
  tableToolbar?: React.ReactNode
  /**
   * 主体内容（通常是 <Table />）。
   */
  children: React.ReactNode
  className?: string
}

/**
 * ListPage（后台列表页模板）
 *
 * 目标：提供“页面骨架 + slots”，不绑定具体字段/业务逻辑，方便在实际项目中复用。
 */
export function ListPage({ title, description, actions, filters, tableToolbar, children, className }: ListPageProps) {
  return (
    <div className={cn('min-h-screen bg-aivent-bg p-10 text-aivent-text', className)}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="grid gap-2">
            <div className="text-2xl font-bold text-white">{title}</div>
            {description ? <div className="text-sm text-aivent-muted">{description}</div> : null}
          </div>
          {actions ? <div className="flex flex-wrap items-center justify-start gap-3 sm:justify-end">{actions}</div> : null}
        </div>

        {filters ? (
          <div className="mt-6 rounded-xl border border-aivent-border bg-aivent-panel p-4">{filters}</div>
        ) : null}

        <div className="mt-6 rounded-xl border border-aivent-border bg-aivent-panel">
          {tableToolbar ? <div className="flex flex-wrap items-center justify-between gap-3 border-b border-aivent-border p-4">{tableToolbar}</div> : null}
          <div className="p-1">{children}</div>
        </div>
      </div>
    </div>
  )
}

