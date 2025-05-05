import * as React from "react"
import { cn } from "../../lib/utils"

export interface RadioGroupProps {
  options: { label: string; value: string }[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ options, value, onChange, className }) => (
  <div className={cn("flex gap-4", className)}>
    {options.map(opt => (
      <label key={opt.value} className="flex items-center gap-2 cursor-pointer font-body">
        <input
          type="radio"
          checked={opt.value === value}
          onChange={() => onChange(opt.value)}
          className="accent-cta"
        />
        <span className={opt.value === value ? "text-cta font-semibold" : "text-accent2"}>{opt.label}</span>
      </label>
    ))}
  </div>
)
