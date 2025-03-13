import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="" className={cn("font-bold text-xl flex items-center", className)}>
      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground mr-2">
        H
      </div>
      <span className="hidden sm:inline-block">Henrique</span>
    </Link>
  )
}

