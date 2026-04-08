import * as React from 'react'
import { useAiventMessages } from '../../i18n/provider'
import { Container } from '../primitives/Container'
import { Section } from '../primitives/Section'

export type Speaker = {
  name: string
  title: string
  avatar: string
}

const DEFAULT_SPEAKERS: Speaker[] = [
  {
    name: 'Joshua Henry',
    title: 'Chief AI Scientist',
    avatar: new URL('../../assets/images/team/1.webp', import.meta.url).toString(),
  },
  {
    name: 'Leila Zhang',
    title: 'VP of Machine Learning',
    avatar: new URL('../../assets/images/team/2.webp', import.meta.url).toString(),
  },
  {
    name: 'Carlos Rivera',
    title: 'Founder & CEO',
    avatar: new URL('../../assets/images/team/3.webp', import.meta.url).toString(),
  },
]

export function SpeakersGrid({ speakers = DEFAULT_SPEAKERS }: { speakers?: Speaker[] }) {
  const m = useAiventMessages().sections.speakers
  return (
    <Section className="pt-0">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-aivent-secondary">{m.eyebrow}</div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              {m.title}
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {speakers.map((s) => (
            <div key={s.name} className="group overflow-hidden rounded-xl2 border border-aivent-border bg-white/5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.avatar}
                  alt={s.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-lg font-bold text-white">{s.name}</div>
                <div className="mt-1 text-sm text-aivent-muted">{s.title}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
