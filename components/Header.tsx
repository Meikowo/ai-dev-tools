import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-bold">AI Dev Tools</span>
          </Link>
          <div className="flex space-x-4">
            <Link href="/tools/readme-generator" className="hover:text-blue-600 transition">
              README Generator
            </Link>
            <Link href="/tools/meta-tag-generator" className="hover:text-blue-600 transition">
              Meta Tags
            </Link>
            <Link href="/tools/commit-generator" className="hover:text-blue-600 transition">
              Commit Messages
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
