import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import mdx from "@mdx-js/rollup"
import remarkGfm from "remark-gfm"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import rehypePrettyCode from "rehype-pretty-code"

/** @type {import('shiki').ThemeRegistration} */
const customTheme = {
  name: 'precision-greyscale',
  type: 'dark',
  colors: {
    'editor.background': '#1e293b', // Dark Slate
    'editor.foreground': '#ffffff',
  },
  tokenColors: [
    {
      name: 'Keywords',
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: { foreground: '#2563eb' } // Bright Blue
    },
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#64748b', fontStyle: 'italic' } // Mid Gray
    },
    {
      name: 'Strings',
      scope: ['string', 'punctuation.definition.string'],
      settings: { foreground: '#60a5fa' } // Lightened Blue for contrast on dark
    },
    {
      name: 'Booleans and Numbers',
      scope: ['constant.numeric', 'constant.language.boolean'],
      settings: { foreground: '#7c3aed' } // Accent Purple
    },
    {
      name: 'Functions',
      scope: ['entity.name.function', 'support.function'],
      settings: { foreground: '#2563eb' }
    },
    {
      name: 'Variables',
      scope: ['variable', 'support.variable'],
      settings: { foreground: '#ffffff' }
    }
  ]
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: customTheme,
              keepBackground: true,
            },
          ],
        ],
      }),
    },
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
