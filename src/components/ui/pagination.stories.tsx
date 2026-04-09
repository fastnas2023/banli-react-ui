import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Pagination } from './pagination'

const meta: Meta = { title: 'UI/Pagination' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Pagination total={128} pageSize={10} defaultValue={1} />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    function Demo() {
      const [page, setPage] = React.useState(3)
      return (
        <div className="bg-aivent-bg p-16 text-aivent-text">
          <div className="mb-4 text-sm text-aivent-text/70">当前页：{page}</div>
          <Pagination total={999} pageSize={10} value={page} onChange={setPage} />
        </div>
      )
    }
    return <Demo />
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Pagination total={128} pageSize={10} defaultValue={4} disabled />
    </div>
  ),
}

