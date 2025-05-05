import * as React from "react"
import { cn } from "../../lib/utils"

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  content: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export const Tooltip: React.FC<TooltipProps> = ({ content, open, onOpenChange, className, children, ...props }) => {
  const [visible, setVisible] = React.useState(false)
  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={() => { setVisible(true); onOpenChange?.(true) }}
      onMouseLeave={() => { setVisible(false); onOpenChange?.(false) }}
      {...props}
    >
      {children}
      {(open ?? visible) && (
        <div className="absolute z-50 left-1/2 -translate-x-1/2 mt-2 px-3 py-2 rounded bg-accent2 text-surface text-xs shadow-lg whitespace-nowrap">
          {content}
        </div>
      )}
    </div>
  )
}
