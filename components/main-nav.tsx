"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function MainNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/articles", label: "Articles" },
    { href: "/projects", label: "Projects" },
    { href: "/hire-me", label: "Hire me" },
    { href: "/uses", label: "Uses" },
  ]

  return (
    <nav className="hidden md:flex items-center space-x-8 bg-secondary/50 backdrop-blur-sm px-6 py-2 rounded-full">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm transition-colors hover:text-primary ${
              isActive ? "text-primary font-medium" : "text-muted-foreground"
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

