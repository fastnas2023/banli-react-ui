import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Tabs } from './tabs'

const meta: Meta = { title: 'UI/Tabs' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Tabs
        defaultValue="overview"
        options={[
          { label: 'Overview', value: 'overview', content: <div>Overview content</div> },
          { label: 'Specs', value: 'specs', content: <div>Specs content</div> },
          { label: 'Disabled', value: 'disabled', content: <div>Disabled content</div>, disabled: true },
        ]}
      />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    function Demo() {
      const [v, setV] = React.useState('overview')
      return (
        <div className="bg-aivent-bg p-16 text-aivent-text">
          <Tabs
            value={v}
            onChange={setV}
            options={[
              { label: 'Overview', value: 'overview', content: <div>Overview content</div> },
              { label: 'Specs', value: 'specs', content: <div>Specs content</div> },
            ]}
          />
          <div className="mt-4 text-sm text-aivent-muted">value: {v}</div>
        </div>
      )
    }
    return <Demo />
  },
}
