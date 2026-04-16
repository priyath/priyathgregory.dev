'use client'

import Giscus from '@giscus/react'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'pg-dev-portfolio-color-mode'

export default function Comments() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    setTheme(stored === 'light' ? 'light' : 'dark')
  }, [])

  return (
    <div style={{ marginTop: 40, marginBottom: 80 }}>
      <p
        style={{
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: 10.5,
          color: '#54B689',
          letterSpacing: '0.13em',
          textTransform: 'uppercase',
          marginBottom: 18,
        }}
      >
        // discussion
      </p>
      <Giscus
        repo="priyath/priyathgregory.dev"
        repoId="R_kgDOG_HBLQ"
        category="Announcements"
        categoryId="DIC_kwDOG_HBLc4CPQio"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'dark_dimmed' : 'light'}
        lang="en"
        loading="lazy"
      />
    </div>
  )
}
