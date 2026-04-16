'use client'

import { useEffect, useRef, useState } from 'react'

interface TimelineEntry {
  period: string
  role: string
  company: string
  description?: string
  tags?: string[]
  current?: boolean
}

const ENTRIES: TimelineEntry[] = [
  {
    period: '2026 — present',
    role: 'Staff Software Engineer, Payments',
    company: 'ExpressVPN',
    description: 'Working on payments and subscription infrastructure, distributed systems, and the migration of legacy systems to custom-built solutions.',
    tags: ['Distributed Systems', 'Temporal', 'Payments'],
    current: true,
  },
  {
    period: '2024 — 2025',
    role: 'Head of Platform Engineering',
    company: 'Bitsmedia Pte Ltd',
    description: 'Architected and scaled the backend platform to serve 60M+ global users at 15M peak DAU. Led technical strategy across delivery, platform, and B2B initiatives. Reduced GCP costs by 40% and built a centralised data platform processing 100GB+/day.',
    tags: ['GCP', 'Platform Engineering', 'Leadership'],
  },
  {
    period: '2023 — 2024',
    role: 'Lead Software Engineer',
    company: 'Bitsmedia Pte Ltd',
    description: 'Re-architected the application layer from serverless Cloud Functions to 20+ microservices, adopted across 6 teams. Built an auto-scaling GKE platform and a digital wallet scaling to 100M+ daily events at 250 transactions/sec.',
    tags: ['GCP', 'Kubernetes', 'Microservices', 'Event-Driven'],
  },
  {
    period: '2021 — 2022',
    role: 'Senior Software Engineer',
    company: 'Bitsmedia Pte Ltd',
    description: 'Re-architected the purchase processing flow into an async pipeline — 80% reduction in support tickets, zero lost transactions. Introduced horizontal sharding eliminating a 200k concurrent-connection bottleneck.',
    tags: ['Pub/Sub', 'PostgreSQL', 'GCP', 'Node.js'],
  },
  {
    period: '2020 — 2021',
    role: 'Associate Technical Lead',
    company: 'Sysco Labs',
    description: 'Redesigned 10 separate Kinesis consumer applications into one, achieving 100%+ improvement in data consumption performance.',
    tags: ['AWS Kinesis', 'Java', 'Node.js'],
  },
  {
    period: '2018 — 2020',
    role: 'Senior Software Engineer',
    company: 'Sysco Labs',
    description: 'Re-architected and migrated the POS Payroll Management System to the cloud using microservices. Designed a real-time notification mechanism replacing an email-based system.',
    tags: ['Microservices', 'React', 'Redux', 'Cloud'],
  },
  {
    period: '2016 — 2018',
    role: 'Software Engineer',
    company: 'Sysco Labs',
    description: 'Feature development on the POS order module using React-Redux. Leveraged CouchDB real-time syncing for offline capabilities. Designed a data reduction mechanism achieving 40% storage gain.',
    tags: ['React', 'Redux', 'CouchDB', 'Node.js'],
  },
  {
    period: '2013 — 2016',
    role: 'B.Sc. (Eng.) in Computer Engineering',
    company: 'University of Peradeniya',
    description: 'B.Sc. (Eng.) in Computer Engineering from the University of Peradeniya, Sri Lanka.',
    tags: ['Computer Engineering'],
  },
]

function TimelineItem({
  entry,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  entry: TimelineEntry
  index: number
  hoveredIndex: number | null
  setHoveredIndex: (i: number | null) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isHovered = hoveredIndex === index
  const isDimmed  = hoveredIndex !== null && !isHovered
  const isLast    = index === ENTRIES.length - 1

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        gap: 0,
        opacity: 0,
        transform: 'translateY(16px)',
        transition: `opacity 0.45s ease ${index * 0.07}s, transform 0.45s ease ${index * 0.07}s`,
      }}
    >
      {/* Git graph column */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0,
        width: 32,
        fontFamily: 'var(--font-jetbrains-mono), monospace',
      }}>
        {/* Node */}
        <div style={{
          fontSize: 16,
          lineHeight: 1,
          color: entry.current || isHovered ? '#54B689' : 'var(--color-text-5)',
          textShadow: entry.current || isHovered ? '0 0 8px rgba(84,182,137,0.6)' : 'none',
          transition: 'color 0.2s ease, text-shadow 0.2s ease',
          marginTop: 2,
          userSelect: 'none',
        }}>
          ◆
        </div>
        {/* Connecting line */}
        {!isLast && (
          <div style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 13,
            color: isHovered ? 'rgba(84,182,137,0.5)' : 'var(--color-border)',
            lineHeight: 1.4,
            userSelect: 'none',
            transition: 'color 0.2s ease',
            letterSpacing: 0,
            marginTop: 2,
          }}>
            {Array.from({ length: isHovered ? 5 : 3 }).map((_, i) => (
              <div key={i}>│</div>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        style={{
          flex: 1,
          paddingBottom: !isLast ? (isHovered ? 8 : 0) : 0,
          paddingLeft: 12,
          opacity: isDimmed ? 0.25 : 1,
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          transformOrigin: 'left center',
          transition: 'opacity 0.2s ease, transform 0.2s ease, padding 0.2s ease',
          cursor: 'default',
        }}
      >
        {/* commit hash style period */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 3 }}>
          <span style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 10,
            color: isHovered ? 'rgba(84,182,137,0.8)' : 'var(--color-text-5)',
            letterSpacing: '0.05em',
            transition: 'color 0.2s ease',
          }}>
            {entry.period}
          </span>
          {entry.current && (
            <span style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: 8.5,
              background: 'rgba(84,182,137,0.12)',
              border: '1px solid rgba(84,182,137,0.3)',
              borderRadius: 4,
              padding: '1px 6px',
              color: '#54B689',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}>HEAD</span>
          )}
        </div>

        <h3 style={{
          fontSize: isHovered ? '0.92rem' : '0.8rem',
          fontWeight: 700,
          marginBottom: 1,
          letterSpacing: '-0.01em',
          color: isHovered ? 'var(--color-text)' : 'var(--color-text-2)',
          transition: 'all 0.2s ease',
        }}>
          {entry.role}
        </h3>

        <p style={{
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: isHovered ? 11.5 : 10.5,
          color: '#54B689',
          marginBottom: isHovered ? 10 : 0,
          transition: 'all 0.2s ease',
        }}>
          {entry.company}
        </p>

        {entry.description && (
          <p style={{
            fontSize: 12.5,
            color: 'var(--color-text-3)',
            lineHeight: 1.65,
            maxHeight: isHovered ? 200 : 0,
            overflow: 'hidden',
            opacity: isHovered ? 1 : 0,
            marginBottom: isHovered ? 10 : 0,
            transition: 'max-height 0.3s ease, opacity 0.25s ease, margin 0.25s ease',
          }}>
            {entry.description}
          </p>
        )}

        {entry.tags && (
          <div style={{
            display: 'flex', gap: 5, flexWrap: 'wrap',
            maxHeight: isHovered ? 60 : 0,
            overflow: 'hidden',
            opacity: isHovered ? 1 : 0,
            transition: 'max-height 0.3s ease, opacity 0.25s ease',
          }}>
            {entry.tags.map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: 11,
                color: 'var(--color-muted)',
                border: '1px solid var(--color-border)',
                borderRadius: 4,
                padding: '2px 7px',
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div style={{ marginTop: 40 }}>
      {ENTRIES.map((entry, i) => (
        <TimelineItem
          key={i}
          entry={entry}
          index={i}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  )
}
