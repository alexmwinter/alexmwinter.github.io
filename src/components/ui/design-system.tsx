import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Badge } from "./badge"

export function TechLabel({ 
  children, 
  className, 
  active = false 
}: { 
  children: React.ReactNode; 
  className?: string;
  active?: boolean;
}) {
  return (
    <Badge 
      variant="outline" 
      className={cn(
        "fira-label rounded-[4px] px-2 py-1 bg-transparent border-none shadow-none",
        active ? "text-bright-blue" : "text-mid-gray",
        className
      )}
    >
      {children}
    </Badge>
  )
}

export function PrimaryButton({ 
  children, 
  className, 
  ...props 
}: React.ComponentProps<typeof Button>) {
  return (
    <Button 
      className={cn(
        "rounded-[100px] bg-bright-blue text-white hover:bg-deep-blue hover:-translate-y-[1px] transition-all active:scale-[0.98] border-none px-6 h-12 shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}

export function SecondaryButton({ 
  children, 
  className, 
  ...props 
}: React.ComponentProps<typeof Button>) {
  return (
    <Button 
      variant="outline"
      className={cn(
        "rounded-[100px] bg-transparent text-charcoal dark:text-white border-light-slate dark:border-dark-slate hover:bg-off-white dark:hover:bg-dark-slate px-6 h-12 shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}