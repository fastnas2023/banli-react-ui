import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../primitives/Button'
import { Result } from './result'

const meta: Meta = { title: 'UI/Result' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Result title="操作完成" description="你的请求已处理完成。" />
    </div>
  ),
}

export const Statuses: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <div className="grid gap-6 md:grid-cols-2">
        <Result status="info" title="信息" description="这是一条提示信息。" />
        <Result status="success" title="成功" description="已保存你的更改。" />
        <Result status="warning" title="警告" description="请检查输入内容后再提交。" />
        <Result status="error" title="失败" description="服务器开小差了，请稍后重试。" />
      </div>
    </div>
  ),
}

export const WithActions: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Result
        status="error"
        title="提交失败"
        description="网络异常导致请求失败。"
        actions={
          <>
            <Button>重试</Button>
            <Button variant="ghost">返回</Button>
          </>
        }
      />
    </div>
  ),
}

export const CustomIcon: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Result
        status="success"
        icon={
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2l2.5 6.5L21 9l-5 4.5L17 20l-5-3-5 3 1-6.5L3 9l6.5-.5L12 2Z"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinejoin="round"
            />
          </svg>
        }
        title="自定义图标"
        description="icon props 会覆盖默认 status 图标。"
      />
    </div>
  ),
}

