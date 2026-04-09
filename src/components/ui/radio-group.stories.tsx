import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { RadioGroup } from './radio-group'

const meta: Meta = { title: 'UI/RadioGroup' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <RadioGroup
        defaultValue="a"
        options={[
          { label: 'Option A', value: 'a' },
          { label: 'Option B', value: 'b' },
          { label: 'Disabled', value: 'c', disabled: true },
        ]}
      />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    function Demo() {
      const [v, setV] = React.useState('a')
      return (
        <div className="bg-aivent-bg p-16 text-aivent-text">
          <RadioGroup
            value={v}
            onChange={setV}
            options={[
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' },
            ]}
          />
          <div className="mt-4 text-sm text-aivent-muted">value: {v}</div>
        </div>
      )
    }
    return <Demo />
  },
}
