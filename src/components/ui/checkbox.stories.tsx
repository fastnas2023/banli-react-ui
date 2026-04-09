import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Checkbox } from './checkbox'

const meta: Meta = { title: 'UI/Checkbox' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <div className="flex flex-col gap-4">
        <Checkbox defaultValue>Default</Checkbox>
        <Checkbox defaultValue disabled>
          Disabled
        </Checkbox>
        <Checkbox defaultValue status="error">
          Error
        </Checkbox>
        <Checkbox defaultValue status="warning">
          Warning
        </Checkbox>
      </div>
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    function Demo() {
      const [v, setV] = React.useState(false)
      return (
        <div className="bg-aivent-bg p-16 text-aivent-text">
          <Checkbox value={v} onChange={setV}>
            Controlled: {String(v)}
          </Checkbox>
        </div>
      )
    }
    return <Demo />
  },
}
