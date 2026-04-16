'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

const FILTERS = [
  { key: 'all', label: 'all' },
  { key: 'devops', label: 'devops' },
  { key: 'databases', label: 'databases' },
  { key: 'web-dev', label: 'web-dev' },
  { key: 'javascript', label: 'javascript' },
]

interface Props {
  posts: PostMeta[]
  initialCategory?: string
}

export default function CategoryFilter({ posts, initialCategory = 'all' }: Props) {
  const [active, setActive] = useState(initialCategory)

  const filtered = active === 'all' ? posts : posts.filter(p => p.category === active)

  return (
    <div>
      {/* Filter chips */}
      <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 32 }}>
        {FILTERS.map(({ key, label }) => {
          const isActive = active === key
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              style={{
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: 12,
                padding: '5px 13px',
                borderRadius: 5,
                cursor: 'pointer',
                border: `1px solid ${isActive ? 'rgba(84,182,137,0.45)' : 'var(--color-border)'}`,
                color: isActive ? '#54B689' : 'var(--color-muted)',
                background: isActive ? 'rgba(84,182,137,0.07)' : 'transparent',
                transition: 'all 0.15s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <span style={{ color: isActive ? 'rgba(84,182,137,0.55)' : 'var(--color-text-5)' }}>--</span>
              {label}
            </button>
          )
        })}
      </div>

      {/* Column headers */}
      <div
        className="blog-listing-header"
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr 70px 80px',
          gap: '0 16px',
          padding: '0 6px 10px',
          borderBottom: '1px solid var(--color-border)',
          marginBottom: 2,
        }}
      >
        {['category', 'title', 'read', 'published'].map((h, i) => (
          <span
            key={h}
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: 10,
              color: 'var(--color-text-5)',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.1em',
              textAlign: i === 3 ? 'right' as const : 'left' as const,
            }}
          >
            {h}
          </span>
        ))}
      </div>

      {/* Post rows */}
      {filtered.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="blog-listing-row"
          style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr 70px 80px',
            gap: '0 16px',
            padding: '10px 6px',
            borderBottom: '1px solid var(--color-border)',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'inherit',
            alignItems: 'baseline',
            borderRadius: 4,
            transition: 'background 0.12s',
          }}
          onMouseEnter={e => {
            ;(e.currentTarget as HTMLElement).style.background = 'var(--color-surface)'
            const title = (e.currentTarget as HTMLElement).querySelector('[data-title]') as HTMLElement
            if (title) title.style.color = '#54B689'
          }}
          onMouseLeave={e => {
            ;(e.currentTarget as HTMLElement).style.background = 'transparent'
            const title = (e.currentTarget as HTMLElement).querySelector('[data-title]') as HTMLElement
            if (title) title.style.color = 'var(--color-text-2)'
          }}
        >
          <span className="col-category" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 12.5, color: 'rgba(84,182,137,0.65)', whiteSpace: 'nowrap' as const }}>
            {post.category}/
          </span>
          <span
            data-title=""
            className="col-title"
            style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 14, color: 'var(--color-text-2)', transition: 'color 0.15s' }}
          >
            {post.slug}
          </span>
          <span className="col-read" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 12, color: 'var(--color-muted)' }}>
            {post.readingTime}
          </span>
          <span className="col-date" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 12, color: 'var(--color-muted)', textAlign: 'right' as const }}>
            {formatDate(post.publishedAt)}
          </span>
        </Link>
      ))}

      {/* Footer */}
      <p style={{ padding: '16px 6px 0', fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11.5, color: 'var(--color-text-5)' }}>
        <span style={{ color: 'rgba(84,182,137,0.5)' }}>{filtered.length}</span>
        {' '}posts
        {active === 'all' && (
          <>
            {' '}·{' '}
            <span style={{ color: 'rgba(84,182,137,0.5)' }}>
              {posts.reduce((sum, p) => sum + parseInt(p.readingTime), 0)}
            </span>
            {' '}min total
          </>
        )}
      </p>
    </div>
  )
}
