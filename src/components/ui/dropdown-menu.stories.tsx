import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../primitives/Button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './dropdown-menu'

const meta: Meta = { title: 'UI/DropdownMenu' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">Open menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => alert('Profile')}>Profile</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => alert('Settings')}>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => alert('Logout')}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

