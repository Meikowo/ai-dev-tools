import Link from 'next/link'

interface ToolCardProps {
  title: string
  description: string
  href: string
  icon: string
}

export default function ToolCard({ title, description, href, icon }: ToolCardProps) {
  return (
    <Link href={href}>
      <div className="border rounded-lg p-6 hover:shadow-lg transition cursor-pointer h-full">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 text-blue-600 hover:text-blue-700">
          Try it →
        </div>
      </div>
    </Link>
  )
}
