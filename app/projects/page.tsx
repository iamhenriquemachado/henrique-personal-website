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
    icon: "D",
    name: "DevUtilities",
    description: "A collection of essential tools to streamline your development workflow.",
    url: "https://github.com/iamhenriquemachado/devutilities",
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
        I'm a new developer working on building projects. Over the months, I've created some smaller projects, and I'm especially proud of a few of them. Some of them are open-source, so if something catches your eye, feel free to check out the code and contribute if you have any suggestions for improvements
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

