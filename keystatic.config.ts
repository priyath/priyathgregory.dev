import { config, collection, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: 'priyath/priyathgregory.dev',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedAt: fields.date({ label: 'Published' }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'DevOps / Infra', value: 'devops' },
            { label: 'Databases', value: 'databases' },
            { label: 'Web Dev', value: 'web-dev' },
            { label: 'JavaScript', value: 'javascript' },
          ],
          defaultValue: 'web-dev',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),
  },
})
