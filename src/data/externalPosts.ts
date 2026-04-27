export interface PostMetadata {
  title: string
  date: string
  tags: string[]
  description: string
  externalUrl?: string
  slug?: string
}

export const externalPosts: PostMetadata[] = [
  {
    title: "Stratus Red Team for Use With National Clouds",
    date: "2026-02-22",
    tags: ["ADVERSARY", "EMULATION", "GO"],
    description: "Editing DataDog's Stratus Red Team for use with the Nation Clouds",
    externalUrl: "https://bmcsolved.com/blog/stratus-national-clouds"
  }
]
