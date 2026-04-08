import * as React from 'react'
import { cn } from '../../../lib/cn'
import { Badge } from '../../primitives/Badge'
import { Button } from '../../primitives/Button'
import { Container } from '../../primitives/Container'

export type HeroSlide = {
  image: string
  title: string
  subtitle?: string
}

export function HeroSlider({
  slides,
  className,
}: {
  slides: HeroSlide[]
  className?: string
}) {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null)
  const [index, setIndex] = React.useState(0)

  const scrollTo = (i: number) => {
    const el = scrollerRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(slides.length - 1, i))
    const child = el.children.item(clamped) as HTMLElement | null
    child?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    setIndex(clamped)
  }

  return (
    <section className={cn('relative overflow-hidden', className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-aivent-bg" />

      <div
        ref={scrollerRef}
        className="relative flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((s, i) => (
          <div key={i} className="relative h-[540px] w-full flex-none snap-start md:h-[620px]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-aivent-bg" />

            <Container>
              <div className="relative flex h-full items-center py-16">
                <div className="max-w-2xl">
                  <Badge>AI Summit</Badge>
                  <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                    {s.title}
                  </h1>
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
                </div>
              </div>
            </Container>
          </div>
        ))}
      </div>

      <Container>
        <div className="relative -mt-14 flex items-center justify-between gap-3 pb-10">
          <div className="flex items-center gap-2">
            <button
              className="h-10 w-10 rounded-lg border border-aivent-border bg-white/5 hover:bg-white/10"
              onClick={() => scrollTo(index - 1)}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              className="h-10 w-10 rounded-lg border border-aivent-border bg-white/5 hover:bg-white/10"
              onClick={() => scrollTo(index + 1)}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                className={cn(
                  'h-2 w-7 rounded-full border border-aivent-border transition',
                  i === index ? 'bg-aivent-primary' : 'bg-white/10 hover:bg-white/20'
                )}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

