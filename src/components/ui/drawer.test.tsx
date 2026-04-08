import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from './drawer'

it('opens drawer on click', async () => {
  const user = userEvent.setup()

  render(
    <Drawer>
      <DrawerTrigger asChild>
        <button>Open drawer</button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>Title</DrawerTitle>
        <DrawerDescription>Desc</DrawerDescription>
        <div>Drawer content</div>
        <DrawerClose asChild>
          <button>Close</button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  )

  await user.click(screen.getByRole('button', { name: /open drawer/i }))
  expect(await screen.findByText('Drawer content')).toBeInTheDocument()
})
