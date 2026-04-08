import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Primitives/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Your message',
    defaultValue: '',
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {}

export const Disabled: Story = { args: { defaultValue: 'disabled', disabled: true } }
export const Loading: Story = { args: { defaultValue: 'loading...', loading: true } }
export const Invalid: Story = { args: { defaultValue: 'bad message', invalid: true } }

export const Sizes: Story = {
  render: () => (
    <div className="grid gap-3 bg-aivent-bg p-6">
      <Textarea size="sm" placeholder="Small" />
      <Textarea size="md" placeholder="Medium" />
      <Textarea size="lg" placeholder="Large" />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    function Demo() {
      const [value, setValue] = React.useState('hello')
      return (
        <div className="grid gap-2 bg-aivent-bg p-6">
          <Textarea
            aria-label="controlled"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type here"
          />
          <div className="text-xs text-aivent-muted">value: {value}</div>
        </div>
      )
    }
    return <Demo />
  },
}

