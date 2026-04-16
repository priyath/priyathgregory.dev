import type { Metadata } from 'next'
import Timeline from '@/components/about/Timeline'

export const metadata: Metadata = {
  title: 'About',
  description: 'Software engineer with 10+ years in distributed systems, platform engineering, and cloud infrastructure.',
}

const WHOAMI = [
  { key: 'name',       value: 'Priyath Gregory' },
  { key: 'role',       value: 'Staff Software Engineer @ ExpressVPN' },
  { key: 'location',   value: 'Singapore' },
  { key: 'experience', value: '10+ years in software engineering' },
  { key: 'focus',      value: 'Distributed Systems · Platform Engineering · Cloud Infrastructure' },
]

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>

      {/* whoami block */}
      <div style={{ padding: '64px 0 0' }}>
        <p style={{
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: 12,
          color: '#54B689',
          marginBottom: 16,
        }}>
          $ whoami
        </p>
        <div style={{
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: 13,
          paddingLeft: 16,
          borderLeft: '2px solid rgba(84,182,137,0.25)',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          columnGap: 20,
          rowGap: 6,
          alignItems: 'baseline',
        }}>
          {WHOAMI.map(({ key, value }) => (
            <>
              <span key={`k-${key}`} style={{ color: 'var(--color-text-5)', whiteSpace: 'nowrap' }}>{key}</span>
              <span key={`v-${key}`} style={{ color: 'var(--color-text-2)' }}>{value}</span>
            </>
          ))}
        </div>
      </div>

      {/* Career timeline */}
      <section style={{ paddingBottom: 96, marginTop: 64 }}>
        <p style={{
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: 12,
          color: '#54B689',
          marginBottom: 0,
        }}>
          $ career --log
        </p>
        <Timeline />
      </section>

    </main>
  )
}
