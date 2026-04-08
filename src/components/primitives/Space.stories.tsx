import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Space } from './Space'

const meta: Meta<typeof Space> = {
  title: 'Primitives/Space',
  component: Space,
  args: {
    size: 'md',
  },
}

export default meta
type Story = StoryObj<typeof Space>

export const Horizontal: Story = {
  render: (args) => (
    <div className="bg-aivent-bg p-6">
      <Space {...args}>
        <Button size="sm">One</Button>
        <Button size="sm">Two</Button>
        <Button size="sm">Three</Button>
      </Space>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="bg-aivent-bg p-6">
      <Space direction="vertical" size="sm">
        <Button size="sm">Row 1</Button>
        <Button size="sm">Row 2</Button>
        <Button size="sm">Row 3</Button>
      </Space>
    </div>
  ),
}

export const CustomGap: Story = {
  render: () => (
    <div className="bg-aivent-bg p-6">
      <Space size={18}>
        <Button size="sm">18px gap</Button>
        <Button size="sm">Item</Button>
      </Space>
    </div>
  ),
}

