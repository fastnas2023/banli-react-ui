import * as React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, it, vi } from 'vitest'

import { Tree, type TreeNode } from './Tree'

afterEach(() => cleanup())

it('supports roving tabindex: ArrowUp/ArrowDown moves focus between visible nodes', async () => {
  const user = userEvent.setup()

  const data: TreeNode[] = [
    { key: '1', title: 'Node 1' },
    { key: '2', title: 'Node 2' },
    { key: '3', title: 'Node 3' },
  ]

  render(<Tree data={data} />)

  const n1 = screen.getByRole('treeitem', { name: 'Node 1' })
  const n2 = screen.getByRole('treeitem', { name: 'Node 2' })
  const n3 = screen.getByRole('treeitem', { name: 'Node 3' })

  // 初始 roving tabindex：第一个为 0
  expect(n1).toHaveAttribute('tabindex', '0')
  expect(n2).toHaveAttribute('tabindex', '-1')

  n1.focus()
  expect(n1).toHaveFocus()

  await user.keyboard('{ArrowDown}')
  expect(n2).toHaveFocus()

  await user.keyboard('{ArrowDown}')
  expect(n3).toHaveFocus()

  await user.keyboard('{ArrowUp}')
  expect(n2).toHaveFocus()
})

it('renders children after async load when expanding a node', async () => {
  const user = userEvent.setup()

  const loadData = vi.fn(async (node: TreeNode) => {
    await new Promise((r) => setTimeout(r, 10))
    return [
      { key: `${node.key}-1`, title: 'Child 1' },
      { key: `${node.key}-2`, title: 'Child 2' },
    ]
  })

  render(<Tree data={[{ key: 'p', title: 'Parent' }]} loadData={loadData} />)

  const parent = screen.getByRole('treeitem', { name: 'Parent' })
  parent.focus()
  expect(parent).toHaveFocus()

  // Enter 展开 -> 触发 loadData
  await user.keyboard('{Enter}')
  expect(loadData).toHaveBeenCalledTimes(1)
  expect(loadData).toHaveBeenCalledWith(expect.objectContaining({ key: 'p' }))

  // 异步加载完后，children 必须渲染出来
  expect(await screen.findByRole('treeitem', { name: /Child 1/ })).toBeInTheDocument()
  expect(screen.getByRole('treeitem', { name: /Child 2/ })).toBeInTheDocument()

  // Parent 应该处于展开态（ARIA）
  expect(screen.getByRole('treeitem', { name: 'Parent' })).toHaveAttribute('aria-expanded', 'true')
})
