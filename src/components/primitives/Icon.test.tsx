import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { Icon } from './Icon'

it('is aria-hidden by default (decorative)', () => {
  render(<Icon name="check" data-testid="icon" />)
  expect(screen.getByTestId('icon')).toHaveAttribute('aria-hidden', 'true')
})

it('becomes role=img when title is provided', () => {
  render(<Icon name="check" title="Check" />)
  expect(screen.getByRole('img', { name: 'Check' })).toBeInTheDocument()
})

