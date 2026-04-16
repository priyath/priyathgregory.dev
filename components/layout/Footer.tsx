export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: '28px 24px',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: 12,
          color: 'var(--color-muted)',
        }}
      >
        © 2026 Priyath Gregory
      </span>
    </footer>
  )
}
