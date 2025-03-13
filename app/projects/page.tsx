import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  icon: string
  name: string
  description: string
  url: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    icon: "V",
    name: "Vain",
    description: "Simplifying the way to provide and use aesthetic services in Brazil.",
    url: "https://vainapp.com.br",
  },
  {
    icon: "SN",
    name: "SnipShare",
    description: "The all-in-one platform for creating, executing, and sharing Node.js code snippets.",
    url: "https://github.com/username/snipshare",
    githubUrl: "https://github.com/username/snipshare",
  },
  {
    icon: "GC",
    name: "GitGlean",
    description: "Effortlessly navigate large GitHub repositories with a fast, intuitive semantic search.",
    url: "https://github.com/username/git-glean",
    githubUrl: "https://github.com/username/git-glean",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Things I've made trying to put my dent in the universe.
        </h1>

        <p className="text-muted-foreground mb-12 text-lg">
          I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Some of
          them are open-source, so if you see something that piques your interest, check out the code and contribute if
          you have ideas for how it can be improved.
        </p>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group p-6 bg-card rounded-lg border transition-colors hover:bg-accent/50 purple-border-hover"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-medium text-sm">
                    {project.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold group-hover:text-primary transition-colors purple-glow-hover">
                      {project.name}
                    </h2>
                    <p className="text-muted-foreground mt-1">{project.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  )}
                  <Link
                    href={project.url}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="sr-only">Visit Project</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

