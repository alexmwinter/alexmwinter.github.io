import { Link } from "react-router-dom"
import { TechLabel } from "@/components/ui/design-system"
import { getAllPosts } from "@/lib/blog"
import type { Post } from "@/lib/blog"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function BlogCard({ post }: { post: Post }) {
  const isExternal = !!post.externalUrl
  
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (isExternal) {
      return (
        <a 
          href={post.externalUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block group"
        >
          {children}
        </a>
      )
    }
    return (
      <Link to={`/blog/${post.slug}`} className="block group">
        {children}
      </Link>
    )
  }

  return (
    <CardWrapper>
      <Card className="rounded-[12px] bg-white dark:bg-charcoal border-light-slate dark:border-dark-slate group-hover:border-bright-blue transition-all duration-300 shadow-none h-full flex flex-col">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <div className="flex flex-wrap gap-2">
              {(post.tags ?? []).map((tag) => (
                <TechLabel key={tag} className="text-[12px]">
                  {">"} {tag}
                </TechLabel>
              ))}
            </div>
            {isExternal && (
              <ExternalLink className="size-4 text-mid-gray group-hover:text-bright-blue transition-colors" />
            )}
          </div>
          <CardTitle className="font-sans font-bold text-2xl group-hover:text-bright-blue transition-colors leading-tight">
            {post.title}
          </CardTitle>
          <div className="font-mono text-sm text-mid-gray mt-2">{post.date}</div>
        </CardHeader>
        <CardContent>
          <p className="font-sans text-mid-gray leading-relaxed line-clamp-3">
            {post.description}
          </p>
        </CardContent>
      </Card>
    </CardWrapper>
  )
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <TechLabel active className="mb-4 block">02 // BLOG</TechLabel>
      <h1 className="section-heading mb-16 text-charcoal dark:text-white">Selected Writings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
