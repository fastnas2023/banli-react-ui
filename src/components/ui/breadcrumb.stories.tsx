import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Breadcrumb } from './breadcrumb'

const meta: Meta = { title: 'UI/Breadcrumb' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Breadcrumb
        items={[
          { label: 'Home', href: '#' },
          { label: 'Marketing', href: '#' },
          { label: 'Landing Page' },
        ]}
      />
    </div>
  ),
}

export const WithActions: Story = {
  render: () => {
    function Demo() {
      const [last, setLast] = React.useState('Landing Page')
      return (
        <div className="bg-aivent-bg p-16 text-aivent-text">
          <div className="mb-4 text-sm text-aivent-text/70">最后点击：{last}</div>
          <Breadcrumb
            separator=">"
            items={[
              { label: 'Home', onClick: () => setLast('Home') },
              { label: 'Marketing', onClick: () => setLast('Marketing') },
              { label: 'Landing Page' },
            ]}
          />
        </div>
      )
    }
    return <Demo />
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Breadcrumb disabled items={[{ label: 'Home', href: '#' }, { label: 'Landing Page' }]} />
    </div>
  ),
}

