import type { Meta, StoryObj } from '@storybook/react'
import { AiventI18nProvider } from '../i18n/provider'
import { HomePage } from '../components/pages/HomePage'
import { HeroVideo } from '../components/sections/hero/HeroVideo'

const bg1 = new URL('../assets/images/background/1.webp', import.meta.url).toString()
const video2 = new URL('../assets/video/2.mp4', import.meta.url).toString()

const meta: Meta = { title: 'I18n/Examples' }
export default meta
type Story = StoryObj

export const ChineseHome: Story = {
  render: () => (
    <AiventI18nProvider
      messages={{
        header: {
          ctaLabel: '立即购票',
          menuTitle: '菜单',
          openMenuAriaLabel: '打开菜单',
          closeMenuAriaLabel: '关闭菜单',
          nav: {
            home: '首页',
            about: '关于',
            speakers: '嘉宾',
            schedule: '日程',
            tickets: '票务',
            news: '资讯',
            contact: '联系',
          },
        },
        hero: {
          badge: 'AI 峰会',
          primaryCta: '立即购票',
          secondaryCta: '查看日程',
        },
        sections: {
          whyAttend: { eyebrow: '为何参加', title: '你将获得什么' },
          speakers: { eyebrow: '嘉宾', title: '认识行业领袖' },
          schedule: { eyebrow: '日程', title: '5 天 AI 盛会' },
          tickets: {
            eyebrow: '票务',
            title: '选择你的通行证',
            subtitle: '适合团队、开发者和决策者的票务方案。',
            popular: '热门',
            buyPrefix: '购买',
            style2Title: '票务样式 2',
            style2Subtitle: '更紧凑的布局，适合结算场景。',
            select: '选择',
            cart: '购物车',
            vat: '税费',
            total: '合计',
            checkout: '去结算',
          },
          news: { eyebrow: '资讯', title: '最新动态' },
          contact: { eyebrow: '联系', title: '和我们聊聊', intro: '想合作、赞助或咨询票务？给我们留言。' },
        },
        contactForm: {
          fields: { name: '姓名', email: '邮箱', message: '消息' },
          placeholders: { name: '你的姓名', email: 'you@example.com', message: '我们能如何帮助你？' },
          errors: {
            nameRequired: '请输入姓名',
            emailRequired: '请输入邮箱',
            emailInvalid: '邮箱格式不正确',
            messageRequired: '请输入消息内容',
          },
          submit: { sending: '发送中…', send: '发送消息' },
          helper: '提交将调用 onSubmit 回调，方便你接入真实接口。',
        },
        footer: {
          description: '把 AIvent 模板重构为可复用的 React 组件库。',
          columns: { event: '大会', resources: '资源' },
          rights: '保留所有权利。',
          builtWith: '基于 React + Tailwind + Storybook 构建。',
        },
        contactInfo: { locationLabel: '地址', emailLabel: '邮箱', phoneLabel: '电话' },
      }}
    >
      <HomePage
        hero={
          <HeroVideo
            posterImage={bg1}
            videoSrc={video2}
            title="AI SUMMIT 2025"
            subtitle="面向构建者的未来智能大会。"
            dateText="2025.10.1–10.5"
            locationText="旧金山"
            countdownTarget={Date.now() + 1000 * 60 * 60 * 24 * 12}
          />
        }
      />
    </AiventI18nProvider>
  ),
}

