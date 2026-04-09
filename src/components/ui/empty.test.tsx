import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import { Empty } from './empty'

afterEach(() => cleanup())

it('renders title/description/actions', () => {
  render(<Empty title="No data" description="Try again later" actions={<button>Reload</button>} />)
  expect(screen.getByText('No data')).toBeInTheDocument()
  expect(screen.getByText('Try again later')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Reload' })).toBeInTheDocument()
})

it('does not set role=status by default, but can opt-in via useStatusRole', () => {
  const { rerender } = render(<Empty title="A" />)
  expect(screen.queryByRole('status')).toBeNull()

  rerender(<Empty title="A" useStatusRole />)
  expect(screen.getByRole('status')).toBeInTheDocument()
})

it('exposes data-size for testing/debug', () => {
  render(<Empty title="A" size="small" data-testid="empty" />)
  expect(screen.getByTestId('empty')).toHaveAttribute('data-size', 'small')
})
