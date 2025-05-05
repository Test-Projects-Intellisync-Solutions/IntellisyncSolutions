import * as React from "react"
import { cn } from "@/lib/utils"

export interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  side?: "left" | "right" | "top" | "bottom"
}

const sideVariants = {
  left: "left-0 top-0 h-full w-80",
  right: "right-0 top-0 h-full w-80",
  top: "top-0 left-0 w-full h-64",
  bottom: "bottom-0 left-0 w-full h-64",
}

export const Sheet: React.FC<SheetProps> = ({ open, onOpenChange, side = "right", className, children, ...props }) => {
  React.useEffect(() => {
    if (open && typeof document !== "undefined") {
      document.body.style.overflow = "hidden"
      return () => { document.body.style.overflow = "" }
    }
  }, [open])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black/40" onClick={() => onOpenChange?.(false)} />
      <div
        className={cn(
          "fixed bg-surface shadow-xl transition-all duration-300 ease-in-out border border-accent2",
          sideVariants[side],
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}
