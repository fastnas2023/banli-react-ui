import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import * as React from 'react'

import { Tabs } from './tabs'

it('changes tab by arrow keys', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()

  function Demo() {
    const [v, setV] = React.useState('a')
    return (
      <Tabs
        value={v}
        onChange={(next) => {
          setV(next)
          onChange(next)
        }}
        options={[
          { label: 'A', value: 'a', content: <div>Panel A</div> },
          { label: 'B', value: 'b', content: <div>Panel B</div> },
        ]}
      />
    )
  }

  render(<Demo />)

  const tabA = screen.getByRole('tab', { name: 'A' })
  const tabB = screen.getByRole('tab', { name: 'B' })
  expect(tabA).toHaveAttribute('aria-selected', 'true')
  expect(screen.getByText('Panel A')).toBeInTheDocument()

  tabA.focus()
  await user.keyboard('{ArrowRight}')

  expect(tabB).toHaveFocus()
  expect(tabB).toHaveAttribute('aria-selected', 'true')
  expect(onChange).toHaveBeenLastCalledWith('b')
  expect(screen.getByText('Panel B')).toBeInTheDocument()
})

