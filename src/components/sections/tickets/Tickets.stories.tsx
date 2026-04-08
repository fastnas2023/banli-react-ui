import type { Meta, StoryObj } from '@storybook/react'
import { TicketsStyle1 } from './TicketsStyle1'
import { TicketsStyle2 } from './TicketsStyle2'

const meta: Meta = { title: 'Sections/Tickets' }
export default meta
type Story = StoryObj

export const Style1: Story = { render: () => <TicketsStyle1 /> }
export const Style2: Story = { render: () => <TicketsStyle2 /> }

