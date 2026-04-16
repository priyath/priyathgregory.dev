import type { AnchorHTMLAttributes } from 'react'

export default function BlogAnchor({ children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...rest}
      style={{ color: '#54B689', textDecoration: 'underline', textDecorationColor: 'rgba(84,182,137,0.4)' }}
      target={rest.href?.startsWith('http') ? '_blank' : undefined}
      rel={rest.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}
