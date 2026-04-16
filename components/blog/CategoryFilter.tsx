'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

const CATEGORY_FILTERS = [
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
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [activeTag, setActiveTag] = useState<string | null>(null)

  // Derive unique tags from all posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    posts.forEach(p => p.tags?.forEach(t => tagSet.add(t)))
    return Array.from(tagSet).sort()
  }, [posts])

  const filtered = posts.filter(p => {
    const categoryMatch = activeCategory === 'all' || p.category === activeCategory
    const tagMatch = activeTag === null || p.tags?.includes(activeTag)
    return categoryMatch && tagMatch
  })

  const handleCategoryClick = (key: string) => {
    setActiveCategory(key)
  }

  const handleTagClick = (tag: string) => {
    setActiveTag(prev => prev === tag ? null : tag)
  }

  return (
    <div>
      {/* Category chips */}
      <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 10 }}>
        {CATEGORY_FILTERS.map(({ key, label }) => {
          const isActive = activeCategory === key
          return (
            <button
              key={key}
              onClick={() => handleCategoryClick(key)}
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

      {/* Tag chips */}
      {allTags.length > 0 && (
        <div className="blog-tag-row" style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 28 }}>
          {allTags.map(tag => {
            const isActive = activeTag === tag
            return (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                style={{
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  fontSize: 12,
                  padding: '3px 10px',
                  borderRadius: 4,
                  cursor: 'pointer',
                  border: `1px solid ${isActive ? 'rgba(84,182,137,0.45)' : 'var(--color-border)'}`,
                  color: isActive ? '#54B689' : 'var(--color-text-5)',
                  background: isActive ? 'rgba(84,182,137,0.07)' : 'transparent',
                  transition: 'all 0.15s',
                }}
              >
                #{tag}
              </button>
            )
          })}
        </div>
      )}

      {/* Column headers — desktop only */}
      <div
        className="blog-listing-grid blog-listing-header"
        style={{
          gap: '0 16px',
          padding: '0 6px 10px',
          borderBottom: '1px solid var(--color-border)',
          marginBottom: 2,
        }}
      >
        <span className="col-category" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 10, color: 'var(--color-text-5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          category
        </span>
        <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 10, color: 'var(--color-text-5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          title
        </span>
        <span className="col-read" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 10, color: 'var(--color-text-5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          read
        </span>
        <span className="col-date" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 10, color: 'var(--color-text-5)', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'right' }}>
          published
        </span>
      </div>

      {/* Post rows */}
      {filtered.length > 0 ? filtered.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="blog-listing-grid blog-listing-row"
          style={{
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
            const el = e.currentTarget as HTMLElement
            el.style.background = 'var(--color-surface)'
            const title = el.querySelector('[data-title]') as HTMLElement
            if (title) title.style.color = '#54B689'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.background = 'transparent'
            const title = el.querySelector('[data-title]') as HTMLElement
            if (title) title.style.color = 'var(--color-text-2)'
          }}
        >
          <span className="col-category" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 12, color: '#54B689', whiteSpace: 'nowrap' }}>
            {post.category}/
          </span>
          <span
            data-title=""
            className="col-title"
            style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 14, color: 'var(--color-text-2)', transition: 'color 0.15s', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
          >
            {post.slug}
          </span>
          <span className="col-read" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 12, color: 'var(--color-muted)' }}>
            {post.readingTime}
          </span>
          <span className="col-date" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 12, color: 'var(--color-muted)', textAlign: 'right' }}>
            {formatDate(post.publishedAt)}
          </span>
        </Link>
      )) : (
        <p style={{ padding: '24px 6px', fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 12, color: 'var(--color-text-5)' }}>
          no posts found
        </p>
      )}

      {/* Footer */}
      <p style={{ padding: '16px 6px 0', fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 12, color: 'var(--color-text-5)' }}>
        <span style={{ color: 'rgba(84,182,137,0.75)' }}>{filtered.length}</span>
        {' '}posts
        {activeCategory === 'all' && !activeTag && (
          <>
            {' '}·{' '}
            <span style={{ color: 'rgba(84,182,137,0.75)' }}>
              {posts.reduce((sum, p) => sum + parseInt(p.readingTime), 0)}
            </span>
            {' '}min total
          </>
        )}
        {activeTag && (
          <>
            {' '}tagged{' '}
            <span style={{ color: 'rgba(84,182,137,0.75)' }}>#{activeTag}</span>
          </>
        )}
      </p>
    </div>
  )
}
