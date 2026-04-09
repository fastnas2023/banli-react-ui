import { cleanup, fireEvent, render, waitFor, within } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'

import { Upload } from './upload'

afterEach(() => cleanup())

function createDtWithFiles(files: File[]) {
  return {
    dataTransfer: {
      files,
      items: files.map((file) => ({
        kind: 'file',
        type: file.type,
        getAsFile: () => file,
      })),
      types: ['Files'],
    },
  }
}

it('disables input when disabled=true', async () => {
  const onDrop = vi.fn()
  const { container } = render(<Upload disabled onDrop={onDrop} />)

  const root = within(container).getByRole('button')
  expect(root).toHaveAttribute('aria-disabled', 'true')
  const input = root.querySelector('input[type="file"]') as HTMLInputElement | null
  expect(input).not.toBeNull()
  expect(input).toBeDisabled()

  const file = new File(['hello'], 'hello.txt', { type: 'text/plain' })
  fireEvent.drop(root, createDtWithFiles([file]))
  await new Promise((r) => setTimeout(r, 0))
  expect(onDrop).not.toHaveBeenCalled()
})

it('triggers onDrop when files dropped', async () => {
  const onDrop = vi.fn()
  const { container } = render(<Upload onDrop={onDrop} />)

  const root = within(container).getByRole('button')
  const file = new File(['hello'], 'hello.txt', { type: 'text/plain' })
  fireEvent.drop(root, createDtWithFiles([file]))

  await waitFor(() => expect(onDrop).toHaveBeenCalledTimes(1))
  expect(onDrop).toHaveBeenCalledWith([file])
})
