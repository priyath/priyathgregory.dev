import { visit } from 'unist-util-visit'
import type { Root } from 'hast'

export function rehypeCodeMeta() {
  return (tree: Root) => {
    visit(tree, 'element', (node: any) => {
      if (node.tagName !== 'pre') return
      const codeEl = node.children?.find((c: any) => c.tagName === 'code')
      if (!codeEl) return

      const classes: string[] = codeEl.properties?.className ?? []
      const langClass = classes.find((c: string) => c.startsWith('language-'))
      if (!langClass) return

      const withoutPrefix = langClass.replace('language-', '')
      const parts = withoutPrefix.split(':')
      const lang = parts[0]
      const title = parts[1] ?? null
      const collapsed = parts[2] === 'collapsed'

      // Fix the class to just the bare language
      codeEl.properties.className = classes.map((c: string) =>
        c === langClass ? `language-${lang}` : c
      )

      // Store metadata on <pre> for CodeBlock to consume
      if (!node.properties) node.properties = {}
      if (title) node.properties['data-title'] = title
      if (collapsed) node.properties['data-collapsed'] = 'true'
    })
  }
}
