import * as React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, it, vi } from 'vitest'

import { Pagination } from './pagination'

afterEach(() => cleanup())

it('supports controlled value + onChange', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()

  function Demo() {
    const [page, setPage] = React.useState(1)
    return (
      <Pagination
        total={100}
        pageSize={10}
        value={page}
        onChange={(p) => {
          setPage(p)
          onChange(p)
        }}
      />
    )
  }

  render(<Demo />)

  expect(screen.getByRole('button', { name: /previous page/i })).toBeDisabled()
  expect(screen.getByRole('button', { name: /^page 1$/i })).toHaveAttribute('aria-current', 'page')

  await user.click(screen.getByRole('button', { name: /^page 2$/i }))
  expect(onChange).toHaveBeenLastCalledWith(2)
  expect(screen.getByRole('button', { name: /^page 2$/i })).toHaveAttribute('aria-current', 'page')

  await user.click(screen.getByRole('button', { name: /next page/i }))
  expect(onChange).toHaveBeenLastCalledWith(3)
  expect(screen.getByRole('button', { name: /^page 3$/i })).toHaveAttribute('aria-current', 'page')
})

it('supports defaultValue (uncontrolled)', async () => {
  const user = userEvent.setup()
  render(<Pagination total={50} pageSize={10} defaultValue={2} />)

  expect(screen.getByRole('button', { name: /^page 2$/i })).toHaveAttribute('aria-current', 'page')
  await user.click(screen.getByRole('button', { name: /^page 3$/i }))
  expect(screen.getByRole('button', { name: /^page 3$/i })).toHaveAttribute('aria-current', 'page')
})

it('disabled prevents navigation', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()
  render(<Pagination total={100} pageSize={10} value={1} onChange={onChange} disabled />)

  await user.click(screen.getByRole('button', { name: /next page/i }))
  await user.click(screen.getByRole('button', { name: /^page 2$/i }))
  expect(onChange).not.toHaveBeenCalled()
})

