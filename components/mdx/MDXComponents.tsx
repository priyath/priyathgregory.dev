import type { MDXComponents } from 'mdx/types'
import CodeBlock from './CodeBlock'
import InlineCode from './InlineCode'
import BlockQuote from './BlockQuote'
import BlogImage from './BlogImage'
import BlogAnchor from './BlogAnchor'
import BlogDivider from './BlogDivider'

export function getMDXComponents(): MDXComponents {
  return {
    pre: (props: any) => <CodeBlock {...props} />,
    // Only override inline code — not code inside pre (handled by CodeBlock)
    code: (props: any) => {
      // If parent is pre (handled by CodeBlock), don't wrap — just return as-is
      // next-mdx-remote will call code for both inline and block; inside a pre the className will be language-*
      if (props.className) return <code {...props} />
      return <InlineCode {...props} />
    },
    blockquote: (props: any) => <BlockQuote {...props} />,
    img: (props: any) => <BlogImage src={props.src ?? ''} alt={props.alt} />,
    a: (props: any) => <BlogAnchor {...props} />,
    hr: () => <BlogDivider />,
  }
}
