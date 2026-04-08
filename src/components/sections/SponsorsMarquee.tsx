import * as React from 'react'
import { cn } from '../../lib/cn'
import { Container } from '../primitives/Container'
import { Section } from '../primitives/Section'

const DEFAULT_LOGOS = Array.from({ length: 10 }).map((_, i) =>
  new URL(`../../assets/images/logo-light/${i + 1}.webp`, import.meta.url).toString()
)

export function SponsorsMarquee({
  logos = DEFAULT_LOGOS,
  pauseOnHover = true,
  className,
}: {
  logos?: string[]
  pauseOnHover?: boolean
  className?: string
}) {
  const items = [...logos, ...logos]

  return (
    <Section className={cn('py-10', className)}>
      <Container>
        <div className="relative overflow-hidden rounded-xl2 border border-aivent-border bg-white/5 py-6">
          <div
            className={cn(
              'flex w-max items-center gap-10 px-10',
              'animate-[marquee_18s_linear_infinite]',
              pauseOnHover && 'hover:[animation-play-state:paused]'
            )}
          >
            {items.map((src, idx) => (
              <img key={idx} src={src} alt="" className="h-10 w-auto opacity-80 hover:opacity-100 transition" />
            ))}
          </div>
        </div>
      </Container>

      {/* keyframes via inline style to avoid extra css file */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
    </Section>
  )
}

