import * as React from 'react'
import { cn } from '../../../lib/cn'
import { Badge } from '../../primitives/Badge'
import { Button } from '../../primitives/Button'
import { Container } from '../../primitives/Container'

export type HeroTextSlide = {
  kicker?: string
  title: string
  subtitle?: string
  image?: string
}

export function HeroSliderText({ slides, className }: { slides: HeroTextSlide[]; className?: string }) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => window.clearInterval(id)
  }, [slides.length])

  const s = slides[index]

  return (
    <section className={cn('relative overflow-hidden', className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1024] via-[#070a18] to-aivent-bg" />
      {s.image ? (
        <>
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${s.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-aivent-bg" />
        </>
      ) : null}

      <Container>
        <div className="relative py-20 md:py-28">
          <div className="max-w-2xl">
            <Badge>{s.kicker ?? 'A Global Gathering of AI Innovators'}</Badge>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">{s.title}</h1>
            {s.subtitle ? (
              <p className="mt-4 text-base leading-relaxed text-aivent-muted md:text-lg">{s.subtitle}</p>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="primary" size="lg">
                Get Tickets
              </Button>
              <Button variant="ghost" size="lg">
                View Schedule
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={cn(
                    'h-2 w-7 rounded-full border border-aivent-border transition',
                    i === index ? 'bg-aivent-primary' : 'bg-white/10 hover:bg-white/20'
                  )}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

