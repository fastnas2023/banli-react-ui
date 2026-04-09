import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Switch } from './switch'

const meta: Meta = { title: 'UI/Switch' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <div className="flex flex-col gap-4">
        <Switch defaultValue />
        <Switch defaultValue disabled />
        <Switch defaultValue status="error" />
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
          <div className="flex items-center gap-4">
            <Switch value={v} onChange={setV} />
            <span className="text-sm text-aivent-muted">{String(v)}</span>
          </div>
        </div>
      )
    }
    return <Demo />
  },
}
