import * as React from "react"
import { cn } from "../../lib/utils"

export interface DialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, className, children, ...props }) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null)

  React.useEffect(() => {
    if (open) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      className={cn("rounded-lg bg-surface shadow-lg border border-accent2 p-6", className)}
      onClose={() => onOpenChange?.(false)}
      {...props}
    >
      {children}
    </dialog>
  )
}
