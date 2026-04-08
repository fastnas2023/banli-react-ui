import type { Meta, StoryObj } from '@storybook/react'
import { ContactPage } from '../../components/pages/ContactPage'

const meta: Meta<typeof ContactPage> = {
  title: 'Pages/Contact',
  component: ContactPage,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof ContactPage>

export const Default: Story = {}

