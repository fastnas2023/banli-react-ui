import type { Meta, StoryObj } from '@storybook/react'
import { NewsPage } from '../../components/pages/NewsPage'

const meta: Meta<typeof NewsPage> = {
  title: 'Pages/News',
  component: NewsPage,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof NewsPage>

export const Default: Story = {}

