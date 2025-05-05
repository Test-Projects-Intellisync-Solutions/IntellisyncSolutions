import * as React from "react"
import { cn } from "../../lib/utils"

export interface DropdownMenuProps {
  trigger: React.ReactNode
  items: { label: string; onClick?: () => void; disabled?: boolean }[]
  className?: string
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ trigger, items, className }) => {
  const [open, setOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [open])

  return (
    <div className={cn("relative inline-block", className)} ref={menuRef}>
      <span onClick={() => setOpen(o => !o)}>{trigger}</span>
      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-surface border border-accent2 z-50">
          {items.map((item, idx) => (
            <button
              key={idx}
              className={cn("block w-full text-left px-4 py-2 font-body text-primary hover:bg-accent2 disabled:opacity-50", item.disabled && "cursor-not-allowed")}
              onClick={item.onClick}
              disabled={item.disabled}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
