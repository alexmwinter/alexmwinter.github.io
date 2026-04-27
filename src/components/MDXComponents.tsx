import * as React from "react"
import { cn } from "@/lib/utils"

export const MDXComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-sans font-bold text-4xl mt-12 mb-6 tracking-tight text-charcoal dark:text-white",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-sans font-bold text-2xl mt-10 mb-4 tracking-tight text-charcoal dark:text-white",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-sans font-bold text-xl mt-8 mb-4 tracking-tight text-charcoal dark:text-white",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("font-sans text-lg leading-relaxed mb-6 text-charcoal/80 dark:text-white/80", className)}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        "font-sans text-bright-blue hover:underline underline-offset-4 transition-all",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("list-disc list-inside mb-6 space-y-2", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("list-decimal list-inside mb-6 space-y-2", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("font-sans text-lg", className)} {...props} />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "font-mono text-sm px-1.5 py-0.5 rounded bg-off-white dark:bg-dark-slate text-charcoal dark:text-white",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <div className="rounded-[8px] bg-dark-slate overflow-hidden border border-white/10 shadow-lg mb-8">
      <div className="bg-[#0f172a] px-6 py-2 border-t-2 border-deep-blue flex justify-end items-center">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-bright-blue" />
        </div>
      </div>
      <pre
        className={cn(
          "p-6 overflow-x-auto font-mono text-sm leading-relaxed",
          className
        )}
        {...props}
      />
    </div>
  ),
}
