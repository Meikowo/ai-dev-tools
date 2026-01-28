import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Dev Tools - Free Developer Tools',
  description: 'Free AI-powered tools for developers - Generate README files, meta tags, commit messages, and more',
  keywords: ['AI tools', 'developer tools', 'README generator', 'meta tags', 'commit message'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
