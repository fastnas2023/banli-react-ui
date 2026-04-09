import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Select } from './select'

const meta: Meta = { title: 'UI/Select' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Select
        placeholder="请选择"
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
          <div className="flex items-center gap-4">
            <Select
              value={v}
              onChange={setV}
              options={[
                { label: 'Option A', value: 'a' },
                { label: 'Option B', value: 'b' },
              ]}
            />
            <span className="text-sm text-aivent-muted">value: {v}</span>
          </div>
        </div>
      )
    }
    return <Demo />
  },
}
