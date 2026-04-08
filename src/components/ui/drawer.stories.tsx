import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../primitives/Button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from './drawer'

const meta: Meta = { title: 'UI/Drawer' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost">Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>Drawer</DrawerTitle>
          <DrawerDescription>Use this for side panels and advanced filters.</DrawerDescription>
          <div className="mt-6 flex justify-end">
            <DrawerClose asChild>
              <Button>Close</Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  ),
}
