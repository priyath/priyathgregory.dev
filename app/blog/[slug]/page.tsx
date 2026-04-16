import { getPost, getAllPosts, CATEGORY_LABELS, formatDate } from '@/lib/posts'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import type { Options as PrettyCodeOptions } from 'rehype-pretty-code'
import { rehypeCodeMeta } from '@/components/mdx/rehype-code-meta'
import { getMDXComponents } from '@/components/mdx/MDXComponents'
import Comments from '@/components/blog/Comments'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const prettyCodeOptions: PrettyCodeOptions = {
  theme: 'github-dark-dimmed',
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const { content } = await compileMDX({
    source: post.mdxSource,
    components: getMDXComponents(),
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeCodeMeta,
          [rehypePrettyCode, prettyCodeOptions],
        ] as any,
      },
    },
  })

  const categoryLabel = CATEGORY_LABELS[post.category] ?? post.category
  const shareUrl = `https://priyathgregory.dev/blog/${slug}`
  const shareText = encodeURIComponent(post.title)
  const shareUrlEncoded = encodeURIComponent(shareUrl)

  return (
    <article style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
      {/* Breadcrumb */}
      <div style={{ padding: '28px 0 0', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Link
          href="/blog"
          className="breadcrumb-link"
          style={{
            fontSize: 12.5,
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            color: 'var(--color-muted)',
            textDecoration: 'none',
            transition: 'color 0.15s',
          }}
        >
          ← Writing
        </Link>
        <span style={{ color: 'var(--color-muted)', fontSize: 11 }}>/</span>
        <Link
          href={`/categories/${post.category}`}
          style={{
            fontSize: 12.5,
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            color: '#54B689',
            textDecoration: 'none',
          }}
        >
          {categoryLabel}
        </Link>
      </div>

      {/* Post header */}
      <header style={{ padding: '28px 0 36px', borderBottom: '1px solid var(--color-border)' }}>
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            marginBottom: 16,
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            fontSize: 15,
            color: 'var(--color-text-3)',
            lineHeight: 1.7,
            marginBottom: 24,
            maxWidth: 580,
            fontWeight: 400,
          }}
        >
          {post.summary}
        </p>
        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #54B689, #2a7a55)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                fontWeight: 700,
                color: '#131a23',
                flexShrink: 0,
              }}
            >
              PG
            </div>
            <span style={{ fontSize: 14, fontWeight: 500 }}>Priyath Gregory</span>
          </div>
          <span style={{ color: 'var(--color-muted)', fontSize: 11, fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
            {formatDate(post.publishedAt)}
          </span>
          <span style={{ color: 'var(--color-muted)', fontSize: 10 }}>·</span>
          <span style={{ color: 'var(--color-muted)', fontSize: 11, fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
            {post.readingTime} read
          </span>
        </div>
        {/* Tags */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {post.tags.map(tag => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="tag-chip"
              style={{
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: 11.5,
                color: 'var(--color-muted)',
                border: '1px solid var(--color-border)',
                borderRadius: 4,
                padding: '3px 9px',
                display: 'inline-block',
                textDecoration: 'none',
                transition: 'color 0.15s, border-color 0.15s',
              }}
            >
              {tag}
            </Link>
          ))}
        </div>
      </header>

      {/* Article body */}
      <div className="prose prose-invert prose-pre:p-0 prose-pre:bg-transparent max-w-none" style={{ paddingTop: 40 }}>
        {content}
      </div>

      {/* Post footer */}
      <div
        style={{
          margin: '52px 0 0',
          padding: '28px 0',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {post.tags.map(tag => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="tag-chip"
                style={{
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  fontSize: 11.5,
                  color: 'var(--color-muted)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 4,
                  padding: '3px 9px',
                  display: 'inline-block',
                  textDecoration: 'none',
                  transition: 'color 0.15s, border-color 0.15s',
                }}
              >
                {tag}
              </Link>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrlEncoded}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: 6,
                padding: '7px 14px',
                fontSize: 12,
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                color: 'var(--color-muted)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                textDecoration: 'none',
              }}
            >
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Share
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrlEncoded}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: '1px solid var(--color-border)',
                borderRadius: 6,
                padding: '7px 14px',
                fontSize: 12,
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                color: 'var(--color-muted)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                textDecoration: 'none',
              }}
            >
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Comments */}
      <Comments />
    </article>
  )
}
