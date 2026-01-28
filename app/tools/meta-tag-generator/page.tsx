'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MetaTagGenerator() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    keywords: '',
    image: '',
    url: '',
    twitterHandle: '',
    siteName: ''
  })
  const [generatedTags, setGeneratedTags] = useState('')

  const generateTags = () => {
    const tags = `<!-- Primary Meta Tags -->
<title>${formData.title || 'Your Page Title'}</title>
<meta name="title" content="${formData.title || 'Your Page Title'}" />
<meta name="description" content="${formData.description || 'Your page description'}" />
${formData.keywords ? `<meta name="keywords" content="${formData.keywords}" />` : ''}

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${formData.url || 'https://yourwebsite.com'}" />
<meta property="og:title" content="${formData.title || 'Your Page Title'}" />
<meta property="og:description" content="${formData.description || 'Your page description'}" />
${formData.image ? `<meta property="og:image" content="${formData.image}" />` : ''}
${formData.siteName ? `<meta property="og:site_name" content="${formData.siteName}" />` : ''}

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="${formData.url || 'https://yourwebsite.com'}" />
<meta property="twitter:title" content="${formData.title || 'Your Page Title'}" />
<meta property="twitter:description" content="${formData.description || 'Your page description'}" />
${formData.image ? `<meta property="twitter:image" content="${formData.image}" />` : ''}
${formData.twitterHandle ? `<meta name="twitter:site" content="${formData.twitterHandle}" />` : ''}

<!-- Additional SEO Tags -->
<meta name="robots" content="index, follow" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="language" content="English" />
<meta name="author" content="${formData.siteName || 'Your Name'}" />
`

    setGeneratedTags(tags)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedTags)
    alert('Meta tags copied to clipboard!')
  }

  const previewTags = () => {
    if (!formData.title) return null

    return (
      <div className="border rounded-lg p-4 max-w-md">
        <p className="text-sm text-gray-500 mb-2">Preview:</p>
        <div className="border rounded-lg p-4 bg-white">
          <div className="flex items-start space-x-3">
            {formData.image && (
              <img src={formData.image} alt="Preview" className="w-16 h-16 object-cover rounded" />
            )}
            <div className="flex-1">
              <p className="text-blue-600 font-semibold text-sm">{formData.url || 'https://yourwebsite.com'}</p>
              <p className="text-lg font-semibold">{formData.title}</p>
              <p className="text-sm text-gray-600">{formData.description || 'Your page description'}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <a href="/" className="text-blue-600 hover:text-blue-700">
            ← Back to Home
          </a>
          <h1 className="text-4xl font-bold mt-4 mb-2">🏷️ Meta Tag Generator</h1>
          <p className="text-gray-600">
            Create SEO-friendly meta tags for better social media sharing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Page Information</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Page Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="My Awesome Website"
                  maxLength={60}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.title.length}/60 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2 h-24"
                  placeholder="A brief description of your page"
                  maxLength={160}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.description.length}/160 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Keywords (comma separated)
                </label>
                <input
                  type="text"
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="react, nextjs, web development"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Site URL
                </label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Image URL (for social sharing)
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="https://yourwebsite.com/og-image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Site Name
                </label>
                <input
                  type="text"
                  value={formData.siteName}
                  onChange={(e) => setFormData({ ...formData, siteName: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="My Website"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Twitter Handle (optional)
                </label>
                <input
                  type="text"
                  value={formData.twitterHandle}
                  onChange={(e) => setFormData({ ...formData, twitterHandle: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="@yourhandle"
                />
              </div>

              <button
                onClick={generateTags}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Generate Meta Tags ⚡
              </button>
            </div>
          </div>

          {/* Output Preview */}
          <div>
            <div className="border rounded-lg p-6 h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Generated Tags</h2>
                {generatedTags && (
                  <button
                    onClick={copyToClipboard}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    📋 Copy All
                  </button>
                )}
              </div>

              {previewTags()}

              {generatedTags ? (
                <div className="mt-4 bg-gray-50 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-sm overflow-x-auto">
                    {generatedTags}
                  </pre>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-500">
                  <p>Fill in the form and click "Generate Meta Tags" to see the result</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
