import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import * as React from 'react'

import { Checkbox } from './checkbox'

it('toggles checkbox by click and keyboard', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()

  function Demo() {
    const [v, setV] = React.useState(false)
    return (
      <Checkbox
        value={v}
        onChange={(next) => {
          setV(next)
          onChange(next)
        }}
      >
        Agree
      </Checkbox>
    )
  }

  render(<Demo />)

  const checkbox = screen.getByRole('checkbox', { name: /agree/i })
  expect(checkbox).toHaveAttribute('aria-checked', 'false')

  // keyboard
  await user.tab()
  expect(checkbox).toHaveFocus()
  await user.keyboard('{Space}')
  expect(onChange).toHaveBeenLastCalledWith(true)
  expect(checkbox).toHaveAttribute('aria-checked', 'true')

  // click
  await user.click(checkbox)
  expect(onChange).toHaveBeenLastCalledWith(false)
  expect(checkbox).toHaveAttribute('aria-checked', 'false')
})
