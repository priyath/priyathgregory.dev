import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Suspense } from 'react'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GoogleAnalytics from '@/components/layout/GoogleAnalytics'
import Terminal from '@/components/Terminal'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Priyath Gregory',
    template: '%s | Priyath Gregory',
  },
  description:
    'Software engineer writing about distributed systems, cloud infrastructure, and the web.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning />
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=localStorage.getItem('pg-dev-portfolio-color-mode');if(m==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <Terminal />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
