import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"

export default function AboutPage() {
  // Social media links component to reuse
  const SocialLinks = ({ className = "" }) => (
    <div className={`flex items-center space-x-5 ${className}`}>
      <Link
        href="https://github.com/iamhenriquemachado"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="GitHub"
        target="_blank"
      >
        <Github className="h-5 w-5" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/henriquecmachado/"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="LinkedIn"
        target="_blank"
      >
        <Linkedin className="h-5 w-5" />
      </Link>
      <Link
        href="mailto:heyhenriquecastro@gmail.com"
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Email"
        target="_blank"
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
            src="/profile.jpeg?height=200&width=200"
            alt="Profile picture"
            width={200}
            height={200}
            className="rounded-full"
            priority
          />

          <h1 className="text-3xl font-medium tracking-tight">
            Passionate about coding, problem-solving, and delivering impactful solutions.
          </h1>

          <SocialLinks />
        </section>

        {/* Bio section */}
        <section className="space-y-6 text-lg leading-relaxed">
          <p>
            I'm Henrique, an aspiring software developer passionate about coding and building impactful applications.
            I'm currently sharpening my skills in backend development and seeking an opportunity to grow and contribute in the tech industry.
          </p>

          <p>
            My journey in programming began with a deep curiosity about how systems work. Over time, this curiosity turned into a passion for
            designing and developing efficient, scalable solutions that enhance user experiences.
          </p>

          <p>
            Outside of coding, I enjoy exploring new places, discovering great food, and experiencing different cultures.
            While I’m drawn to cold destinations, I appreciate the warmth of new adventures.
          </p>

        </section>

        {/* Experience section */}
        <section className="space-y-6">
          <h2 className="text-xl font-medium">Experience</h2>

          <div className="space-y-8">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Support Engineer</h3>
                <span className="text-sm text-muted-foreground">2022 — Present</span>
              </div>
              <p className="text-muted-foreground">H&CO Technology Advisors</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">SAP S/4 HANA Business Analyst & Support Engineer</h3>
                <span className="text-sm text-muted-foreground">2018 — 2021</span>
              </div>
              <p className="text-muted-foreground">Coopercitrus</p>
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

