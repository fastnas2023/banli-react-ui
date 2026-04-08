import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Primitives/Icon',
  component: Icon,
  args: {
    name: 'check',
    title: 'check icon',
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Basic: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 bg-aivent-bg p-6">
      <Icon name="check" title="primary" variant="primary" />
      <Icon name="check" title="secondary" variant="secondary" />
      <Icon name="check" title="muted" variant="muted" />
      <Icon name="close" title="danger" variant="danger" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 bg-aivent-bg p-6">
      <Icon name="check" title="sm" size="sm" />
      <Icon name="check" title="md" size="md" />
      <Icon name="check" title="lg" size="lg" />
      <Icon name="check" title="custom" size={32} />
    </div>
  ),
}

