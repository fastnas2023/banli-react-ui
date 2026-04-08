import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { Spinner } from './Spinner'

it('exposes role=status with accessible label and forwards ref', () => {
  const ref = React.createRef<HTMLSpanElement>()
  render(<Spinner ref={ref} label="Loading data" />)
  expect(screen.getByRole('status', { name: 'Loading data' })).toBeInTheDocument()
  expect(ref.current).toBeTruthy()
})

