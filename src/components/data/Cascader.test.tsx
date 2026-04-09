import { cleanup, render, screen, within, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, it, vi } from 'vitest'
import * as React from 'react'

import type { CascaderOption } from './Cascader'
import { Cascader } from './Cascader'

afterEach(() => cleanup())

it('keyboard select triggers onChange', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()

  const options: CascaderOption[] = [
    {
      label: 'Zhejiang',
      value: 'zj',
      children: [{ label: 'Hangzhou', value: 'hz' }],
    },
    {
      label: 'Jiangsu',
      value: 'js',
      children: [{ label: 'Nanjing', value: 'nj' }],
    },
  ]

  function Demo() {
    const [v, setV] = React.useState<string[]>(['zj', 'hz'])
    return (
      <Cascader
        value={v}
        onChange={(next) => {
          setV(next)
          onChange(next)
        }}
        options={options}
      />
    )
  }

  const { container } = render(<Demo />)

  const trigger = within(container).getByRole('button')
  trigger.focus()
  await user.keyboard('{Enter}')

  await screen.findAllByRole('listbox')
  // move to Jiangsu, open next column, select Nanjing
  await user.keyboard('{ArrowDown}{ArrowRight}{Enter}')

  expect(onChange).toHaveBeenLastCalledWith(['js', 'nj'])
  expect(screen.queryAllByRole('listbox')).toHaveLength(0)
  expect(within(trigger).getByText('Jiangsu / Nanjing')).toBeInTheDocument()
})

it('async load shows second column after loadData', async () => {
  const user = userEvent.setup()

  const opts: CascaderOption[] = [{ label: 'Zhejiang', value: 'zj', isLeaf: false }]
  const loadData = vi.fn(async (selectedOptions: CascaderOption[]) => {
    await new Promise((r) => setTimeout(r, 10))
    const last = selectedOptions[selectedOptions.length - 1]
    if (last) last.children = [{ label: 'Hangzhou', value: 'hz' }]
  })

  const { container } = render(<Cascader options={opts} loadData={loadData} />)

  const trigger = within(container).getByRole('button')
  trigger.focus()
  await user.keyboard('{Enter}')

  await screen.findAllByRole('listbox')
  // open next column by keyboard, should trigger loadData and show column 2
  await user.keyboard('{ArrowRight}')

  expect(loadData).toHaveBeenCalled()

  await screen.findByText('Hangzhou')
  await waitFor(() => {
    expect(screen.getAllByRole('listbox').length).toBe(2)
  })
})

it('search filters options and selecting a search result triggers onChange', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()

  const options: CascaderOption[] = [
    { label: 'Zhejiang', value: 'zj', children: [{ label: 'Hangzhou', value: 'hz' }] },
    { label: 'Jiangsu', value: 'js', children: [{ label: 'Nanjing', value: 'nj' }] },
  ]

  const { container } = render(<Cascader options={options} showSearch onChange={onChange} />)
  const trigger = within(container).getByRole('button')

  await user.click(trigger)
  const searchInput = await screen.findByRole('textbox', { name: /搜索/i })
  await user.type(searchInput, 'Nanj')

  const results = await screen.findByRole('listbox', { name: /search results/i })
  // click the matching path result
  await user.click(within(results).getByRole('option', { name: /Jiangsu/i }))

  expect(onChange).toHaveBeenCalledTimes(1)
  expect(onChange).toHaveBeenCalledWith(['js', 'nj'], expect.any(Array))
})
