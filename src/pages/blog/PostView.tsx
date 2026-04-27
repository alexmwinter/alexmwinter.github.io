import { useParams, Link, Navigate } from "react-router-dom"
import { getPostBySlug } from "@/lib/blog"
import { TechLabel } from "@/components/ui/design-system"
import { MDXComponents } from "@/components/MDXComponents"
import { ChevronLeft } from "lucide-react"

export default function PostView() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  // If it's an external post being accessed via internal route (shouldn't happen with our links, but for safety)
  if (post.externalUrl) {
    window.location.href = post.externalUrl
    return null
  }

  const Content = post.component

  return (
    <article className="max-w-3xl mx-auto px-6 py-24">
      <Link 
        to="/blog" 
        className="inline-flex items-center gap-2 font-sans text-mid-gray hover:text-bright-blue transition-colors mb-12 group"
      >
        <ChevronLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
        <span className="font-mono text-sm uppercase tracking-wider">Back to Blog</span>
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          {post.tags.map((tag) => (
            <TechLabel key={tag} active>
              {">"} {tag}
            </TechLabel>
          ))}
        </div>
        <h1 className="font-sans font-bold text-5xl mb-4 tracking-tight text-charcoal dark:text-white leading-tight">
          {post.title}
        </h1>
        <div className="font-mono text-mid-gray">{post.date}</div>
      </header>

      <div className="prose-custom">
        <Content components={MDXComponents} />
      </div>

      <footer className="mt-24 pt-12 border-t border-light-slate dark:border-dark-slate text-center">
        <p className="font-sans text-mid-gray mb-6">Thanks for reading. More technical insights to follow.</p>
        <Link 
          to="/blog" 
          className="font-mono text-sm uppercase tracking-wider text-bright-blue hover:underline"
        >
          Return to directory
        </Link>
      </footer>
    </article>
  )
}
