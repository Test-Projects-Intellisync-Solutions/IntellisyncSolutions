import * as React from "react"
import { cn } from "../../lib/utils"

export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  popoverContent: React.ReactNode
}

export const Popover: React.FC<PopoverProps> = ({ open, onOpenChange, popoverContent, className, children, ...props }) => {
  const [visible, setVisible] = React.useState(false)
  const isOpen = open ?? visible
  return (
    <div className={cn("relative inline-block", className)} {...props}>
      <span
        onClick={() => {
          setVisible(!visible)
          onOpenChange?.(!visible)
        }}
        className="cursor-pointer"
      >
        {children}
      </span>
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-4 py-3 rounded-xl bg-surface border border-accent2 shadow-lg z-50">
          {popoverContent}
        </div>
      )}
    </div>
  )
}
