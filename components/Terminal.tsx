'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

// ─── Post data (hardcoded for simplicity — no async needed) ──────────────────
const POSTS = [
  { slug: 'cicd-pipeline-for-gke-with-cloud-deploy',       date: 'Aug 2024', size: '9 min' },
  { slug: 'architect-production-grade-gke-environment',    date: 'Dec 2023', size: '12 min' },
  { slug: 'building-a-blog-with-nextjs-part-02',           date: 'Dec 2022', size: '10 min' },
  { slug: 'building-a-blog-with-nextjs-part-01',           date: 'Jun 2022', size: '8 min' },
  { slug: 'couchdb-document-conflicts-and-resolution',     date: 'Nov 2020', size: '7 min' },
  { slug: 'javascript-internals-whats-under-the-hood',     date: 'Dec 2019', size: '11 min' },
]

// ─── Output line types ────────────────────────────────────────────────────────
type Line =
  | { type: 'input'; text: string }
  | { type: 'output'; text: string; color?: string }
  | { type: 'blank' }

// ─── Command definitions ──────────────────────────────────────────────────────
const HELP_TEXT = `
available commands:

  whoami          — who is this guy
  cat about       — longer bio
  skills          — tech stack
  ls posts        — list all posts
  open <slug>     — open a post
  cd blog         — go to /blog
  ping            — ping the server
  uname           — system info
  sudo            — lol
  clear           — clear terminal
  exit            — close terminal
`.trim()

function runCommand(
  raw: string,
  navigate: (path: string) => void,
  close: () => void,
): { lines: Line[]; shouldClear?: boolean } {
  const cmd = raw.trim().toLowerCase()
  const parts = raw.trim().split(/\s+/)

  if (!cmd) return { lines: [] }

  if (cmd === 'clear') return { lines: [], shouldClear: true }
  if (cmd === 'exit' || cmd === 'quit') { close(); return { lines: [] } }

  if (cmd === 'help') {
    return {
      lines: [
        { type: 'blank' },
        ...HELP_TEXT.split('\n').map(t => ({ type: 'output' as const, text: t })),
        { type: 'blank' },
      ],
    }
  }

  if (cmd === 'whoami') {
    return {
      lines: [
        { type: 'blank' },
        { type: 'output', text: 'priyath gregory', color: '#54B689' },
        { type: 'output', text: 'software engineer · full-stack · sri lanka 🇱🇰' },
        { type: 'output', text: '6+ years building distributed systems & cloud infra' },
        { type: 'blank' },
      ],
    }
  }

  if (cmd === 'cat about') {
    return {
      lines: [
        { type: 'blank' },
        { type: 'output', text: "hey! i'm priyath, a software engineer based in sri lanka." },
        { type: 'output', text: 'i build distributed systems and write about cloud' },
        { type: 'output', text: 'infrastructure, backend architecture, and the web.' },
        { type: 'blank' },
        { type: 'output', text: 'when not at the keyboard: coffee, formula 1, and' },
        { type: 'output', text: 'convincing myself i need to learn rust.' },
        { type: 'blank' },
      ],
    }
  }

  if (cmd === 'skills') {
    return {
      lines: [
        { type: 'blank' },
        { type: 'output', text: 'languages   typescript, python, java', color: '#54B689' },
        { type: 'output', text: 'cloud       gcp, kubernetes, terraform' },
        { type: 'output', text: 'backend     node.js, spring boot, rest apis' },
        { type: 'output', text: 'frontend    next.js, react, tailwind' },
        { type: 'output', text: 'databases   postgresql, couchdb, redis' },
        { type: 'output', text: 'tools       docker, github actions, cloud deploy' },
        { type: 'blank' },
      ],
    }
  }

  if (cmd === 'ls posts' || cmd === 'ls' || cmd === 'ls -la posts') {
    return {
      lines: [
        { type: 'blank' },
        ...POSTS.map(p => ({
          type: 'output' as const,
          text: `-rw-r--r--  ${p.size.padEnd(7)}  ${p.date}  ${p.slug}`,
        })),
        { type: 'blank' },
      ],
    }
  }

  if (parts[0] === 'open' && parts[1]) {
    const slug = parts.slice(1).join('-')
    const match = POSTS.find(p => p.slug.includes(slug) || slug.includes(p.slug.split('-')[0]))
    if (match) {
      setTimeout(() => navigate(`/blog/${match.slug}`), 300)
      return {
        lines: [
          { type: 'blank' },
          { type: 'output', text: `opening ${match.slug}...`, color: '#54B689' },
          { type: 'blank' },
        ],
      }
    }
    return {
      lines: [
        { type: 'blank' },
        { type: 'output', text: `no post matching "${parts.slice(1).join(' ')}"` },
        { type: 'output', text: 'try: ls posts' },
        { type: 'blank' },
      ],
    }
  }

  if (cmd === 'cd blog' || cmd === 'cd /blog') {
    setTimeout(() => navigate('/blog'), 300)
    return {
      lines: [
        { type: 'blank' },
        { type: 'output', text: 'navigating to /blog...', color: '#54B689' },
        { type: 'blank' },
      ],
    }
  }

  if (cmd === 'cd /' || cmd === 'cd home' || cmd === 'cd ~') {
    setTimeout(() => navigate('/'), 300)
    return {
      lines: [
        { type: 'blank' },
        { type: 'output', text: 'navigating to home...', color: '#54B689' },
        { type: 'blank' },
      ],
    }
  }

  if (cmd === 'ping' || cmd === 'ping priyathgregory.dev') {
    return {
      lines: [
        { type: 'blank' },
        { type: 'output', text: 'PING priyathgregory.dev: 56 data bytes' },
        { type: 'output', text: '64 bytes: icmp_seq=0 ttl=64 time=1.337 ms', color: '#54B689' },
        { type: 'output', text: '64 bytes: icmp_seq=1 ttl=64 time=0.420 ms', color: '#54B689' },
        { type: 'output', text: '64 bytes: icmp_seq=2 ttl=64 time=0.881 ms', color: '#54B689' },
        { type: 'output', text: '--- priyathgregory.dev ping statistics ---' },
        { type: 'output', text: '3 packets transmitted, 3 received, 0% packet loss' },
        { type: 'blank' },
      ],
    }
  }

  if (cmd.startsWith('uname')) {
    return {
      lines: [
        { type: 'blank' },
        { type: 'output', text: 'PriyathOS 6.0.0 (Distributed Edition)' },
        { type: 'output', text: 'Kernel: caffeine-powered · Arch: full-stack' },
        { type: 'output', text: 'Uptime: 6 years, 4 months, still going' },
        { type: 'blank' },
      ],
    }
  }

  if (cmd.startsWith('sudo')) {
    return {
      lines: [
        { type: 'blank' },
        { type: 'output', text: 'nice try.', color: '#f97583' },
        { type: 'blank' },
      ],
    }
  }

  if (cmd === 'date') {
    return {
      lines: [
        { type: 'blank' },
        { type: 'output', text: new Date().toString() },
        { type: 'blank' },
      ],
    }
  }

  if (cmd === 'uptime') {
    return {
      lines: [
        { type: 'blank' },
        { type: 'output', text: 'up 6+ years, 0 career crashes, load avg: high' },
        { type: 'blank' },
      ],
    }
  }

  // Unknown command
  return {
    lines: [
      { type: 'blank' },
      { type: 'output', text: `command not found: ${parts[0]}`, color: '#f97583' },
      { type: 'output', text: "type 'help' to see available commands" },
      { type: 'blank' },
    ],
  }
}

// ─── Component ────────────────────────────────────────────────────────────────
const WELCOME: Line[] = [
  { type: 'output', text: 'priyath@dev:~ — terminal', color: '#54B689' },
  { type: 'output', text: "type 'help' for available commands. press ` or esc to close." },
  { type: 'blank' },
]

export default function Terminal() {
  const router  = useRouter()
  const [open,    setOpen]    = useState(false)
  const [input,   setInput]   = useState('')
  const [lines,   setLines]   = useState<Line[]>(WELCOME)
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)

  const inputRef  = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => { setOpen(false) }, [])

  // Toggle on backtick, close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '`' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        // Don't trigger if user is typing in an input/textarea
        const tag = (e.target as HTMLElement).tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA') return
        e.preventDefault()
        setOpen(prev => !prev)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  // Scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  function submit() {
    const raw = input.trim()
    setInput('')
    setHistIdx(-1)

    const inputLine: Line = { type: 'input', text: raw }
    if (!raw) { setLines(prev => [...prev, inputLine]); return }

    setHistory(prev => [raw, ...prev])

    const { lines: newLines, shouldClear } = runCommand(raw, (path) => router.push(path), close)

    if (shouldClear) {
      setLines(WELCOME)
    } else {
      setLines(prev => [...prev, inputLine, ...newLines])
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') { submit(); return }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, history.length - 1)
      setHistIdx(next)
      setInput(history[next] ?? '')
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = histIdx - 1
      if (next < 0) { setHistIdx(-1); setInput(''); return }
      setHistIdx(next)
      setInput(history[next] ?? '')
    }
  }

  if (!open) return null

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 640,
          maxHeight: '70vh',
          margin: '0 24px',
          borderRadius: 10,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'monospace',
          fontSize: 13,
        }}
      >
        {/* Title bar */}
        <div style={{
          background: '#1e2c3a',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 7,
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          flexShrink: 0,
        }}>
          <button onClick={close} style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', border: 'none', cursor: 'pointer', padding: 0 }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e', display: 'block' }} />
          <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'block' }} />
          <span style={{ flex: 1, textAlign: 'center', fontSize: 11.5, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
            priyath@dev: ~
          </span>
        </div>

        {/* Output area */}
        <div style={{
          background: '#0d1117',
          flex: 1,
          overflowY: 'auto',
          padding: '14px 18px',
          color: 'rgba(255,255,255,0.82)',
          lineHeight: 1.7,
        }}>
          {lines.map((line, i) => {
            if (line.type === 'blank') return <div key={i} style={{ height: 4 }} />
            if (line.type === 'input') return (
              <div key={i} style={{ color: 'rgba(255,255,255,0.6)' }}>
                <span style={{ color: '#54B689' }}>priyath@dev:~$</span> {line.text}
              </div>
            )
            return (
              <div key={i} style={{ color: line.color ?? 'rgba(255,255,255,0.75)', whiteSpace: 'pre' }}>
                {line.text}
              </div>
            )
          })}
          <div ref={bottomRef} />
        </div>

        {/* Input row */}
        <div style={{
          background: '#0d1117',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          flexShrink: 0,
        }}>
          <span style={{ color: '#54B689', whiteSpace: 'nowrap' }}>priyath@dev:~$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoComplete="off"
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'rgba(255,255,255,0.9)',
              fontFamily: 'monospace',
              fontSize: 13,
              caretColor: '#54B689',
            }}
          />
        </div>
      </div>
    </div>
  )
}
