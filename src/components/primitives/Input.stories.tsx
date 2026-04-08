import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Primitives/Input',
  component: Input,
  args: {
    placeholder: 'Email',
    defaultValue: '',
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const Disabled: Story = { args: { defaultValue: 'disabled', disabled: true } }
export const Loading: Story = { args: { defaultValue: 'loading...', loading: true } }
export const Invalid: Story = { args: { defaultValue: 'bad input', invalid: true } }

export const Sizes: Story = {
  render: () => (
    <div className="grid gap-3 bg-aivent-bg p-6">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    function Demo() {
      const [value, setValue] = React.useState('hello')
      return (
        <div className="grid gap-2 bg-aivent-bg p-6">
          <Input
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

