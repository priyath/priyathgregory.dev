import type { HTMLAttributes } from 'react'

export default function InlineCode({ children, ...rest }: HTMLAttributes<HTMLElement>) {
  return (
    <code
      {...rest}
      style={{
        fontFamily: 'var(--font-jetbrains-mono), monospace',
        fontSize: '0.875em',
        background: 'var(--color-surface-2)',
        border: '1px solid var(--color-border)',
        borderRadius: 4,
        padding: '1px 5px',
        color: '#54B689',
      }}
    >
      {children}
    </code>
  )
}
