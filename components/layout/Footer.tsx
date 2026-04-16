export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: '28px 24px',
        maxWidth: 880,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: 12,
          color: 'var(--color-muted)',
        }}
      >
        © 2025 Priyath Gregory
      </span>
      <span
        style={{
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: 12,
          color: 'var(--color-muted)',
        }}
      >
        Next.js · Tailwind CSS
      </span>
    </footer>
  )
}
