'use client'

import { useRef } from 'react'

interface Props {
  src: string
  alt?: string
  width?: number
  height?: number
}

export default function BlogImage({ src, alt = '', width, height }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

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
      </dialog>
    </>
  )
}
