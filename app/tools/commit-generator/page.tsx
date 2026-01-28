'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CommitGenerator() {
  const [formData, setFormData] = useState({
    type: 'feat',
    scope: '',
    subject: '',
    body: '',
    footer: ''
  })
  const [generatedMessage, setGeneratedMessage] = useState('')

  const commitTypes = [
    { value: 'feat', label: '✨ Feat', description: 'A new feature' },
    { value: 'fix', label: '🐛 Fix', description: 'A bug fix' },
    { value: 'docs', label: '📝 Docs', description: 'Documentation only changes' },
    { value: 'style', label: '💄 Style', description: 'Code style changes' },
    { value: 'refactor', label: '♻️ Refactor', description: 'Code refactoring' },
    { value: 'perf', label: '⚡ Perf', description: 'Performance improvements' },
    { value: 'test', label: '✅ Test', description: 'Adding or updating tests' },
    { value: 'chore', label: '🔧 Chore', description: 'Maintenance tasks' }
  ]

  const generateMessage = () => {
    let message = formData.type

    if (formData.scope) {
      message += `(${formData.scope})`
    }

    message += `: ${formData.subject || 'Add commit subject'}`

    if (formData.body) {
      message += `\n\n${formData.body}`
    }

    if (formData.footer) {
      message += `\n\n${formData.footer}`
    }

    setGeneratedMessage(message)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedMessage)
    alert('Commit message copied to clipboard!')
  }

  const examples = [
    {
      type: 'feat',
      scope: 'auth',
      subject: 'add OAuth2 login support',
      body: 'Implemented Google and GitHub OAuth providers\nUpdated authentication flow\nAdded user profile synchronization'
    },
    {
      type: 'fix',
      scope: 'api',
      subject: 'handle null response from user endpoint',
      body: 'Added null check for API responses\nFixed potential crash on missing user data',
      footer: 'Closes #123'
    },
    {
      type: 'docs',
      scope: '',
      subject: 'update installation instructions',
      body: ' clarified Node.js version requirements\nAdded troubleshooting section'
    }
  ]

  const loadExample = (example: any) => {
    setFormData({
      type: example.type,
      scope: example.scope,
      subject: example.subject,
      body: example.body,
      footer: example.footer || ''
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <a href="/" className="text-blue-600 hover:text-blue-700">
            ← Back to Home
          </a>
          <h1 className="text-4xl font-bold mt-4 mb-2">💬 Commit Message Generator</h1>
          <p className="text-gray-600">
            Write clear, conventional commit messages following best practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Commit Details</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                >
                  {commitTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label} - {type.description}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Scope (optional)
                </label>
                <input
                  type="text"
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="auth, api, ui, etc."
                />
                <p className="text-xs text-gray-500 mt-1">
                  The section of the codebase this commit affects
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject * (imperative mood, lowercase)
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="add new feature"
                  maxLength={72}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.subject.length}/72 characters • Use imperative mood (&quot;add&quot; not &quot;added&quot;)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Body (optional)
                </label>
                <textarea
                  value={formData.body}
                  onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2 h-32"
                  placeholder="• Motivation for the change&#10;• Contrast with previous behavior&#10;• Implementation details"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Use bullet points for multiple items
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Footer (optional)
                </label>
                <textarea
                  value={formData.footer}
                  onChange={(e) => setFormData({ ...formData, footer: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2 h-20"
                  placeholder="Closes #123&#10;Breaks: ABC-123"
                />
                <p className="text-xs text-gray-500 mt-1">
                  References to issues, breaking changes, etc.
                </p>
              </div>

              <button
                onClick={generateMessage}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Generate Commit Message ⚡
              </button>

              {/* Examples */}
              <div className="border-t pt-4">
                <p className="text-sm font-medium mb-2">Load Example:</p>
                <div className="space-y-2">
                  {examples.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => loadExample(example)}
                      className="block w-full text-left text-sm bg-gray-50 px-3 py-2 rounded hover:bg-gray-100 transition"
                    >
                      {example.type}: {example.subject}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Output Preview */}
          <div>
            <div className="border rounded-lg p-6 h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Generated Message</h2>
                {generatedMessage && (
                  <button
                    onClick={copyToClipboard}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    📋 Copy
                  </button>
                )}
              </div>

              {generatedMessage ? (
                <>
                  <div className="bg-gray-900 text-white rounded-lg p-4 mb-4">
                    <pre className="whitespace-pre-wrap text-sm font-mono">
                      <span className="text-green-400">$</span> git commit -m &quot;{generatedMessage}&quot;
                    </pre>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Preview:</p>
                    <pre className="whitespace-pre-wrap text-sm overflow-x-auto">
                      {generatedMessage}
                    </pre>
                  </div>

                  {/* Explanation */}
                  <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">📚 Why this format?</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Follows <strong>Conventional Commits</strong> specification</li>
                      <li>• Easy to generate CHANGELOG automatically</li>
                      <li>• Clear commit history for better collaboration</li>
                      <li>• Enables semantic versioning</li>
                    </ul>
                  </div>
                </>
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-500">
                  <p>Fill in the form and click &quot;Generate Commit Message&quot; to see the result</p>
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
