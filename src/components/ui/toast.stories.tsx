import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../primitives/Button'
import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from './toast'

const meta: Meta = { title: 'UI/Toast' }
export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)

    return (
      <div className="bg-aivent-bg p-16">
        <ToastProvider swipeDirection="right">
          <Button onClick={() => setOpen(true)}>Show toast</Button>
          <Toast open={open} onOpenChange={setOpen} duration={3000}>
            <div className="grid gap-1">
              <ToastTitle>Saved</ToastTitle>
              <ToastDescription>Your changes have been stored.</ToastDescription>
            </div>
          </Toast>
          <ToastViewport />
        </ToastProvider>
      </div>
    )
  },
}

