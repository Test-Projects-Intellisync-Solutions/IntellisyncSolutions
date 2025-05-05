import * as React from "react"
import { cn } from "../../lib/utils"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose: () => void
  message: string
  variant?: "default" | "error"
  duration?: number
}

const toastVariants = {
  default: "bg-surface text-primary border-accent2",
  error: "bg-error text-white border-error",
}

export const Toast: React.FC<ToastProps> = ({ open, onClose, message, variant = "default", duration = 3000, className, ...props }) => {
  React.useEffect(() => {
    if (!open) return
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [open, duration, onClose])

  if (!open) return null
  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-50 px-6 py-3 rounded-lg shadow-lg border font-body transition-all animate-fade-in-up",
        toastVariants[variant],
        className
      )}
      {...props}
    >
      {message}
    </div>
  )
}
