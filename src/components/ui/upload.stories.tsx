import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Upload } from './upload'

const meta: Meta = { title: 'UI/Upload' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => {
    const [files, setFiles] = React.useState<File[]>([])
    return (
      <div className="bg-aivent-bg p-16 text-aivent-text">
        <div className="max-w-xl space-y-4">
          <Upload onDrop={setFiles} />
          <div className="text-xs text-aivent-muted">files: {files.map((f) => f.name).join(', ') || '(none)'}</div>
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <div className="max-w-xl">
        <Upload disabled />
      </div>
    </div>
  ),
}

