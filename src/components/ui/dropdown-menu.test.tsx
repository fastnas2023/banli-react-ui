import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu'

it('opens dropdown and invokes item handler', async () => {
  const user = userEvent.setup()
  const onSelect = vi.fn()

  render(
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={onSelect}>Item A</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  await user.click(screen.getByRole('button', { name: /menu/i }))
  const item = await screen.findByRole('menuitem', { name: /item a/i })
  await user.click(item)
  expect(onSelect).toHaveBeenCalled()
})

