import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { Divider } from './Divider'

it('is aria-hidden by default (decorative)', () => {
  render(<Divider data-testid="d" />)
  expect(screen.getByTestId('d')).toHaveAttribute('aria-hidden', 'true')
})

it('supports vertical separator a11y when decorative=false', () => {
  render(<Divider orientation="vertical" decorative={false} aria-label="Section separator" />)
  expect(screen.getByRole('separator', { name: 'Section separator' })).toHaveAttribute(
    'aria-orientation',
    'vertical'
  )
})

