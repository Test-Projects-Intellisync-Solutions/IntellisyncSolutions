import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const buttonVariants = {
  default: "bg-accent1 text-[#232946] font-bold hover:bg-accent1/90",
  destructive: "bg-error text-white hover:bg-accent1",
  outline: "border border-accent2 bg-transparent text-primary hover:bg-surface",
  secondary: "bg-surface text-primary hover:bg-accent1",
  ghost: "bg-transparent text-primary hover:bg-surface",
  link: "underline text-cta hover:text-accent1",
}

const sizeVariants = {
  default: "h-10 px-4 py-2",
  sm: "h-8 px-3",
  lg: "h-12 px-6",
  icon: "h-10 w-10 p-0",
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-body font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cta disabled:opacity-50 disabled:pointer-events-none",
          buttonVariants[variant],
          sizeVariants[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
