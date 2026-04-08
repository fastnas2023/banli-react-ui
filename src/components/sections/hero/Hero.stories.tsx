import type { Meta, StoryObj } from '@storybook/react'
import { HeroSlider } from './HeroSlider'
import { HeroSliderText } from './HeroSliderText'
import { HeroStatic } from './HeroStatic'
import { HeroVideo } from './HeroVideo'

const bg1 = new URL('../../../assets/images/demo/homepage-1.webp', import.meta.url).toString()
const bg2 = new URL('../../../assets/images/demo/homepage-2.webp', import.meta.url).toString()
const bg3 = new URL('../../../assets/images/demo/homepage-3.webp', import.meta.url).toString()
const bg4 = new URL('../../../assets/images/demo/homepage-4.webp', import.meta.url).toString()
const bg5 = new URL('../../../assets/images/demo/homepage-5.webp', import.meta.url).toString()
const video2 = new URL('../../../assets/video/2.mp4', import.meta.url).toString()

const meta: Meta = { title: 'Sections/Hero' }
export default meta
type Story = StoryObj

export const StaticBackground: Story = {
  render: () => (
    <HeroStatic
      backgroundImage={bg3}
      title="AI SUMMIT 2025"
      subtitle="Join thought leaders, developers, researchers, and founders as we explore how AI is reshaping industries."
      dateText="October 1–5, 2025"
      locationText="San Francisco, CA"
    />
  ),
}

export const VideoBackground: Story = {
  render: () => (
    <HeroVideo
      posterImage={bg1}
      videoSrc={video2}
      title="AI SUMMIT 2025"
      subtitle="The future of intelligence — built for builders."
      dateText="October 1–5, 2025"
      locationText="San Francisco, CA"
      countdownTarget={Date.now() + 1000 * 60 * 60 * 24 * 12}
    />
  ),
}

export const SliderBackground: Story = {
  render: () => (
    <HeroSlider
      slides={[
        { image: bg2, title: 'Pioneering breakthroughs in AI', subtitle: 'Robotics and digital human evolution.' },
        { image: bg4, title: 'Unleashing human potential', subtitle: 'Hands-on workshops with world-class speakers.' },
        { image: bg5, title: 'The future intelligent', subtitle: 'Ethics, policy, and what comes next.' },
      ]}
    />
  ),
}

export const SliderText: Story = {
  render: () => (
    <HeroSliderText
      slides={[
        { title: 'Innovate. Integrate. Inspire.', subtitle: 'A 5-day gathering for AI builders and leaders.', image: bg4 },
        { title: 'Design human-centered AI', subtitle: 'From UX to ethics, build products that matter.', image: bg2 },
        { title: 'Beyond text: multimodal AI', subtitle: 'Image, video, and 3D generation—what’s next?', image: bg5 },
      ]}
    />
  ),
}

export const VideoBackgroundWithCountdown: Story = {
  render: () => (
    <HeroVideo
      posterImage={bg4}
      videoSrc={video2}
      title="Innovate. Integrate. Inspire."
      subtitle="Get ready for 5 days of keynotes, labs, and networking."
      dateText="October 1–5, 2025"
      locationText="San Francisco, CA"
      countdownTarget={Date.now() + 1000 * 60 * 60 * 24 * 3}
    />
  ),
}
