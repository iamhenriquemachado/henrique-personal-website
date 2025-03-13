import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HireMePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Hire me.</h1>

        <p className="text-muted-foreground mb-12">
          Pick my brain for your next project. 
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-secondary/30 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Hire me</h2>
            <p className="text-muted-foreground mb-4">
              I'm available for freelance work and consulting. If you have a project that needs expertise in web
              development, system architecture, or performance optimization, I'd love to hear from you.
            </p>
            <Link
              href="mailto:heyhenriquecastro@gmail.com"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              Contact me
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-secondary/30 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Chat with me</h2>
            <p className="text-muted-foreground mb-4">
              Schedule a conversation with me to get to know each other better, so I can tell you my story, and
              eventually we can work together.
            </p>
            <Link href="https://calendly.com/heyhenriquecastro/30min" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors" target="_blank">
              Schedule now
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

