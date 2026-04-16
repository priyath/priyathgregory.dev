'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <div style={{ flex: 1, display: 'flex', gap: 28 }}>
      {links.map(({ href, label }) => {
        const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            style={{
              color: isActive ? 'var(--color-text)' : 'var(--color-muted)',
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
          >
            {label}
          </Link>
        )
      })}
    </div>
  )
}
