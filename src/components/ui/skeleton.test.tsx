import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'

import { Skeleton } from './skeleton'

it('defaults to role=status and aria-busy=true', () => {
  render(<Skeleton />)
  const el = screen.getByRole('status')
  expect(el).toHaveAttribute('aria-busy', 'true')
  expect(el).toHaveClass('animate-pulse')
})

it('supports variant and size', () => {
  render(<Skeleton variant="avatar" size="small" data-testid="s" />)
  const el = screen.getByTestId('s')
  expect(el).toHaveAttribute('data-variant', 'avatar')
  expect(el).toHaveAttribute('data-size', 'small')
  expect(el).toHaveClass('rounded-full')
  expect(el).toHaveClass('h-8')
  expect(el).toHaveClass('w-8')
})

it('allows overriding role and aria-busy', () => {
  render(<Skeleton role="alert" aria-busy={false} />)
  const el = screen.getByRole('alert')
  expect(el).toHaveAttribute('aria-busy', 'false')
})

