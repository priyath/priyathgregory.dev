'use client'

import { useEffect, useRef, useState } from 'react'

interface Role {
  period: string
  role: string
  description?: string
  tags?: string[]
}

interface CompanyEntry {
  period: string
  company: string
  roles: Role[]
  current?: boolean
}

const ENTRIES: CompanyEntry[] = [
  {
    period: '2026 — present',
    company: 'ExpressVPN',
    current: true,
    roles: [
      {
        period: '2026 — present',
        role: 'Staff Software Engineer, Payments',
        description: 'Working on payments and subscription infrastructure, distributed systems, and the migration of legacy systems to custom-built solutions.',
        tags: ['Distributed Systems', 'Temporal', 'Payments'],
      },
    ],
  },
  {
    period: '2021 — 2025',
    company: 'Bitsmedia Pte Ltd',
    roles: [
      {
        period: '2024 — 2025',
        role: 'Head of Platform Engineering',
        description: 'Architected and scaled the backend platform to serve 60M+ global users at 15M peak DAU. Led technical strategy across delivery, platform, and B2B initiatives. Reduced GCP costs by 40% and built a centralised data platform processing 100GB+/day.',
        tags: ['GCP', 'Platform Engineering', 'Leadership'],
      },
      {
        period: '2023 — 2024',
        role: 'Lead Software Engineer',
        description: 'Re-architected the application layer from serverless Cloud Functions to 20+ microservices, adopted across 6 teams. Built an auto-scaling GKE platform and a digital wallet scaling to 100M+ daily events at 250 transactions/sec.',
        tags: ['GCP', 'Kubernetes', 'Microservices', 'Event-Driven'],
      },
      {
        period: '2021 — 2022',
        role: 'Senior Software Engineer',
        description: 'Re-architected the purchase processing flow into an async pipeline — 80% reduction in support tickets, zero lost transactions. Introduced horizontal sharding eliminating a 200k concurrent-connection bottleneck.',
        tags: ['Pub/Sub', 'PostgreSQL', 'GCP', 'Node.js'],
      },
    ],
  },
  {
    period: '2016 — 2021',
    company: 'Sysco Labs',
    roles: [
      {
        period: '2020 — 2021',
        role: 'Associate Technical Lead',
        description: 'Redesigned 10 separate Kinesis consumer applications into one, achieving 100%+ improvement in data consumption performance.',
        tags: ['AWS Kinesis', 'Java', 'Node.js'],
      },
      {
        period: '2018 — 2020',
        role: 'Senior Software Engineer',
        description: 'Re-architected and migrated the POS Payroll Management System to the cloud using microservices. Designed a real-time notification mechanism replacing an email-based system.',
        tags: ['Microservices', 'React', 'Redux', 'Cloud'],
      },
      {
        period: '2016 — 2018',
        role: 'Software Engineer',
        description: 'Feature development on the POS order module using React-Redux. Leveraged CouchDB real-time syncing for offline capabilities. Designed a data reduction mechanism achieving 40% storage gain.',
        tags: ['React', 'Redux', 'CouchDB', 'Node.js'],
      },
    ],
  },
  {
    period: '2013 — 2016',
    company: 'University of Peradeniya',
    roles: [
      {
        period: '2013 — 2016',
        role: 'B.Sc. (Eng.) in Computer Engineering',
        tags: ['Computer Engineering'],
      },
    ],
  },
]

function RoleItem({
  role,
  isLast,
  isHovered,
  isDimmed,
  onMouseEnter,
  onMouseLeave,
}: {
  role: Role
  isLast: boolean
  isHovered: boolean
  isDimmed: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        display: 'flex',
        gap: 0,
        paddingLeft: 0,
      }}
    >
      {/* Sub-branch */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0,
        width: 32,
        fontFamily: 'var(--font-jetbrains-mono), monospace',
        fontSize: 13,
        color: isHovered ? 'rgba(84,182,137,0.5)' : 'var(--color-border)',
        transition: 'color 0.2s ease',
        userSelect: 'none',
        lineHeight: 1.4,
      }}>
        {!isLast ? (
          <>
            <div>├</div>
            <div style={{ flex: 1, borderLeft: '1px solid currentColor', marginTop: 2 }} />
          </>
        ) : (
          <div>└</div>
        )}
      </div>

      {/* Role content */}
      <div
        style={{
          flex: 1,
          paddingLeft: 12,
          paddingBottom: 10,
          cursor: 'default',
          opacity: isDimmed ? 0.2 : 1,
          transform: isHovered ? 'scale(1.02)' : isDimmed ? 'scale(0.98)' : 'scale(1)',
          transformOrigin: 'left top',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 2 }}>
          <span style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 10,
            color: isHovered ? 'rgba(84,182,137,0.8)' : 'var(--color-text-5)',
            letterSpacing: '0.05em',
            transition: 'color 0.2s ease',
            whiteSpace: 'nowrap',
          }}>
            {role.period}
          </span>
        </div>
        <p style={{
          fontSize: isHovered ? '0.78rem' : '0.73rem',
          fontWeight: 500,
          color: isHovered ? 'var(--color-text-2)' : 'var(--color-muted)',
          marginBottom: 0,
          transition: 'all 0.2s ease',
          letterSpacing: '-0.01em',
        }}>
          {role.role}
        </p>

        {role.description && (
          <p style={{
            fontSize: 12,
            color: 'var(--color-text-3)',
            lineHeight: 1.65,
            maxHeight: isHovered ? 200 : 0,
            overflow: 'hidden',
            opacity: isHovered ? 1 : 0,
            marginTop: isHovered ? 6 : 0,
            marginBottom: isHovered ? 6 : 0,
            transition: 'max-height 0.3s ease, opacity 0.25s ease, margin 0.25s ease',
          }}>
            {role.description}
          </p>
        )}

        {role.tags && (
          <div style={{
            display: 'flex', gap: 5, flexWrap: 'wrap',
            maxHeight: isHovered ? 60 : 0,
            overflow: 'hidden',
            opacity: isHovered ? 1 : 0,
            transition: 'max-height 0.3s ease, opacity 0.25s ease',
          }}>
            {role.tags.map(tag => (
              <span key={tag} style={{
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: 10.5,
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

function CompanyItem({
  entry,
  index,
  hoveredIndex,
  onEnter,
  onLeave,
  expanded,
}: {
  entry: CompanyEntry
  index: number
  hoveredIndex: number | null
  onEnter: () => void
  onLeave: () => void
  expanded: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isHovered = hoveredIndex === index
  const isDimmed  = hoveredIndex !== null && !isHovered
  const isLast    = index === ENTRIES.length - 1
  const [hoveredRole, setHoveredRole] = useState<number | null>(null)
  const roleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleRoleEnter = (i: number) => {
    if (roleTimerRef.current) clearTimeout(roleTimerRef.current)
    roleTimerRef.current = setTimeout(() => setHoveredRole(i), 100)
  }

  const handleRoleLeave = () => {
    if (roleTimerRef.current) clearTimeout(roleTimerRef.current)
    setHoveredRole(null)
  }

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
        transition: `opacity 0.45s ease ${index * 0.1}s, transform 0.45s ease ${index * 0.1}s`,
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
            flex: 1,
            width: 1,
            background: isHovered ? 'rgba(84,182,137,0.3)' : 'var(--color-border)',
            transition: 'background 0.2s ease',
            marginTop: 4,
            minHeight: 16,
          }} />
        )}
      </div>

      {/* Content */}
      <div
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{
          flex: 1,
          paddingBottom: !isLast ? 4 : 0,
          paddingLeft: 12,
          opacity: isDimmed ? 0.2 : 1,
          transform: isHovered ? 'scale(1.02)' : isDimmed ? 'scale(0.98)' : 'scale(1)',
          transformOrigin: 'left top',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        {/* Company header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            paddingBottom: isHovered ? 10 : 6,
            cursor: 'default',
            transition: 'padding 0.2s ease',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 10,
            color: isHovered ? 'rgba(84,182,137,0.8)' : 'var(--color-text-5)',
            letterSpacing: '0.05em',
            transition: 'color 0.2s ease',
            whiteSpace: 'nowrap',
          }}>
            {entry.period}
          </span>

          <h3 style={{
            fontSize: isHovered ? '0.92rem' : '0.85rem',
            fontWeight: 700,
            color: isHovered ? '#54B689' : 'var(--color-text-2)',
            letterSpacing: '-0.01em',
            transition: 'all 0.2s ease',
            margin: 0,
          }}>
            {entry.company}
          </h3>

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

        {/* Roles — always open for current, expand on hover or when globally expanded */}
        <div style={{
          maxHeight: (isHovered || expanded || entry.current) ? entry.roles.length * 300 : 0,
          overflow: 'hidden',
          opacity: (isHovered || expanded || entry.current) ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.3s ease',
        }}>
          {entry.roles.map((role, i) => (
            <RoleItem
              key={role.role}
              role={role}
              isLast={i === entry.roles.length - 1}
              isHovered={hoveredRole === i}
              isDimmed={hoveredRole !== null && hoveredRole !== i}
              onMouseEnter={() => handleRoleEnter(i)}
              onMouseLeave={handleRoleLeave}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expanded, setExpanded] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleEnter = (i: number) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setHoveredIndex(i), 120)
  }

  const handleLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setHoveredIndex(null)
  }

  return (
    <div style={{ marginTop: 16 }}>
      {/* Toggle button */}
      <div style={{ marginBottom: 16 }}>
        <button
          onClick={() => setExpanded(v => !v)}
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 11,
            color: expanded ? '#54B689' : 'var(--color-muted)',
            background: expanded ? 'rgba(84,182,137,0.08)' : 'transparent',
            border: '1px solid',
            borderColor: expanded ? 'rgba(84,182,137,0.35)' : 'var(--color-border)',
            borderRadius: 4,
            padding: '3px 10px',
            cursor: 'pointer',
            letterSpacing: '0.04em',
            transition: 'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
          }}
        >
          {expanded ? '▼ --expanded' : '▶ --collapsed'}
        </button>
      </div>

      {ENTRIES.map((entry, i) => (
        <CompanyItem
          key={entry.company}
          entry={entry}
          index={i}
          hoveredIndex={hoveredIndex}
          onEnter={() => handleEnter(i)}
          onLeave={handleLeave}
          expanded={expanded}
        />
      ))}
    </div>
  )
}
