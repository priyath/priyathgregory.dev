'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'pg-dev-portfolio-color-mode'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    setIsDark(stored !== 'light')
    setMounted(true)
  }, [])

  function toggle() {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem(STORAGE_KEY, 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem(STORAGE_KEY, 'light')
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      suppressHydrationWarning
      style={{
        width: 36,
        height: 20,
        background: 'var(--color-toggle-bg)',
        borderRadius: 10,
        position: 'relative',
        border: '1px solid var(--color-toggle-border)',
        flexShrink: 0,
        cursor: 'pointer',
        padding: 0,
      }}
    >
      {/* Only render knob after mount to avoid server/client mismatch */}
      {mounted && (
        <span
          style={{
            position: 'absolute',
            left: isDark ? 3 : 'auto',
            right: isDark ? 'auto' : 3,
            top: 2,
            width: 14,
            height: 14,
            background: '#54B689',
            borderRadius: '50%',
            transition: 'left 0.15s, right 0.15s',
            display: 'block',
          }}
        />
      )}
    </button>
  )
}
