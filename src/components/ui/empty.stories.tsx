import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '../primitives/Button'
import { Empty } from './empty'

const meta: Meta = { title: 'UI/Empty' }
export default meta
type Story = StoryObj

const DemoIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 7h16M4 12h10M4 17h16"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Empty title="暂无数据" description="你可以调整筛选条件，或者稍后再试。" />
    </div>
  ),
}

export const WithIconAndActions: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Empty
        icon={DemoIcon}
        title="列表为空"
        description="当前没有任何记录。你可以新建一条，或刷新试试。"
        actions={
          <>
            <Button>新建</Button>
            <Button variant="ghost">刷新</Button>
          </>
        }
      />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <div className="grid gap-6">
        <Empty size="small" icon={DemoIcon} title="Small" description="small size" />
        <Empty size="middle" icon={DemoIcon} title="Middle" description="middle size" />
        <Empty size="large" icon={DemoIcon} title="Large" description="large size" />
      </div>
    </div>
  ),
}

export const StatusRoleOptIn: Story = {
  render: () => {
    function Demo() {
      const [msg, setMsg] = React.useState('还没有更新')
      return (
        <div className="bg-aivent-bg p-16 text-aivent-text">
          <div className="mb-4 text-sm text-aivent-text/70">提示：{msg}</div>
          <Empty
            useStatusRole
            title="空状态（role=status）"
            description="点击按钮会更新一段读屏友好的状态文本。"
            actions={<Button onClick={() => setMsg('已刷新')}>刷新</Button>}
          />
        </div>
      )
    }
    return <Demo />
  },
}

