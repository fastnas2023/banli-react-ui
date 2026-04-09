import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import type { ColumnDef } from '@tanstack/react-table'

import { ListPage } from '../../components/pages/templates/ListPage'
import { Table } from '../../components/data/Table'
import { Button } from '../../components/primitives/Button'
import { Input } from '../../components/primitives/Input'
import { Badge } from '../../components/primitives/Badge'
import { Select } from '../../components/ui/select'

type UserRow = {
  id: string
  name: string
  email: string
  status: 'active' | 'blocked'
}

const allRows: UserRow[] = [
  { id: 'u_1', name: 'Ada Lovelace', email: 'ada@example.com', status: 'active' },
  { id: 'u_2', name: 'Alan Turing', email: 'alan@example.com', status: 'active' },
  { id: 'u_3', name: 'Grace Hopper', email: 'grace@example.com', status: 'blocked' },
]

const columns: ColumnDef<UserRow>[] = [
  { header: '姓名', accessorKey: 'name' },
  { header: '邮箱', accessorKey: 'email' },
  {
    header: '状态',
    accessorKey: 'status',
    cell: (ctx) => (
      <Badge className={ctx.getValue() === 'active' ? 'text-emerald-200' : 'text-red-200'}>
        {ctx.getValue() === 'active' ? '启用' : '已禁用'}
      </Badge>
    ),
  },
  {
    header: '操作',
    id: 'actions',
    cell: () => (
      <div className="flex items-center justify-end gap-2">
        <Button size="sm" variant="ghost">
          编辑
        </Button>
        <Button size="sm" variant="ghost">
          更多
        </Button>
      </div>
    ),
  },
]

type DemoArgs = {
  loading: boolean
  empty: boolean
}

function Demo({ loading, empty }: DemoArgs) {
  const [draftKeyword, setDraftKeyword] = React.useState('')
  const [draftStatus, setDraftStatus] = React.useState<string>('all')
  const [keyword, setKeyword] = React.useState('')
  const [status, setStatus] = React.useState<string>('all')

  const data = React.useMemo(() => {
    if (empty) return []
    const kw = keyword.trim().toLowerCase()
    return allRows.filter((r) => {
      const matchKw = !kw || r.name.toLowerCase().includes(kw) || r.email.toLowerCase().includes(kw)
      const matchStatus = status === 'all' || r.status === status
      return matchKw && matchStatus
    })
  }, [empty, keyword, status])

  return (
    <ListPage
      title="用户列表（ListPage 模板示例）"
      description="包含：筛选区 + 顶部/表格操作栏 + Table + 空态/加载态（由 Table 负责渲染）。"
      actions={
        <>
          <Button variant="secondary" disabled={loading}>
            导出
          </Button>
          <Button disabled={loading}>新建用户</Button>
        </>
      }
      filters={
        <form
          className="grid gap-3 md:grid-cols-12 md:items-end"
          onSubmit={(e) => {
            e.preventDefault()
            setKeyword(draftKeyword)
            setStatus(draftStatus)
          }}
        >
          <div className="md:col-span-5">
            <div className="mb-2 text-xs font-semibold text-white/80">关键字</div>
            <Input value={draftKeyword} onChange={(e) => setDraftKeyword(e.target.value)} placeholder="姓名 / 邮箱" />
          </div>
          <div className="md:col-span-4">
            <div className="mb-2 text-xs font-semibold text-white/80">状态</div>
            <Select
              value={draftStatus}
              onChange={setDraftStatus}
              options={[
                { value: 'all', label: '全部' },
                { value: 'active', label: '启用' },
                { value: 'blocked', label: '已禁用' },
              ]}
            />
          </div>
          <div className="flex gap-2 md:col-span-3 md:justify-end">
            <Button type="submit" disabled={loading}>
              查询
            </Button>
            <Button
              type="button"
              variant="ghost"
              disabled={loading}
              onClick={() => {
                setDraftKeyword('')
                setDraftStatus('all')
                setKeyword('')
                setStatus('all')
              }}
            >
              重置
            </Button>
          </div>
        </form>
      }
      tableToolbar={
        <>
          <div className="text-sm text-aivent-muted">共 {data.length} 条</div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" disabled={loading}>
              刷新
            </Button>
            <Button variant="ghost" size="sm" disabled={loading}>
              批量操作
            </Button>
          </div>
        </>
      }
    >
      <Table<UserRow>
        columns={columns}
        data={data}
        loading={loading}
        emptyText={
          <div className="grid gap-2">
            <div className="text-white/80">暂无数据</div>
            <div className="text-xs text-aivent-muted">你可以尝试调整筛选条件，或点击“新建用户”。</div>
          </div>
        }
      />
    </ListPage>
  )
}

const meta: Meta<DemoArgs> = {
  title: 'Templates/Admin/ListPage',
  parameters: { layout: 'fullscreen' },
  args: {
    loading: false,
    empty: false,
  },
}

export default meta
type Story = StoryObj<DemoArgs>

export const Basic: Story = {
  render: (args) => <Demo {...args} />,
}

export const Loading: Story = {
  args: { loading: true },
  render: (args) => <Demo {...args} />,
}

export const Empty: Story = {
  args: { empty: true },
  render: (args) => <Demo {...args} />,
}

