"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import type { DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import {
  Search,
  FileText,
  Briefcase,
  User,
  Moon,
  Sun,
  Home,
  Monitor,
  Settings,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useTheme } from "next-themes"
import { useCommandMenu } from "./command-menu-context"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-lg bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-4" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-14 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
))
CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[400px] overflow-y-auto overflow-x-hidden py-2", className)}
    {...props}
  />
))
CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />)
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden px-2 py-1.5 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
))
CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("mx-2 h-px bg-border", className)} {...props} />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-md px-3 py-2.5 text-sm outline-none transition-colors",
      "aria-selected:bg-accent aria-selected:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "hover:bg-accent/50 dark:hover:bg-accent/30",
      "dark:aria-selected:bg-accent/20 dark:aria-selected:text-primary",
      className,
    )}
    {...props}
  />
))
CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />
}
CommandShortcut.displayName = "CommandShortcut"

interface CommandMenuProps extends Omit<DialogProps, "open" | "onOpenChange"> {}

export function CommandMenu({ ...props }: CommandMenuProps) {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const { isOpen, setIsOpen } = useCommandMenu()
  const [inputValue, setInputValue] = React.useState("")

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault()
        setIsOpen(!isOpen)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [isOpen, setIsOpen])

  // Reset input value when dialog closes
  React.useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setInputValue("")
      }, 200) // Wait for dialog close animation
    }
  }, [isOpen])

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setIsOpen(false)
      command()
    },
    [setIsOpen],
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg max-w-2xl">
        <Command
          className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-3 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
          shouldFilter={true}
          filter={(value, search) => {
            if (value.toLowerCase().includes(search.toLowerCase())) {
              return 1
            }
            return 0
          }}
          value={inputValue}
          onValueChange={setInputValue}
        >
          <CommandInput
            placeholder="Type a command or search..."
            className="border-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Navigation">
              <CommandItem onSelect={() => runCommand(() => router.push("/"))} className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/about"))} className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>About</span>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/articles"))}
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                <span>Articles</span>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/projects"))}
                className="flex items-center gap-2"
              >
                <Briefcase className="h-4 w-4" />
                <span>Projects</span>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => router.push("/hire-me"))}
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                <span>Hire Me</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/uses"))} className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Uses</span>
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Theme">
              <CommandItem onSelect={() => runCommand(() => setTheme("light"))} className="flex items-center gap-2">
                <Sun className="h-4 w-4" />
                <span>Light Mode</span>
                {theme === "light" && (
                  <CommandShortcut>
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      ✓
                    </span>
                  </CommandShortcut>
                )}
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => setTheme("dark"))} className="flex items-center gap-2">
                <Moon className="h-4 w-4" />
                <span>Dark Mode</span>
                {theme === "dark" && (
                  <CommandShortcut>
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      ✓
                    </span>
                  </CommandShortcut>
                )}
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => setTheme("system"))} className="flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                <span>System Theme</span>
                {theme === "system" && (
                  <CommandShortcut>
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      ✓
                    </span>
                  </CommandShortcut>
                )}
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Social">
              <CommandItem
                onSelect={() => runCommand(() => window.open("https://github.com/yourusername", "_blank"))}
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
                <CommandShortcut>
                  <ExternalLink className="h-3 w-3" />
                </CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => window.open("https://twitter.com/yourusername", "_blank"))}
                className="flex items-center gap-2"
              >
                <Twitter className="h-4 w-4" />
                <span>Twitter</span>
                <CommandShortcut>
                  <ExternalLink className="h-3 w-3" />
                </CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => window.open("https://linkedin.com/in/yourusername", "_blank"))}
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
                <CommandShortcut>
                  <ExternalLink className="h-3 w-3" />
                </CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}

