import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../primitives/Button'
import { ConfirmDialog } from './confirm-dialog'

const meta: Meta = { title: 'UI/ConfirmDialog' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16">
      <ConfirmDialog
        trigger={<Button>Open confirm</Button>}
        title="Confirm action"
        description="This is a component wrapper built on top of Dialog."
        onConfirm={() => {
          // noop
        }}
      >
        <div className="text-sm text-aivent-text">Optional content area.</div>
      </ConfirmDialog>
    </div>
  ),
}

export const Danger: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16">
      <ConfirmDialog
        danger
        trigger={<Button className="bg-red-600 hover:bg-red-500">Delete</Button>}
        title="Delete item"
        description="This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={() => {
          // noop
        }}
      />
    </div>
  ),
}

export const AsyncConfirm: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16">
      <ConfirmDialog
        trigger={<Button>Async confirm</Button>}
        title="Async confirm"
        description="Confirm button will show loading until the promise resolves."
        confirmText="Confirm"
        onConfirm={() => new Promise((resolve) => setTimeout(resolve, 1200))}
      >
        <div className="text-sm text-aivent-muted">Try clicking outside while loading (it will be blocked).</div>
      </ConfirmDialog>
    </div>
  ),
}

