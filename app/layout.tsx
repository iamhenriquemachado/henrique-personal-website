import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { CommandMenu } from "@/components/command-menu"
import { CommandMenuProvider } from "@/components/command-menu-context"
import { Logo } from "@/components/logo"
import { CommandMenuTrigger } from "@/components/command-menu-trigger"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Personal Website",
  description: "Software engineer, systems scaling expert, and open-source contributor",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CommandMenuProvider>
            <div className="min-h-screen flex flex-col bg-background">
              <header className="container mx-auto py-6">
                <div className="flex items-center justify-between">
                  <Logo />
                  <MainNav />
                  <div className="flex items-center gap-4">
                    <CommandMenuTrigger />
                    <ThemeToggle />
                  </div>
                </div>
              </header>
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <CommandMenu />
          </CommandMenuProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'