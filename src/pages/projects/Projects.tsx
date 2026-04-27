import { TechLabel } from "@/components/ui/design-system"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { projects } from "@/data/projectsData"
import type { Project } from "@/data/projectsData"
import { ExternalLink, GitFork } from "lucide-react"

function ProjectCard({ title, description, techStack, demoLink, githubLink }: Project) {
  return (
    <Card className="rounded-xl bg-off-white border border-light-slate hover:border-bright-blue transition-all duration-300 h-full flex flex-col shadow-none ring-0 group">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="font-sans font-bold text-2xl text-charcoal group-hover:text-bright-blue transition-colors">
            {title}
          </CardTitle>
          <div className="flex gap-3">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-mid-gray hover:text-bright-blue transition-colors">
                <GitFork size={20} />
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-mid-gray hover:text-bright-blue transition-colors">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="font-sans text-mid-gray leading-relaxed">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 pt-4 pb-6 bg-transparent border-none">
        {techStack.map((tech) => (
          <TechLabel key={tech} active className="text-[12px] bg-white border-none px-2 py-0.5">
            {tech}
          </TechLabel>
        ))}
      </CardFooter>
    </Card>
  )
}

export default function Projects() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-charcoal pt-32 pb-24 px-6 -mt-24">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="hero-headline text-white mb-4">Engineering Portfolio</h1>
          <p className="font-sans text-xl text-mid-gray max-w-2xl">
            A selection of projects ranging from RAG-based AI implementations to complex interactive data visualizations and full-stack applications.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
