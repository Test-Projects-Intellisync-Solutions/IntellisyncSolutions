import * as React from "react"
import { cn } from "../../lib/utils"

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl bg-surface shadow-md border border-accent2 p-6",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"
