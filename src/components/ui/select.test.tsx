import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import * as React from 'react'

import { Select } from './select'

it('opens select and selects option by keyboard', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()

  function Demo() {
    const [v, setV] = React.useState('a')
    return (
      <Select
        value={v}
        onChange={(next) => {
          setV(next)
          onChange(next)
        }}
        options={[
          { label: 'Option A', value: 'a' },
          { label: 'Option B', value: 'b' },
        ]}
      />
    )
  }

  render(<Demo />)

  const trigger = screen.getByRole('button')
  trigger.focus()
  await user.keyboard('{Enter}')

  const listbox = await screen.findByRole('listbox')
  // move to Option B and select
  await user.keyboard('{ArrowDown}{Enter}')

  expect(onChange).toHaveBeenLastCalledWith('b')
  expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

  // trigger label should update
  expect(within(trigger).getByText('Option B')).toBeInTheDocument()
})

it('closes select by escape', async () => {
  const user = userEvent.setup()
  const { container } = render(<Select defaultValue="a" options={[{ label: 'Option A', value: 'a' }]} />)
  const trigger = within(container).getByRole('button')
  await user.click(trigger)
  expect(await screen.findByRole('listbox')).toBeInTheDocument()
  await user.keyboard('{Escape}')
  expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
})
