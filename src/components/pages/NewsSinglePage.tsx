import * as React from 'react'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import { NewsArticle } from '../sections/news/NewsArticle'

const cover = new URL('../../assets/images/misc/sd1.webp', import.meta.url).toString()

export function NewsSinglePage({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-aivent-bg text-aivent-text">
      <Header />
      <main>
        {children ?? (
          <NewsArticle
            title="Opening Keynote – The State of AI 2025"
            date="May 28, 2025"
            cover={cover}
            content={
              <>
                <p>
                  Kick off the event with an overview of where artificial intelligence is headed — from frontier model
                  capabilities to real-world constraints.
                </p>
                <p>
                  We’ll cover breakthroughs, global shifts, and what’s next in deep learning, generative models, and AI
                  ethics.
                </p>
                <blockquote className="rounded-xl2 border border-aivent-border bg-white/5 p-4 text-white">
                  “AI is advancing rapidly, and while it offers immense opportunity, it also poses significant risks.”
                </blockquote>
                <p>
                  Join workshops and labs to build practical skills — and connect with researchers, founders, and
                  engineers shaping the future.
                </p>
              </>
            }
          />
        )}
      </main>
      <Footer />
    </div>
  )
}
