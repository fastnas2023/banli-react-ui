import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './dialog'

it('opens and closes dialog', async () => {
  const user = userEvent.setup()

  render(
    <Dialog>
      <DialogTrigger asChild>
        <button>Open dialog</button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Title</DialogTitle>
        <DialogDescription>Desc</DialogDescription>
        <div>Dialog body</div>
        <DialogClose asChild>
          <button>Close</button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )

  expect(screen.queryByText('Dialog body')).not.toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /open dialog/i }))
  expect(await screen.findByText('Dialog body')).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /close/i }))
  expect(screen.queryByText('Dialog body')).not.toBeInTheDocument()
})
