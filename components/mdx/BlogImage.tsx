'use client'

import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  src: string
  alt?: string
  width?: number
  height?: number
}

export default function BlogImage({ src, alt = '' }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <span
        style={{ display: 'block', cursor: 'zoom-in', margin: '1.5rem 0' }}
        onClick={() => dialogRef.current?.showModal()}
      >
        <img
          src={src}
          alt={alt}
          style={{ maxWidth: '100%', borderRadius: 8, border: '1px solid var(--color-border)' }}
        />
      </span>

      {/* Portal the dialog to <body> so it never nests inside a <p> */}
      {mounted && createPortal(
        <dialog
          ref={dialogRef}
          onClick={() => dialogRef.current?.close()}
          style={{
            background: 'rgba(0,0,0,0.92)',
            border: 'none',
            borderRadius: 0,
            padding: '1rem',
            maxWidth: '95vw',
            maxHeight: '95vh',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </dialog>,
        document.body
      )}
    </>
  )
}
