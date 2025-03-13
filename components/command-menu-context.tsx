"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface CommandMenuContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  toggleOpen: () => void
}

const CommandMenuContext = createContext<CommandMenuContextType | undefined>(undefined)

export function CommandMenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen((prev) => !prev)

  return <CommandMenuContext.Provider value={{ isOpen, setIsOpen, toggleOpen }}>{children}</CommandMenuContext.Provider>
}

export function useCommandMenu() {
  const context = useContext(CommandMenuContext)
  if (context === undefined) {
    throw new Error("useCommandMenu must be used within a CommandMenuProvider")
  }
  return context
}

