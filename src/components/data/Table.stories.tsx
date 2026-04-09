import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import type { ColumnDef } from '@tanstack/react-table'

import { Table } from './Table'

type Person = {
  name: string
  email: string
  role: 'Admin' | 'Member'
}

const columns: ColumnDef<Person>[] = [
  { header: 'Name', accessorKey: 'name' },
  { header: 'Email', accessorKey: 'email' },
  { header: 'Role', accessorKey: 'role' },
]

const meta: Meta<typeof Table<Person>> = {
  title: 'Data Display/Table',
  component: Table,
  args: {
    columns,
    data: [
      { name: 'Ada Lovelace', email: 'ada@example.com', role: 'Admin' },
      { name: 'Alan Turing', email: 'alan@example.com', role: 'Member' },
    ],
  },
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const Empty: Story = {
  args: {
    data: [],
    emptyText: <span className="text-white/70">Nothing here</span>,
  },
}

