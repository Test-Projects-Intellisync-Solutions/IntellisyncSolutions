import * as React from "react"
import { cn } from "../../lib/utils"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, className, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "w-full h-10 rounded-md border border-accent2 bg-surface px-3 py-2 text-primary font-body focus:outline-none focus:ring-2 focus:ring-cta focus:border-cta transition-colors",
        className
      )}
      {...props}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  )
)
Select.displayName = "Select"
