import { getAllPosts, CATEGORY_LABELS } from '@/lib/posts'
import CategoryFilter from '@/components/blog/CategoryFilter'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ key: string }>
}

const VALID_CATEGORIES = ['devops', 'databases', 'web-dev', 'javascript']

export async function generateStaticParams() {
  return VALID_CATEGORIES.map(key => ({ key }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { key } = await params
  const label = CATEGORY_LABELS[key]
  if (!label) return {}
  return { title: label }
}

export default async function CategoryPage({ params }: Props) {
  const { key } = await params
  if (!VALID_CATEGORIES.includes(key)) notFound()
  const posts = await getAllPosts()
  const label = CATEGORY_LABELS[key] ?? key

  return (
    <>
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '60px 24px 32px' }}>
        <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 10.5, color: '#54B689', letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 6 }}>
          // category
        </p>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 10 }}>
          {label}
        </h1>
      </section>
      <section style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px 96px' }}>
        <CategoryFilter posts={posts} initialCategory={key} />
      </section>
    </>
  )
}
