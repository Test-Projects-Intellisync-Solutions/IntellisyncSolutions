import * as React from "react"
import { cn } from "../../lib/utils"

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md border border-accent2 bg-surface px-3 py-2 text-primary placeholder:text-accent2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-cta transition-colors font-body text-base",
        className
      )}
      {...props}
    />
  )
)
Input.displayName = "Input"