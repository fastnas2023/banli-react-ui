import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import * as React from 'react'

import { RadioGroup } from './radio-group'

it('changes selection with arrow keys (skips disabled)', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()

  function Demo() {
    const [v, setV] = React.useState('a')
    return (
      <RadioGroup
        value={v}
        onChange={(next) => {
          setV(next)
          onChange(next)
        }}
        options={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b', disabled: true },
          { label: 'C', value: 'c' },
        ]}
      />
    )
  }

  render(<Demo />)

  // focus the currently selected radio via tab
  await user.tab()
  const a = screen.getByRole('radio', { name: 'A' })
  expect(a).toHaveAttribute('aria-checked', 'true')

  // ArrowDown should skip disabled B and land on C
  await user.keyboard('{ArrowDown}')
  const c = screen.getByRole('radio', { name: 'C' })
  expect(c).toHaveFocus()
  expect(c).toHaveAttribute('aria-checked', 'true')
  expect(onChange).toHaveBeenLastCalledWith('c')
})

