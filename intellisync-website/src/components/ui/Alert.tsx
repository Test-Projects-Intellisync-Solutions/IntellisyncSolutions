import * as React from "react"
import { cn } from "../../lib/utils"

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive"
}

const alertVariants = {
  default: "bg-surface text-primary border-accent2",
  destructive: "bg-error text-white border-error",
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "relative w-full rounded-lg border p-4 flex items-start gap-3 font-body",
        alertVariants[variant],
        className
      )}
      {...props}
    />
  )
)
Alert.displayName = "Alert"
