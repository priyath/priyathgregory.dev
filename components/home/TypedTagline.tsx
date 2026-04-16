'use client'

import { useEffect, useState } from 'react'

const PHRASES = [
  'Platform Engineering',
  'Distributed Systems',
  'Cloud Infrastructure',
  'Scalable Architecture',
]

const TYPE_SPEED   = 60
const DELETE_SPEED = 35
const PAUSE_MS     = 1800

export default function TypedTagline() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = PHRASES[phraseIndex]

    if (!isDeleting && displayed === current) {
      // Fully typed — pause then start deleting
      const t = setTimeout(() => setIsDeleting(true), PAUSE_MS)
      return () => clearTimeout(t)
    }

    if (isDeleting && displayed === '') {
      // Fully deleted — move to next phrase
      setIsDeleting(false)
      setPhraseIndex(i => (i + 1) % PHRASES.length)
      return
    }

    const t = setTimeout(() => {
      setDisplayed(isDeleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1)
      )
    }, isDeleting ? DELETE_SPEED : TYPE_SPEED)

    return () => clearTimeout(t)
  }, [displayed, isDeleting, phraseIndex])

  return (
    <p
      style={{
        fontFamily: 'var(--font-jetbrains-mono), monospace',
        fontSize: 13,
        color: 'var(--color-muted)',
        marginBottom: 36,
      }}
    >
      <span style={{ color: '#54B689' }}>~</span> 10+ years ·{' '}
      <span style={{ color: 'var(--color-text-2)' }}>{displayed}</span>
      <span
        style={{
          display: 'inline-block',
          width: 2,
          height: '0.9em',
          background: '#54B689',
          marginLeft: 2,
          verticalAlign: 'middle',
          animation: 'blink 1.1s step-end infinite',
        }}
      />
    </p>
  )
}
