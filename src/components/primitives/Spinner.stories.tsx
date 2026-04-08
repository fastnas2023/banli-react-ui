import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'
import { Space } from './Space'

const meta: Meta<typeof Spinner> = {
  title: 'Primitives/Spinner',
  component: Spinner,
  args: { label: 'Loading' },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Basic: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="bg-aivent-bg p-6">
      <Space size="lg" align="center">
        <Spinner variant="primary" label="Loading primary" />
        <Spinner variant="secondary" label="Loading secondary" />
        <Spinner variant="muted" label="Loading muted" />
        <Spinner variant="inherit" label="Loading inherit" className="text-white" />
      </Space>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="bg-aivent-bg p-6">
      <Space size="lg" align="center">
        <Spinner size="sm" label="sm" />
        <Spinner size="md" label="md" />
        <Spinner size="lg" label="lg" />
        <Spinner size={32} label="32" />
      </Space>
    </div>
  ),
}

