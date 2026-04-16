import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLPreElement> {
  'data-title'?: string
  'data-collapsed'?: string
  'data-language'?: string  // set by rehype-pretty-code
}

export default function CodeBlock({ children, 'data-title': title, 'data-collapsed': collapsed, 'data-language': language, ...rest }: Props) {
  const isCollapsed = collapsed === 'true'
  const hasHeader = Boolean(title || language)

  const block = (
    <div
      style={{
        borderRadius: 8,
        border: '1px solid var(--color-border)',
        overflow: 'hidden',
        marginBottom: '1.5rem',
        background: '#0d1117',
      }}
    >
      {hasHeader && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 14px',
            background: '#161b22',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ display: 'flex', gap: 5 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
            </span>
            {title && (
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  fontSize: 11.5,
                  color: 'var(--color-muted)',
                  marginLeft: 4,
                }}
              >
                {title}
              </span>
            )}
          </div>
          {language && (
            <span
              style={{
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: 10.5,
                color: '#54B689',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {language}
            </span>
          )}
        </div>
      )}
      <pre
        {...rest}
        style={{
          margin: 0,
          padding: '16px 20px',
          overflowX: 'auto',
          fontSize: 13,
          lineHeight: 1.65,
          background: 'transparent',
        }}
      >
        {children}
      </pre>
    </div>
  )

  if (isCollapsed) {
    return (
      <details style={{ marginBottom: '1.5rem' }}>
        <summary
          style={{
            cursor: 'pointer',
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 12.5,
            color: '#54B689',
            padding: '6px 0',
            userSelect: 'none',
          }}
        >
          {title ?? 'Show code'}
        </summary>
        <div style={{ marginTop: 6 }}>{block}</div>
      </details>
    )
  }

  return block
}
