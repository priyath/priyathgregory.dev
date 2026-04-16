import Link from 'next/link'
import NavLinks from './NavLinks'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--color-nav-bg)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        style={{
          maxWidth: 880,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          height: 56,
          gap: 32,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 15,
            fontWeight: 500,
            color: 'var(--color-text)',
            textDecoration: 'none',
          }}
        >
          priyathgregory.dev
        </Link>
        <NavLinks />
        <ThemeToggle />
      </div>
    </nav>
  )
}
