'use client'

import { useEffect, useState } from 'react'

const LINES = [
  { text: '$ booting priyathgregory.dev...', color: 'rgba(255,255,255,0.75)' },
  { text: '✓ posts loaded          [6 found]', color: '#54B689' },
  { text: '✓ components compiled   [ok]',      color: '#54B689' },
  { text: '✓ systems online        [ready]',   color: '#54B689' },
  { text: '$ welcome.',                         color: 'rgba(255,255,255,0.9)' },
]

const SESSION_KEY  = 'pg-boot-shown'
const LINE_STEP_MS = 150

export default function BootSequence() {
  const [visible, setVisible]     = useState(false)
  const [fading,  setFading]      = useState(false)
  const [lineCount, setLineCount] = useState(0)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return
    sessionStorage.setItem(SESSION_KEY, '1')
    setVisible(true)

    // reveal lines one by one
    LINES.forEach((_, i) => {
      setTimeout(() => setLineCount(i + 1), i * LINE_STEP_MS)
    })

    // fade out after all lines shown
    const fadeAt = LINES.length * LINE_STEP_MS + 1400
    setTimeout(() => setFading(true), fadeAt)
    setTimeout(() => setVisible(false), fadeAt + 450)
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: '#131a23',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: fading ? 0 : 1,
      transition: 'opacity 450ms ease',
      pointerEvents: fading ? 'none' : 'all',
    }}>
      <div style={{
        fontFamily: 'monospace',
        fontSize: 14,
        lineHeight: 2.1,
        minWidth: 300,
      }}>
        {LINES.slice(0, lineCount).map((line, i) => (
          <div key={i} style={{ color: line.color }}>
            {line.text}
            {i === lineCount - 1 && i === LINES.length - 1 && (
              <span style={{
                display: 'inline-block',
                width: 8,
                height: '1em',
                background: '#54B689',
                marginLeft: 4,
                verticalAlign: 'text-bottom',
                animation: 'blink 1.1s step-end infinite',
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
