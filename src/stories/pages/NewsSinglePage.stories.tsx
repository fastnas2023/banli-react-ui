import type { Meta, StoryObj } from '@storybook/react'
import { NewsSinglePage } from '../../components/pages/NewsSinglePage'

const meta: Meta<typeof NewsSinglePage> = {
  title: 'Pages/News Single',
  component: NewsSinglePage,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof NewsSinglePage>

export const Default: Story = {}

