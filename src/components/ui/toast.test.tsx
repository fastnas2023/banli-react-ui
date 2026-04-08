import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'

import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from './toast'

function Demo() {
  const [open, setOpen] = React.useState(false)
  return (
    <ToastProvider>
      <button onClick={() => setOpen(true)}>Show</button>
      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Saved</ToastTitle>
        <ToastDescription>All good</ToastDescription>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  )
}

it('shows toast when open', async () => {
  const user = userEvent.setup()
  render(<Demo />)
  await user.click(screen.getByRole('button', { name: /show/i }))
  expect(await screen.findByText('Saved')).toBeInTheDocument()
})

