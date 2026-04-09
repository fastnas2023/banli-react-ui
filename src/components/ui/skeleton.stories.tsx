import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'

const meta: Meta = { title: 'UI/Skeleton' }
export default meta
type Story = StoryObj

export const Variants: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <div className="space-y-10">
        <section className="space-y-4">
          <div className="text-sm text-aivent-muted">text</div>
          <div className="space-y-3 max-w-md">
            <Skeleton variant="text" size="small" />
            <Skeleton variant="text" size="middle" className="w-5/6" />
            <Skeleton variant="text" size="large" className="w-2/3" />
          </div>
        </section>

        <section className="space-y-4">
          <div className="text-sm text-aivent-muted">block</div>
          <div className="space-y-4 max-w-2xl">
            <Skeleton variant="block" size="small" />
            <Skeleton variant="block" size="middle" />
            <Skeleton variant="block" size="large" />
          </div>
        </section>

        <section className="space-y-4">
          <div className="text-sm text-aivent-muted">avatar</div>
          <div className="flex items-center gap-4">
            <Skeleton variant="avatar" size="small" />
            <Skeleton variant="avatar" size="middle" />
            <Skeleton variant="avatar" size="large" />
          </div>
        </section>
      </div>
    </div>
  ),
}

