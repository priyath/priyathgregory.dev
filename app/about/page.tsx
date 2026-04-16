import type { Metadata } from 'next'
import Timeline from '@/components/about/Timeline'

export const metadata: Metadata = {
  title: 'About',
  description: 'Software engineer with 10+ years in distributed systems, platform engineering, and cloud infrastructure.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="page-top-block" style={{ maxWidth: 820, margin: '0 auto', padding: '60px 24px 32px' }}>
        <p style={{
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: 10,
          color: '#54B689',
          letterSpacing: '0.13em',
          textTransform: 'uppercase',
          marginBottom: 6,
        }}>
          // the journey so far
        </p>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 10 }}>
          About
        </h1>
        <p style={{ fontSize: 15, color: 'var(--color-muted)', lineHeight: 1.65, maxWidth: 440, margin: 0 }}>
          10+ years building distributed systems, platform infrastructure, and scalable backend architecture.
        </p>
      </section>

      {/* Career timeline */}
      <section className="page-section" style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px 96px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.015em', marginBottom: 0 }}>
          Career
        </h2>
        <Timeline />
      </section>
    </>
  )
}
