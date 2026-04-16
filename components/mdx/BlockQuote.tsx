import type { HTMLAttributes } from 'react'

export default function BlockQuote({ children, ...rest }: HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      {...rest}
      style={{
        borderLeft: '3px solid #54B689',
        marginLeft: 0,
        paddingLeft: '1.25rem',
        color: 'var(--color-text-3)',
        fontStyle: 'italic',
      }}
    >
      {children}
    </blockquote>
  )
}
