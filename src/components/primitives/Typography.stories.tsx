import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Primitives/Typography',
  component: Typography,
  args: {
    children: 'Hello Aivent',
    variant: 'body',
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="space-y-4 bg-aivent-bg p-6">
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4">H4 Heading</Typography>
      <Typography variant="muted">
        Muted paragraph text, typically used for descriptions.
      </Typography>
      <Typography variant="body">
        Body text with <Typography as="span" variant="code">{`code`}</Typography> inline.
      </Typography>
      <Typography variant="small">Small helper text</Typography>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-3 bg-aivent-bg p-6">
      <Typography size="xs">Size XS</Typography>
      <Typography size="sm">Size SM</Typography>
      <Typography size="md">Size MD</Typography>
      <Typography size="lg">Size LG</Typography>
    </div>
  ),
}

