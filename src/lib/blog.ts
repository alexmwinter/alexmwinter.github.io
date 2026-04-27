import { externalPosts } from "@/data/externalPosts"
import type { PostMetadata } from "@/data/externalPosts"

// Use Vite's glob import to get all MDX files in the blog directory
const mdxPosts = import.meta.glob("@/content/blog/*.mdx", { eager: true })

export interface Post extends PostMetadata {
  slug: string
  component?: any
}

export function getAllPosts(): Post[] {
  const internalPosts: Post[] = Object.keys(mdxPosts).map((path) => {
    const module = mdxPosts[path] as any
    const slug = path.split("/").pop()?.replace(".mdx", "") || ""
    
    return {
      slug,
      ...module.frontmatter,
      component: module.default,
    }
  })

  const posts: Post[] = [
    ...internalPosts,
    ...externalPosts.map((p) => ({ ...p, slug: p.externalUrl || "" })),
  ]

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts()
  return posts.find((p) => p.slug === slug)
}
