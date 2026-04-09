import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import type { CascaderOption } from './Cascader'
import { Cascader } from './Cascader'

const meta: Meta = { title: 'Data/Cascader' }
export default meta
type Story = StoryObj

const options: CascaderOption[] = [
  {
    label: '浙江',
    value: 'zj',
    children: [
      {
        label: '杭州',
        value: 'hz',
        children: [
          { label: '西湖', value: 'xihu' },
          { label: '余杭', value: 'yuhang' },
        ],
      },
      {
        label: '宁波',
        value: 'nb',
        children: [{ label: '海曙', value: 'haishu' }],
      },
    ],
  },
  {
    label: '江苏',
    value: 'js',
    children: [
      { label: '南京', value: 'nj' },
      { label: '苏州', value: 'sz' },
    ],
  },
]

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Cascader options={options} placeholder="请选择" />
    </div>
  ),
}

export const Search: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Cascader options={options} showSearch placeholder="可搜索：西湖 / 苏州" />
    </div>
  ),
}

export const AsyncLoad: Story = {
  render: () => {
    const [opts, setOpts] = React.useState<CascaderOption[]>([
      { label: '浙江', value: 'zj', isLeaf: false },
      { label: '江苏', value: 'js', isLeaf: false },
    ])

    return (
      <div className="bg-aivent-bg p-16 text-aivent-text">
        <Cascader
          options={opts}
          placeholder="异步加载下一列"
          loadData={async (selected) => {
            await new Promise((r) => setTimeout(r, 300))
            const last = selected[selected.length - 1]
            if (!last) return
            last.children = [
              { label: `${last.label as string} - 子项 A`, value: `${last.value}-a` },
              { label: `${last.label as string} - 子项 B`, value: `${last.value}-b` },
            ]
            // 为了触发重渲染，创建新数组（也兼容原地 mutation 场景）
            setOpts((prev) => [...prev])
          }}
        />
      </div>
    )
  },
}

