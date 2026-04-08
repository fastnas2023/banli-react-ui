import * as React from 'react'
import { cn } from '../../lib/cn'
import { Container } from '../primitives/Container'
import { Section } from '../primitives/Section'

export type ScheduleSlot = {
  time: string
  title: string
  speaker?: string
  description?: string
}

export type ScheduleDay = {
  label: string
  date: string
  slots: ScheduleSlot[]
}

const DEFAULT_DAYS: ScheduleDay[] = [
  {
    label: 'Day 1',
    date: 'Oct 1, 2025',
    slots: [
      {
        time: '08:00 – 10:00',
        title: 'Opening Keynote – The State of AI 2025',
        speaker: 'Joshua Henry',
        description: 'Breakthroughs, global shifts, and what’s next in deep learning and AI ethics.',
      },
      {
        time: '12:00 – 14:00',
        title: 'Building Human-Centered AI Products',
        speaker: 'Leila Zhang',
      },
    ],
  },
  {
    label: 'Day 2',
    date: 'Oct 2, 2025',
    slots: [
      { time: '09:00 – 10:30', title: 'Ethical AI — From Theory to Practice', speaker: 'Leila Zhang' },
      { time: '11:00 – 12:30', title: 'Bias in Data — Hidden Dangers', speaker: 'Lisa Zhang' },
    ],
  },
]

export function ScheduleTabs({ days = DEFAULT_DAYS }: { days?: ScheduleDay[] }) {
  const [active, setActive] = React.useState(0)
  const day = days[active]

  return (
    <Section>
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-aivent-secondary">Schedule</div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              5 Days of AI excellence
            </h2>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {days.map((d, i) => (
            <button
              key={d.label}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-semibold transition',
                i === active
                  ? 'border-aivent-primary bg-aivent-primary/20 text-white'
                  : 'border-aivent-border bg-white/5 text-aivent-muted hover:bg-white/10 hover:text-white'
              )}
              onClick={() => setActive(i)}
            >
              {d.label} <span className="ml-2 opacity-70">{d.date}</span>
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-xl2 border border-aivent-border bg-white/5 p-6">
          <div className="text-sm font-bold text-white">{day.label}</div>
          <div className="mt-1 text-sm text-aivent-muted">{day.date}</div>

          <div className="mt-6 space-y-4">
            {day.slots.map((s) => (
              <div key={s.time + s.title} className="rounded-xl border border-aivent-border bg-black/20 p-4">
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <div className="text-sm font-semibold text-aivent-secondary">{s.time}</div>
                  {s.speaker ? <div className="text-sm text-aivent-muted">{s.speaker}</div> : null}
                </div>
                <div className="mt-2 text-base font-bold text-white">{s.title}</div>
                {s.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-aivent-muted">{s.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

