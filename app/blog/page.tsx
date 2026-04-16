import { getAllPosts } from '@/lib/posts'
import CategoryFilter from '@/components/blog/CategoryFilter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Deep dives on cloud infrastructure, distributed systems, backend architecture, and the web.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      {/* Header */}
      <section className="page-top-block" style={{ maxWidth: 820, margin: '0 auto', padding: '60px 24px 32px' }}>
        <p style={{
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: 10,
          color: '#54B689',
          letterSpacing: '0.13em',
          textTransform: 'uppercase',
          marginBottom: 6,
        }}>
          // notes from the field
        </p>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 10 }}>
          Writing
        </h1>
        <p style={{ fontSize: 14, color: 'var(--color-muted)', lineHeight: 1.65, maxWidth: 440, margin: 0 }}>
          Deep dives on cloud infrastructure, distributed systems, backend architecture, and the web.
        </p>
      </section>

      {/* Listing */}
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px 96px' }}>
        <CategoryFilter posts={posts} />
      </section>
    </>
  )
}
