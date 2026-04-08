import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'
import { Textarea } from './Textarea'

it('forwards ref', () => {
  const ref = React.createRef<HTMLTextAreaElement>()
  render(<Textarea aria-label="msg" ref={ref} />)
  ref.current?.focus()
  expect(screen.getByLabelText('msg')).toHaveFocus()
})

it('supports controlled value + onChange', async () => {
  const user = userEvent.setup()

  function Controlled() {
    const [value, setValue] = React.useState('a')
    return <Textarea aria-label="controlled" value={value} onChange={(e) => setValue(e.target.value)} />
  }

  render(<Controlled />)
  const el = screen.getByLabelText('controlled') as HTMLTextAreaElement
  expect(el.value).toBe('a')
  await user.type(el, 'bc')
  expect(el.value).toBe('abc')
})

it('supports defaultValue (uncontrolled)', async () => {
  const user = userEvent.setup()
  render(<Textarea aria-label="uncontrolled" defaultValue="hello" />)
  const el = screen.getByLabelText('uncontrolled') as HTMLTextAreaElement
  expect(el.value).toBe('hello')
  await user.type(el, '!')
  expect(el.value).toBe('hello!')
})

it('sets aria-invalid when invalid=true', () => {
  render(<Textarea aria-label="invalid" invalid />)
  expect(screen.getByLabelText('invalid')).toHaveAttribute('aria-invalid', 'true')
})

it('loading implies disabled and sets aria-busy', () => {
  render(<Textarea aria-label="loading" loading />)
  const el = screen.getByLabelText('loading') as HTMLTextAreaElement
  expect(el).toBeDisabled()
  expect(el).toHaveAttribute('aria-busy', 'true')
})

it('calls onChange when typing', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()
  render(<Textarea aria-label="x" onChange={onChange} />)
  await user.type(screen.getByLabelText('x'), 'hi')
  expect(onChange).toHaveBeenCalled()
})

