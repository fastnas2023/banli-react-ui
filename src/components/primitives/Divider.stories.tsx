import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Primitives/Divider',
  component: Divider,
}

export default meta
type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4 bg-aivent-bg p-6">
      <div className="text-sm text-aivent-muted">Above</div>
      <Divider />
      <div className="text-sm text-aivent-muted">Below</div>
      <Divider variant="dashed" />
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-6 bg-aivent-bg p-6">
      <div className="text-sm text-aivent-muted">Left</div>
      <Divider orientation="vertical" className="h-10" />
      <div className="text-sm text-aivent-muted">Right</div>
    </div>
  ),
}

