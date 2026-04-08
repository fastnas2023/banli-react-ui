import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = { title: 'Foundation/Theme' }
export default meta

type Story = StoryObj

export const Colors: Story = {
  render: () => (
    <div className="bg-aivent-bg text-aivent-text p-8 space-y-4">
      <div className="flex gap-3">
        <div className="h-16 w-28 rounded-lg bg-aivent-primary shadow-glow" />
        <div className="h-16 w-28 rounded-lg bg-aivent-secondary" />
        <div className="h-16 w-28 rounded-lg bg-aivent-panel border border-aivent-border" />
      </div>
      <p className="text-aivent-text">Primary text</p>
      <p className="text-aivent-muted">Muted text</p>
      <div className="rounded-xl2 border border-aivent-border bg-aivent-panel p-4">
        Panel example
      </div>
    </div>
  ),
}

