import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ToolCard from '@/components/ToolCard'

export default function Home() {
  const tools = [
    {
      title: 'README Generator',
      description: 'Generate professional README.md files for your GitHub projects in seconds',
      href: '/tools/readme-generator',
      icon: '📝'
    },
    {
      title: 'Meta Tag Generator',
      description: 'Create SEO-friendly meta tags for better social media sharing and search rankings',
      href: '/tools/meta-tag-generator',
      icon: '🏷️'
    },
    {
      title: 'Commit Message Generator',
      description: 'Write clear, conventional commit messages following best practices',
      href: '/tools/commit-generator',
      icon: '💬'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            🚀 AI Dev Tools
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Free AI-powered tools to help you build better software, faster
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">
              ✅ 100% Free
            </div>
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
              ⚡ Instant Results
            </div>
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm">
              🔒 No Sign-up Required
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tools.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Use AI Dev Tools?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold mb-2">Save Time</h3>
              <p className="text-gray-600">
                Generate professional documentation and code in seconds, not hours
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
              <p className="text-gray-600">
                Follow industry standards and conventions automatically
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Simple interface, instant results, no technical knowledge required
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
