import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { DatePicker } from './date-picker'

const meta: Meta = { title: 'UI/DatePicker' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <DatePicker dayPickerProps={{ defaultMonth: new Date(2026, 0, 1) }} />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    function Demo() {
      const [v, setV] = React.useState<Date | undefined>(new Date(2026, 0, 15))
      return (
        <div className="bg-aivent-bg p-16 text-aivent-text">
          <div className="flex items-center gap-4">
            <DatePicker value={v} onChange={setV} dayPickerProps={{ defaultMonth: new Date(2026, 0, 1) }} />
            <span className="text-sm text-aivent-muted">value: {v ? v.toDateString() : 'undefined'}</span>
          </div>
        </div>
      )
    }
    return <Demo />
  },
}
