import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'

import { Popover, PopoverContent, PopoverTrigger } from './popover'

it('opens popover on click', async () => {
  const user = userEvent.setup()
  render(
    <Popover>
      <PopoverTrigger asChild>
        <button>Open</button>
      </PopoverTrigger>
      <PopoverContent>Panel</PopoverContent>
    </Popover>
  )

  expect(screen.queryByText('Panel')).not.toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /open/i }))
  expect(await screen.findByText('Panel')).toBeInTheDocument()
})

