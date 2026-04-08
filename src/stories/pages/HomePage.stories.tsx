import type { Meta, StoryObj } from '@storybook/react'
import { HomePage } from '../../components/pages/HomePage'
import { HeroSlider } from '../../components/sections/hero/HeroSlider'
import { HeroSliderText } from '../../components/sections/hero/HeroSliderText'
import { HeroStatic } from '../../components/sections/hero/HeroStatic'
import { HeroVideo } from '../../components/sections/hero/HeroVideo'

const meta: Meta<typeof HomePage> = {
  title: 'Pages/Home',
  component: HomePage,
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof HomePage>

// 演示用静态资源（背景图/视频），用于 Storybook 预览
const bg1 = new URL('../../assets/images/background/1.webp', import.meta.url).toString()
const bg2 = new URL('../../assets/images/background/2.webp', import.meta.url).toString()
const bg3 = new URL('../../assets/images/background/3.webp', import.meta.url).toString()
const bg4 = new URL('../../assets/images/background/4.webp', import.meta.url).toString()
const bg5 = new URL('../../assets/images/background/5.webp', import.meta.url).toString()
const video2 = new URL('../../assets/video/2.mp4', import.meta.url).toString()

export const Main_VideoBackground: Story = {
  render: () => (
    <HomePage
      hero={
        <HeroVideo
          posterImage={bg1}
          videoSrc={video2}
          title="BANLI UI"
          subtitle="A React UI component library demo (Storybook)."
          dateText="WWW.CN111.NET"
          locationText="Jason Zhang"
          countdownTarget={Date.now() + 1000 * 60 * 60 * 24 * 12}
        />
      }
    />
  ),
}

export const SliderBackground: Story = {
  render: () => (
    <HomePage
      hero={
        <HeroSlider
          slides={[
            { image: bg2, title: 'Design system foundations', subtitle: 'Tokens, spacing, and composition.' },
            { image: bg4, title: 'Component primitives', subtitle: 'Button, Dialog, Drawer, Toast, and more.' },
            { image: bg5, title: 'Patterns & pages', subtitle: 'Hero, sections, and page compositions.' },
          ]}
        />
      }
    />
  ),
}

export const StaticBackground: Story = {
  render: () => (
    <HomePage
      hero={
        <HeroStatic
          backgroundImage={bg3}
          title="BANLI UI"
          subtitle="Reusable components, pages, and motion presets."
          dateText="WWW.CN111.NET"
          locationText="Jason Zhang"
        />
      }
    />
  ),
}

export const SliderText: Story = {
  render: () => (
    <HomePage
      hero={
        <HeroSliderText
          slides={[
            { title: 'Build fast. Ship clean.', subtitle: 'Composable primitives for product teams.', image: bg4 },
            { title: 'Motion you can control', subtitle: 'Global motion modes that respect reduced-motion.', image: bg2 },
            { title: 'Storybook-first', subtitle: 'Document, test, and iterate with confidence.', image: bg5 },
          ]}
        />
      }
    />
  ),
}

export const VideoBackground_Countdown: Story = {
  render: () => (
    <HomePage
      hero={
        <HeroVideo
          posterImage={bg4}
          videoSrc={video2}
          title="BANLI UI"
          subtitle="Polished components for real products."
          dateText="WWW.CN111.NET"
          locationText="Jason Zhang"
          countdownTarget={Date.now() + 1000 * 60 * 60 * 24 * 3}
        />
      }
    />
  ),
}
