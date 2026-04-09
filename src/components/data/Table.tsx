import * as React from 'react'
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  type RowData,
  useReactTable,
} from '@tanstack/react-table'
import { cn } from '../../lib/cn'
import { Spinner } from '../primitives/Spinner'

export type TableProps<TData extends RowData> = {
  data: TData[]
  columns: ColumnDef<TData, unknown>[]
  /**
   * 加载态：显示 loading 行，并隐藏空状态。
   */
  loading?: boolean
  /**
   * 空数据时显示的文案/节点。
   */
  emptyText?: React.ReactNode
  className?: string
}

export function Table<TData extends RowData>({
  data,
  columns,
  loading = false,
  emptyText = 'No data',
  className,
}: TableProps<TData>) {
  // TanStack Table 的 useReactTable() 会返回不可安全 memo 的函数。
  // 该告警来自 react-hooks/incompatible-library，对组件内部直接使用是可接受的。
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const headerGroups = table.getHeaderGroups()
  const rowModel = table.getRowModel()
  const visibleColumnsCount = Math.max(table.getVisibleLeafColumns().length, 1)

  return (
    <div className={cn('w-full overflow-x-auto', className)}>
      <table className="w-full border-collapse text-left text-sm">
        <thead className="border-b border-aivent-border/30">
          {headerGroups.map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((header) => (
                <th
                  key={header.id}
                  scope="col"
                  className="px-4 py-3 font-semibold text-white/90"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={visibleColumnsCount} className="px-4 py-6">
                <div className="flex items-center gap-2 text-white/80" role="status" aria-live="polite">
                  <Spinner size="sm" label="Loading" />
                  <span>Loading...</span>
                </div>
              </td>
            </tr>
          ) : rowModel.rows.length === 0 ? (
            <tr>
              <td colSpan={visibleColumnsCount} className="px-4 py-6 text-white/70">
                {emptyText}
              </td>
            </tr>
          ) : (
            rowModel.rows.map((row) => (
              <tr key={row.id} className="border-b border-aivent-border/15 last:border-b-0">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 text-white/85">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
