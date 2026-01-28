'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ReadmeGenerator() {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    features: '',
    installation: '',
    usage: '',
    author: '',
    license: 'MIT'
  })
  const [generatedReadme, setGeneratedReadme] = useState('')

  const generateReadme = () => {
    const readme = `# ${formData.projectName || 'Your Project Name'}

${formData.projectDescription ? formData.projectDescription : 'Your project description goes here.'}

## Features

${formData.features || '- Feature 1\n- Feature 2\n- Feature 3'}

## Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/username/${formData.projectName?.toLowerCase().replace(/\s+/g, '-') || 'your-project'}.git

# Navigate to the project directory
cd ${formData.projectName?.toLowerCase().replace(/\s+/g, '-') || 'your-project'}

# Install dependencies
npm install
\`\`\`

${formData.installation ? `**Additional Steps:**\n\n${formData.installation}\n` : ''}

## Usage

\`\`\`javascript
// Example usage code here
${formData.usage || '// Your usage example'}
\`\`\`

${formData.usage ? `**More Details:**\n\n${formData.usage}\n` : ''}

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ${formData.license} License.

${formData.author ? `## Author\n\n**${formData.author}**\n\n- GitHub: [@${formData.author}](https://github.com/${formData.author})\n` : ''}

---

⭐ If you find this project helpful, please consider giving it a star!
`

    setGeneratedReadme(readme)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedReadme)
    alert('README copied to clipboard!')
  }

  const downloadReadme = () => {
    const blob = new Blob([generatedReadme], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'README.md'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <a href="/" className="text-blue-600 hover:text-blue-700">
            ← Back to Home
          </a>
          <h1 className="text-4xl font-bold mt-4 mb-2">📝 README Generator</h1>
          <p className="text-gray-600">
            Generate professional README.md files for your GitHub projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Project Information</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Name *
                </label>
                <input
                  type="text"
                  value={formData.projectName}
                  onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2"
                  placeholder="My Awesome Project"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Description *
                </label>
                <textarea
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2 h-24"
                  placeholder="A brief description of what your project does"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Key Features (one per line)
                </label>
                <textarea
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2 h-24"
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Installation Instructions
                </label>
                <textarea
                  value={formData.installation}
                  onChange={(e) => setFormData({ ...formData, installation: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2 h-20"
                  placeholder="Additional installation steps..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Usage Example
                </label>
                <textarea
                  value={formData.usage}
                  onChange={(e) => setFormData({ ...formData, usage: e.target.value })}
                  className="w-full border rounded-lg px-4 py-2 h-20"
                  placeholder="const app = new App();&#10;app.start();"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    License
                  </label>
                  <select
                    value={formData.license}
                    onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                    className="w-full border rounded-lg px-4 py-2"
                  >
                    <option value="MIT">MIT</option>
                    <option value="Apache 2.0">Apache 2.0</option>
                    <option value="GPL v3">GPL v3</option>
                    <option value="BSD 3-Clause">BSD 3-Clause</option>
                  </select>
                </div>
              </div>

              <button
                onClick={generateReadme}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Generate README ⚡
              </button>
            </div>
          </div>

          {/* Output Preview */}
          <div>
            <div className="border rounded-lg p-6 h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Generated README</h2>
                {generatedReadme && (
                  <div className="space-x-2">
                    <button
                      onClick={copyToClipboard}
                      className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                    >
                      📋 Copy
                    </button>
                    <button
                      onClick={downloadReadme}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      💾 Download
                    </button>
                  </div>
                )}
              </div>

              {generatedReadme ? (
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-sm overflow-x-auto">
                    {generatedReadme}
                  </pre>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-500">
                  <p>Fill in the form and click "Generate README" to see the result</p>
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
