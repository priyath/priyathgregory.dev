import Link from 'next/link'
import { getAllPosts, formatDate } from '@/lib/posts'

export default async function RecentPosts() {
  const allPosts = await getAllPosts()
  const recent = allPosts.slice(0, 3)
  const total = allPosts.length

  return (
    <section className="page-section" style={{ maxWidth: 880, margin: '0 auto', padding: '52px 24px 96px' }}>
      {/* Section heading */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}
      >
        <div>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              margin: 0,
            }}
          >
            Recent Posts
          </h2>
        </div>
        <Link
          href="/blog"
          className="view-all-link"
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 12,
            color: '#54B689',
            textDecoration: 'none',
            transition: 'color 0.15s',
          }}
        >
          view all →
        </Link>
      </div>

      {/* Post rows */}
      {recent.map((post, i) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="home-post-row"
          style={{
            gap: '0 14px',
            padding: '9px 6px',
            borderBottom: i < recent.length - 1 ? '1px solid var(--color-border)' : 'none',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'inherit',
            borderRadius: 4,
          }}
        >
          <span
            className="home-post-category"
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: 12,
              color: '#54B689',
              whiteSpace: 'nowrap',
            }}
          >
            {post.category}/
          </span>
          <span
            className="home-post-title"
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: 13,
              color: 'var(--color-text-2)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              transition: 'color 0.15s',
            }}
          >
            {post.slug}
          </span>
          <span
            className="home-post-date"
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: 12,
              color: 'var(--color-muted)',
              textAlign: 'right',
            }}
          >
            {formatDate(post.publishedAt)}
          </span>
        </Link>
      ))}

      {/* Footer */}
      <div style={{ padding: '14px 6px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 12,
            color: 'var(--color-text-5)',
          }}
        >
          {recent.length} of {total} posts
        </span>
      </div>
    </section>
  )
}
