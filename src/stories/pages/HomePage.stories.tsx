import type { Meta, StoryObj } from '@storybook/react'
import { HomePage } from '../../components/pages/HomePage'

const meta: Meta<typeof HomePage> = {
  title: 'Pages/Home (Shell)',
  component: HomePage,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof HomePage>

export const Default: Story = {}

