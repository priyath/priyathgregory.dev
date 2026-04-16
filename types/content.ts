// Post type — will be derived from Keystatic schema once keystatic.config.ts is set up
export type Post = {
  slug: string
  title: string
  publishedAt: string
  summary: string
  category: 'devops' | 'databases' | 'web-dev' | 'javascript'
  tags: string[]
}
