import * as React from "react"
import { cn } from "@/lib/utils"

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export const Switch: React.FC<SwitchProps> = ({ checked, onCheckedChange, className, ...props }) => {
  return (
    <label className={cn("inline-flex items-center cursor-pointer", className)}>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={e => onCheckedChange?.(e.target.checked)}
        {...props}
      />
      <span className="w-10 h-6 flex items-center bg-accent2 rounded-full p-1 duration-300 ease-in-out">
        <span
          className={cn(
            "bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out",
            checked ? "translate-x-4 bg-cta" : "translate-x-0 bg-surface"
          )}
        />
      </span>
    </label>
  )
}
