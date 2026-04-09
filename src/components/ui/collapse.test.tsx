import * as React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, it, vi } from 'vitest'

import { Collapse } from './collapse'

afterEach(() => cleanup())

it('toggles items (uncontrolled, multiple=true)', async () => {
  const user = userEvent.setup()
  render(
    <Collapse
      items={[
        { key: 'a', label: 'A', content: <div>A content</div> },
        { key: 'b', label: 'B', content: <div>B content</div> },
      ]}
      defaultValue={['a']}
    />
  )

  expect(screen.getByRole('button', { name: 'A' })).toHaveAttribute('aria-expanded', 'true')
  expect(screen.getByText('A content')).toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: 'B' }))
  expect(screen.getByRole('button', { name: 'B' })).toHaveAttribute('aria-expanded', 'true')
  expect(screen.getByText('B content')).toBeInTheDocument()

  // close A
  await user.click(screen.getByRole('button', { name: 'A' }))
  expect(screen.getByRole('button', { name: 'A' })).toHaveAttribute('aria-expanded', 'false')
})

it('accordion mode keeps only one open (multiple=false)', async () => {
  const user = userEvent.setup()
  render(
    <Collapse
      multiple={false}
      items={[
        { key: 'a', label: 'A', content: <div>A content</div> },
        { key: 'b', label: 'B', content: <div>B content</div> },
      ]}
      defaultValue={['a']}
    />
  )

  await user.click(screen.getByRole('button', { name: 'B' }))
  expect(screen.getByRole('button', { name: 'B' })).toHaveAttribute('aria-expanded', 'true')
  expect(screen.getByRole('button', { name: 'A' })).toHaveAttribute('aria-expanded', 'false')
})

it('supports controlled value + onChange', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()

  function Demo() {
    const [v, setV] = React.useState<string[]>([])
    return (
      <Collapse
        items={[{ key: 'a', label: 'A', content: <div>A content</div> }]}
        value={v}
        onChange={(next) => {
          setV(next)
          onChange(next)
        }}
      />
    )
  }

  render(<Demo />)
  await user.click(screen.getByRole('button', { name: 'A' }))
  expect(onChange).toHaveBeenLastCalledWith(['a'])
  expect(screen.getByText('A content')).toBeInTheDocument()
})

