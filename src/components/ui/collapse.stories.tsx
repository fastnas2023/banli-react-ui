import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Collapse } from './collapse'

const meta: Meta = { title: 'UI/Collapse' }
export default meta
type Story = StoryObj

const items = [
  {
    key: 'a',
    label: 'What is Banli UI?',
    content: (
      <div>
        Banli UI 是一个面向营销站/后台的 React 组件库示例，强调一致的 API（value/defaultValue/onChange）与可访问性。
      </div>
    ),
  },
  { key: 'b', label: 'Design tokens?', content: <div>基于 Tailwind 变量与主题色，支持快速定制。</div> },
  { key: 'c', label: 'Disabled item', disabled: true, content: <div>你不应该能打开它。</div> },
]

export const Basic: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Collapse items={items} defaultValue={['a']} />
    </div>
  ),
}

export const Accordion: Story = {
  render: () => (
    <div className="bg-aivent-bg p-16 text-aivent-text">
      <Collapse items={items} multiple={false} defaultValue={['a']} />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    function Demo() {
      const [v, setV] = React.useState<string[]>(['a'])
      return (
        <div className="bg-aivent-bg p-16 text-aivent-text">
          <div className="mb-4 text-sm text-aivent-text/70">展开项：{v.join(', ') || '(none)'}</div>
          <Collapse items={items} value={v} onChange={setV} />
        </div>
      )
    }
    return <Demo />
  },
}

