import fs from 'fs/promises'
import path from 'path'
import readingTime from 'reading-time'
export { formatDate } from './utils'

const POSTS_DIR = path.join(process.cwd(), 'content/posts')

export type PostMeta = {
  slug: string
  title: string
  publishedAt: string
  summary: string
  category: 'devops' | 'databases' | 'web-dev' | 'javascript'
  tags: string[]
  readingTime: string
}

export const CATEGORY_LABELS: Record<string, string> = {
  devops: 'DevOps / Infra',
  databases: 'Databases',
  'web-dev': 'Web Dev',
  javascript: 'JavaScript',
}

// Parse YAML frontmatter from an MDX file string.
// Returns { data, content } where data is key→value and content is the MDX body.
function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const yamlBlock = match[1]
  const body = match[2]
  const data: Record<string, string> = {}

  // Parse simple key: value lines (handles quoted strings and arrays)
  let i = 0
  const lines = yamlBlock.split('\n')
  while (i < lines.length) {
    const line = lines[i]
    const kv = line.match(/^(\w+):\s*(.*)$/)
    if (!kv) { i++; continue }

    const key = kv[1]
    let val = kv[2].trim()

    // Collect YAML array (subsequent lines starting with '  -')
    if (val === '' || val === '[]') {
      const items: string[] = []
      i++
      while (i < lines.length && lines[i].match(/^\s+-\s+/)) {
        items.push(lines[i].replace(/^\s+-\s+/, '').trim())
        i++
      }
      data[key] = JSON.stringify(items)
      continue
    }

    // Strip surrounding quotes
    val = val.replace(/^['"]|['"]$/g, '')
    data[key] = val
    i++
  }

  return { data, content: body }
}

async function readPost(slug: string): Promise<{ meta: PostMeta; mdxSource: string } | null> {
  const filePath = path.join(POSTS_DIR, slug, 'index.mdx')
  let raw: string
  try {
    raw = await fs.readFile(filePath, 'utf-8')
  } catch {
    return null
  }

  const { data, content } = parseFrontmatter(raw)

  let tags: string[] = []
  try {
    tags = data.tags ? JSON.parse(data.tags) : []
  } catch {
    tags = []
  }

  const stats = readingTime(content)

  return {
    meta: {
      slug,
      title: data.title ?? slug,
      publishedAt: data.publishedAt ?? '',
      summary: data.summary ?? '',
      category: (data.category as PostMeta['category']) ?? 'web-dev',
      tags,
      readingTime: `${Math.ceil(stats.minutes)} min`,
    },
    mdxSource: content,
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  let slugs: string[]
  try {
    const entries = await fs.readdir(POSTS_DIR, { withFileTypes: true })
    slugs = entries.filter(e => e.isDirectory()).map(e => e.name)
  } catch {
    return []
  }

  const posts = await Promise.all(slugs.map(slug => readPost(slug)))

  return posts
    .filter((p): p is { meta: PostMeta; mdxSource: string } => p !== null)
    .map(p => p.meta)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}

export async function getPost(slug: string) {
  const result = await readPost(slug)
  if (!result) return null
  return { ...result.meta, mdxSource: result.mdxSource }
}
