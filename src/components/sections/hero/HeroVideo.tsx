import * as React from 'react'
import { cn } from '../../../lib/cn'
import { useAiventMessages } from '../../../i18n/provider'
import { Badge } from '../../primitives/Badge'
import { Button } from '../../primitives/Button'
import { Container } from '../../primitives/Container'
import { CountdownBlock } from './CountdownBlock'

export function HeroVideo({
  videoSrc,
  posterImage,
  title,
  subtitle,
  dateText,
  locationText,
  countdownTarget,
  className,
}: {
  videoSrc?: string
  posterImage: string
  title: string
  subtitle?: string
  dateText?: string
  locationText?: string
  countdownTarget?: Date | number
  className?: string
}) {
  // 若没有 videoSrc，则退化为静态 hero，保持离线可用
  const m = useAiventMessages().hero
  if (!videoSrc) {
    return (
      <section className={cn('relative overflow-hidden', className)}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${posterImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-aivent-bg" />
        <Container>
          <div className="relative py-20 md:py-28">
            <div className="max-w-2xl">
              <Badge>{m.badge}</Badge>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                {title}
              </h1>
              {subtitle ? (
                <p className="mt-4 text-base leading-relaxed text-aivent-muted md:text-lg">
                  {subtitle}
                </p>
              ) : null}
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-aivent-muted">
                {dateText ? (
                  <span className="rounded-full bg-white/5 px-3 py-1">{dateText}</span>
                ) : null}
                {locationText ? (
                  <span className="rounded-full bg-white/5 px-3 py-1">{locationText}</span>
                ) : null}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button variant="primary" size="lg">
                  {m.primaryCta}
                </Button>
                <Button variant="ghost" size="lg">
                  {m.secondaryCta}
                </Button>
              </div>
              {countdownTarget ? (
                <div className="mt-10">
                  <CountdownBlock target={countdownTarget} />
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className={cn('relative overflow-hidden', className)}>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={posterImage}
        src={videoSrc}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-aivent-bg" />
      <Container>
        <div className="relative py-20 md:py-28">
          <div className="max-w-2xl">
            <Badge>{m.badge}</Badge>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-4 text-base leading-relaxed text-aivent-muted md:text-lg">{subtitle}</p>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-aivent-muted">
              {dateText ? <span className="rounded-full bg-white/5 px-3 py-1">{dateText}</span> : null}
              {locationText ? (
                <span className="rounded-full bg-white/5 px-3 py-1">{locationText}</span>
              ) : null}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="primary" size="lg">
                {m.primaryCta}
              </Button>
              <Button variant="ghost" size="lg">
                {m.secondaryCta}
              </Button>
            </div>

            {countdownTarget ? (
              <div className="mt-10">
                <CountdownBlock target={countdownTarget} />
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
