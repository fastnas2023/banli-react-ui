import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'

import { DatePicker } from './date-picker'

it('opens date picker and triggers onChange on select', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()

  render(<DatePicker onChange={onChange} dayPickerProps={{ defaultMonth: new Date(2026, 0, 1) }} />)

  await user.click(screen.getByRole('button'))

  // react-day-picker uses an accessible label including month/day/year
  const day = await screen.findByRole('button', { name: /january.*15.*2026/i })
  await user.click(day)

  expect(onChange).toHaveBeenCalledTimes(1)
  const selected = onChange.mock.calls[0]?.[0] as Date | undefined
  expect(selected).toBeInstanceOf(Date)
  expect(selected?.getFullYear()).toBe(2026)
  expect(selected?.getMonth()).toBe(0)
  expect(selected?.getDate()).toBe(15)
})

