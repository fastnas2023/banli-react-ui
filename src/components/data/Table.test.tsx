import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import type { ColumnDef } from '@tanstack/react-table'

import { Table } from './Table'

type Person = {
  name: string
  email: string
}

const columns: ColumnDef<Person>[] = [
  { header: 'Name', accessorKey: 'name' },
  { header: 'Email', accessorKey: 'email' },
]

it('renders basic table structure and data', () => {
  render(
    <Table<Person>
      columns={columns}
      data={[
        { name: 'Ada', email: 'ada@example.com' },
        { name: 'Alan', email: 'alan@example.com' },
      ]}
    />
  )

  expect(screen.getByRole('table')).toBeInTheDocument()

  // a11y: ensure header cells are real <th scope="col">
  const nameHeader = screen.getByRole('columnheader', { name: 'Name' })
  expect(nameHeader.tagName.toLowerCase()).toBe('th')
  expect(nameHeader).toHaveAttribute('scope', 'col')

  expect(screen.getByRole('columnheader', { name: 'Email' })).toBeInTheDocument()
  expect(screen.getByText('Ada')).toBeInTheDocument()
  expect(screen.getByText('alan@example.com')).toBeInTheDocument()
})

it('renders emptyText when data is empty', () => {
  render(<Table<Person> columns={columns} data={[]} emptyText="No rows" />)
  expect(screen.getByText('No rows')).toBeInTheDocument()
})

