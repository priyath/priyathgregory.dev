import Hero from '@/components/home/Hero'
import RecentPosts from '@/components/home/RecentPosts'

export default function Home() {
  return (
    <>
      <Hero />
      <div
        style={{
          height: 1,
          background: 'var(--color-border)',
          maxWidth: 880,
          margin: '0 auto',
        }}
      />
      <RecentPosts />
    </>
  )
}
