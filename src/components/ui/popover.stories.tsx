import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../primitives/Button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

const meta: Meta = { title: 'UI/Popover' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16">
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="text-sm font-bold text-white">Popover</div>
          <p className="mt-2 text-sm text-aivent-muted">
            A small floating panel for contextual UI.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  ),
}

