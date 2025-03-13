import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <nav className="flex items-center space-x-8">
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/articles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Articles
          </Link>
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="/hire-me" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Hire me
          </Link>
          <Link href="/uses" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Uses
          </Link>
        </nav>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

