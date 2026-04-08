import type { Meta, StoryObj } from '@storybook/react'
import avatarImg from '../../assets/images/team/1.webp'
import { Avatar } from './Avatar'
import { Space } from './Space'

const meta: Meta<typeof Avatar> = {
  title: 'Primitives/Avatar',
  component: Avatar,
  args: {
    alt: 'Jane Doe',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    src: avatarImg,
  },
}

export const Fallback: Story = {
  args: {
    src: undefined,
    alt: 'Jason Zhang',
  },
}

export const SizesAndShapes: Story = {
  render: () => (
    <div className="bg-aivent-bg p-6">
      <Space size="lg" align="center">
        <Avatar src={avatarImg} alt="Circle" size="sm" variant="circle" />
        <Avatar src={avatarImg} alt="Rounded" size="md" variant="rounded" />
        <Avatar src={avatarImg} alt="Square" size="lg" variant="square" />
        <Avatar alt="Custom" size={72} fallback="CU" />
      </Space>
    </div>
  ),
}

