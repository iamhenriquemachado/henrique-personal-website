import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function AboutPage() {
  // Social media links component to reuse
  const SocialLinks = ({ className = "" }) => (
    <div className={`flex items-center space-x-5 ${className}`}>
      <Link
        href="https://twitter.com"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="h-5 w-5" />
      </Link>
      <Link
        href="https://github.com"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="GitHub"
      >
        <Github className="h-5 w-5" />
      </Link>
      <Link
        href="https://linkedin.com"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5" />
      </Link>
      <Link
        href="mailto:email@example.com"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Email"
      >
        <Mail className="h-5 w-5" />
      </Link>
    </div>
  )

  return (
    <div className="container max-w-3xl mx-auto px-4 py-16 md:py-24">
      <div className="space-y-16">
        {/* Profile section */}
        <section className="flex flex-col items-center text-center space-y-6">
          <Image
            src="/placeholder.svg?height=120&width=120"
            alt="Profile picture"
            width={120}
            height={120}
            className="rounded-full"
            priority
          />

          <h1 className="text-3xl font-medium tracking-tight">
            Software engineer, systems scaling expert, and open-source contributor.
          </h1>

          <SocialLinks />
        </section>

        {/* Bio section */}
        <section className="space-y-6 text-lg leading-relaxed">
          <p>
            I'm Your Name, a software engineer based in City. I specialize in building robust and scalable applications,
            with a focus on performance and user experience.
          </p>

          <p>
            I have always loved creating things. I wrote my first program when I was 12 years old— Minecraft server
            plugins using Java. This early passion for coding evolved into a career building systems that serve millions
            of users.
          </p>

          <p>
            When I'm not at my computer, I'm probably traveling, exploring new places, or trying out new restaurants.
            I'm particularly drawn to cold places, though warm destinations have their charm too.
          </p>
        </section>

        {/* Experience section */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium">Experience</h2>

          <div className="space-y-8">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Senior Software Engineer</h3>
                <span className="text-sm text-muted-foreground">2021 — Present</span>
              </div>
              <p className="text-muted-foreground">Company Name</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Software Engineer</h3>
                <span className="text-sm text-muted-foreground">2018 — 2021</span>
              </div>
              <p className="text-muted-foreground">Previous Company</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Junior Developer</h3>
                <span className="text-sm text-muted-foreground">2016 — 2018</span>
              </div>
              <p className="text-muted-foreground">First Company</p>
            </div>
          </div>
        </section>

        {/* Bottom social links */}
        <section className="pt-8 border-t">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm text-muted-foreground">Connect with me</p>
            <SocialLinks />
          </div>
        </section>
      </div>
    </div>
  )
}

