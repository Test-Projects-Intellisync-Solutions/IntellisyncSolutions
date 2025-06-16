import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gold"
  size?: "default" | "sm" | "lg" | "icon"
}

const buttonVariants = {
  default: "bg-accent1 text-[#232946] font-bold hover:bg-accent1/90",
  destructive: "bg-error text-white hover:bg-accent1",
  outline: "border border-accent2 bg-transparent text-primary hover:bg-surface",
  secondary: "bg-surface text-primary hover:bg-accent1",
  ghost: "bg-transparent text-primary hover:bg-surface",
  link: "underline text-cta hover:text-accent1 text-sm sm:text-base",
  gold: "bg-accent1 text-white font-bold hover:bg-accent1/90",
}

const sizeVariants = {
  default: "h-9 sm:h-10 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base",
  sm: "h-7 sm:h-8 px-2.5 sm:px-3 py-1 text-xs sm:text-sm",
  lg: "h-11 sm:h-12 px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg",
  icon: "h-9 w-9 sm:h-10 sm:w-10 p-0",
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-body font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cta disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap overflow-hidden text-ellipsis",
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
