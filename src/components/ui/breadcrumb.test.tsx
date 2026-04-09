import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, it, vi } from 'vitest'
import { Breadcrumb } from './breadcrumb'

afterEach(() => cleanup())

it('marks last item as current page', () => {
  render(<Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'List', href: '/list' }, { label: 'Detail' }]} />)
  expect(screen.getByText('Detail')).toHaveAttribute('aria-current', 'page')
})

it('calls onClick for non-disabled item', async () => {
  const user = userEvent.setup()
  const onClick = vi.fn()
  render(<Breadcrumb items={[{ label: 'Home', onClick }, { label: 'Detail' }]} />)

  await user.click(screen.getByRole('button', { name: 'Home' }))
  expect(onClick).toHaveBeenCalledTimes(1)
})

it('disabled prevents click', async () => {
  const user = userEvent.setup()
  const onClick = vi.fn()
  render(<Breadcrumb disabled items={[{ label: 'Home', onClick }, { label: 'Detail' }]} />)

  expect(screen.getByRole('button', { name: 'Home' })).toBeDisabled()
  await user.click(screen.getByRole('button', { name: 'Home' }))
  expect(onClick).not.toHaveBeenCalled()
})

