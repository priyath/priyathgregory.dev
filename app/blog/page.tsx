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
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '60px 24px 32px' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 10 }}>
          Writing
        </h1>
        <p style={{ fontSize: 14.5, color: 'var(--color-muted)', lineHeight: 1.65, maxWidth: 440, margin: 0 }}>
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
