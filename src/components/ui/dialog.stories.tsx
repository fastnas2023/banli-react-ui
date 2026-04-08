import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../primitives/Button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './dialog'

const meta: Meta = { title: 'UI/Dialog' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>This is a Radix Dialog with Tailwind styling.</DialogDescription>
          <div className="mt-6 flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button>Confirm</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  ),
}
