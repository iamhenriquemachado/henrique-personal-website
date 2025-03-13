"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import { useCommandMenu } from "./command-menu-context"

export function CommandMenuTrigger() {
  const [mounted, setMounted] = useState(false)
  const { toggleOpen } = useCommandMenu()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isMac = navigator.userAgent.toLowerCase().indexOf("mac") !== -1

  return (
    <Button
      variant="outline"
      size="sm"
      className="text-sm text-muted-foreground hidden md:flex items-center gap-2 transition-all hover:bg-accent/50 hover:text-foreground dark:hover:bg-accent/30 dark:hover:text-primary"
      onClick={toggleOpen}
    >
      <Search className="h-3.5 w-3.5" />
      <span>Search...</span>
      <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground">
        <span className="text-xs">{isMac ? "⌘" : "Ctrl"}</span>K
      </kbd>
    </Button>
  )
}

