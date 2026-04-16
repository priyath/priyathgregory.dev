import { getAllPosts, formatDate } from '@/lib/posts'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ tag: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  const tags = new Set(posts.flatMap(p => [...p.tags]))
  return Array.from(tags).map(tag => ({ tag }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params
  return { title: `#${tag}` }
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params
  const posts = await getAllPosts()
  const filtered = posts.filter(p => p.tags.includes(tag))
  if (filtered.length === 0) notFound()

  return (
    <>
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '60px 24px 32px' }}>
        <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 10.5, color: '#54B689', letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 6 }}>
          // tag
        </p>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 10 }}>
          #{tag}
        </h1>
      </section>
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px 96px' }}>
        {filtered.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr 80px',
              gap: '0 16px',
              padding: '10px 6px',
              borderBottom: '1px solid var(--color-border)',
              textDecoration: 'none',
              color: 'inherit',
              alignItems: 'baseline',
            }}
          >
            <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 12.5, color: '#54B689' }}>
              {post.category}/
            </span>
            <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 13, color: 'var(--color-text-2)' }}>
              {post.slug}
            </span>
            <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 12, color: 'var(--color-muted)', textAlign: 'right' }}>
              {formatDate(post.publishedAt)}
            </span>
          </Link>
        ))}
      </section>
    </>
  )
}
