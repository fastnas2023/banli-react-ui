import * as React from 'react'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import { NewsGrid } from '../sections/news/NewsGrid'

export function NewsPage({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-aivent-bg text-aivent-text">
      <Header />
      <main>{children ?? <NewsGrid />}</main>
      <Footer />
    </div>
  )
}
