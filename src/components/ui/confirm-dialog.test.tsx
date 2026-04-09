import * as React from 'react'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, it, vi } from 'vitest'

import { ConfirmDialog } from './confirm-dialog'

afterEach(() => cleanup())

it('opens via trigger and closes on cancel', async () => {
  const user = userEvent.setup()

  render(
    <ConfirmDialog
      trigger={<button>Open</button>}
      title="Title"
      description="Desc"
      confirmText="Confirm"
      cancelText="Cancel"
      onConfirm={() => {}}
    >
      <div>Body</div>
    </ConfirmDialog>
  )

  expect(screen.queryByText('Body')).not.toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /open/i }))
  expect(await screen.findByText('Title')).toBeInTheDocument()
  expect(screen.getByText('Desc')).toBeInTheDocument()
  expect(screen.getByText('Body')).toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: /cancel/i }))
  await waitFor(() => expect(screen.queryByText('Body')).not.toBeInTheDocument())
})

it('supports defaultOpen', async () => {
  render(
    <ConfirmDialog defaultOpen title="Title" description="Desc" onConfirm={() => {}}>
      <div>Body</div>
    </ConfirmDialog>
  )

  expect(await screen.findByText('Body')).toBeInTheDocument()
})

it('supports controlled open + onOpenChange', async () => {
  const user = userEvent.setup()
  const onConfirm = vi.fn()

  function Demo() {
    const [open, setOpen] = React.useState(false)
    return (
      <ConfirmDialog
        open={open}
        onOpenChange={setOpen}
        trigger={<button>Open</button>}
        title="Title"
        description="Desc"
        confirmText="Confirm"
        cancelText="Cancel"
        onConfirm={onConfirm}
      >
        <div>Body</div>
      </ConfirmDialog>
    )
  }

  render(<Demo />)
  await user.click(screen.getByRole('button', { name: /open/i }))
  expect(await screen.findByText('Body')).toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: /confirm/i }))
  expect(onConfirm).toHaveBeenCalledTimes(1)
  await waitFor(() => expect(screen.queryByText('Body')).not.toBeInTheDocument())
})

it('onConfirm supports async and provides loading+disable', async () => {
  const user = userEvent.setup()

  let resolve!: () => void
  const promise = new Promise<void>((r) => {
    resolve = r
  })
  const onConfirm = vi.fn(() => promise)

  render(
    <ConfirmDialog
      trigger={<button>Open</button>}
      title="Title"
      description="Desc"
      confirmText="Confirm"
      cancelText="Cancel"
      onConfirm={onConfirm}
    >
      <div>Body</div>
    </ConfirmDialog>
  )

  await user.click(screen.getByRole('button', { name: /open/i }))
  expect(await screen.findByText('Body')).toBeInTheDocument()

  const confirmBtn = screen.getByRole('button', { name: /confirm/i })
  const cancelBtn = screen.getByRole('button', { name: /cancel/i })

  await user.click(confirmBtn)
  expect(onConfirm).toHaveBeenCalledTimes(1)
  expect(confirmBtn).toBeDisabled()
  expect(cancelBtn).toBeDisabled()

  resolve()
  await waitFor(() => expect(screen.queryByText('Body')).not.toBeInTheDocument())
})

