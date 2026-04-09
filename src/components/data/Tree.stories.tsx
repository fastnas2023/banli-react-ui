import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Tree, type TreeNode } from './Tree'

const meta: Meta<typeof Tree> = {
  title: 'Data/Tree',
  component: Tree,
  args: {
    showSearch: true,
  },
}

export default meta
type Story = StoryObj<typeof Tree>

const demoData: TreeNode[] = [
  {
    key: '1',
    title: 'Applications',
    children: [
      { key: '1-1', title: 'Calendar' },
      { key: '1-2', title: 'Chrome' },
      { key: '1-3', title: 'Webstorm' },
    ],
  },
  {
    key: '2',
    title: 'Documents',
    children: [
      { key: '2-1', title: 'Material UI' },
      { key: '2-2', title: 'React' },
    ],
  },
]

export const Default: Story = {
  args: {
    data: demoData,
    defaultExpandedKeys: ['1'],
  },
  render: (args) => <div className="max-w-md bg-aivent-bg p-6 text-aivent-fg">{<Tree {...args} />}</div>,
}

export const Search: Story = {
  render: () => {
    function Demo() {
      const [sv, setSv] = React.useState('react')
      return (
        <div className="max-w-md bg-aivent-bg p-6 text-aivent-fg">
          <Tree data={demoData} showSearch searchValue={sv} onSearchValueChange={setSv} defaultExpandedKeys={['1']} />
          <div className="mt-2 text-xs text-aivent-muted">searchValue: {sv}</div>
        </div>
      )
    }
    return <Demo />
  },
}

export const AsyncLoad: Story = {
  render: () => {
    const initial: TreeNode[] = [{ key: 'p', title: 'Lazy parent' }]

    function Demo() {
      const [data, setData] = React.useState<TreeNode[]>(initial)
      return (
        <div className="max-w-md bg-aivent-bg p-6 text-aivent-fg">
          <Tree
            data={data}
            defaultExpandedKeys={[]}
            loadData={async (node) => {
              await new Promise((r) => setTimeout(r, 800))
              const children: TreeNode[] = [
                { key: `${node.key}-1`, title: 'Loaded child 1' },
                { key: `${node.key}-2`, title: 'Loaded child 2' },
              ]
              // 也可通过返回值写入 children；这里同时演示外部 data 变化也能同步渲染
              setData((prev) =>
                prev.map((n) => (n.key === node.key ? { ...n, children } : n))
              )
              return children
            }}
          />
        </div>
      )
    }

    return <Demo />
  },
}

