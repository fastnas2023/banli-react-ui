import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import * as React from 'react'

import { Switch } from './switch'

it('toggles switch by click and keyboard', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()

  function Demo() {
    const [v, setV] = React.useState(false)
    return (
      <Switch
        value={v}
        onChange={(next) => {
          setV(next)
          onChange(next)
        }}
      />
    )
  }

  render(<Demo />)

  const sw = screen.getByRole('switch')
  expect(sw).toHaveAttribute('aria-checked', 'false')

  await user.click(sw)
  expect(onChange).toHaveBeenLastCalledWith(true)
  expect(sw).toHaveAttribute('aria-checked', 'true')

  sw.focus()
  await user.keyboard('{Enter}')
  expect(onChange).toHaveBeenLastCalledWith(false)
  expect(sw).toHaveAttribute('aria-checked', 'false')
})

