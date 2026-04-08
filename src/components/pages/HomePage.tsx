import * as React from 'react'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import { ScheduleTabs } from '../sections/ScheduleTabs'
import { SpeakersGrid } from '../sections/SpeakersGrid'
import { SponsorsMarquee } from '../sections/SponsorsMarquee'
import { WhyAttendGrid } from '../sections/WhyAttendGrid'

export function HomePage({
  hero,
  children,
}: {
  hero?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-aivent-bg text-aivent-text">
      <Header />
      <main>
        {hero}
        {children ?? (
          <>
            <WhyAttendGrid />
            <SpeakersGrid />
            <SponsorsMarquee />
            <ScheduleTabs />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
