import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import { Result } from './result'

afterEach(() => cleanup())

it('defaults to role=alert', () => {
  render(<Result title="Saved" description="All good" />)
  expect(screen.getByRole('alert')).toBeInTheDocument()
})

it('supports status variant and actions', () => {
  render(<Result status="error" title="Failed" actions={<button>Retry</button>} />)
  const root = screen.getByRole('alert')
  expect(root).toHaveAttribute('data-status', 'error')
  expect(root.className).toContain('border-red-')
  expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument()
})
