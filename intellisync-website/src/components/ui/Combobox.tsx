import * as React from "react"
import { cn } from "../../lib/utils"

export interface ComboboxProps {
  options: { label: string; value: string }[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export const Combobox: React.FC<ComboboxProps> = ({ options, value, onChange, placeholder = "Select...", className }) => {
  const [input, setInput] = React.useState("")
  // Show the label of the selected value in the input when not filtering
  const displayValue = input !== "" ? input : (options.find(opt => opt.value === value)?.label || "")
  const filtered = options.filter(opt => opt.label.toLowerCase().includes(input.toLowerCase()))

  return (
    <div className={cn("relative", className)}>
      <input
        className="w-full h-10 px-3 py-2 rounded-md border border-accent2 bg-surface text-primary font-body focus:outline-none focus:ring-2 focus:ring-cta"
        value={displayValue}
        onChange={e => setInput(e.target.value)}
        placeholder={placeholder}
        onBlur={() => setInput("")}
      />
      {(input !== "" || !value) && input && (
        <div className="absolute left-0 right-0 bg-surface border border-accent2 rounded-md mt-1 z-50 max-h-40 overflow-auto">
          {filtered.length ? filtered.map(opt => (
            <div
              key={opt.value}
              className="px-3 py-2 cursor-pointer hover:bg-accent1 hover:text-primary"
              onMouseDown={() => { onChange(opt.value); setInput("") }}
            >
              {opt.label}
            </div>
          )) : (
            <div className="px-3 py-2 text-accent2">No results</div>
          )}
        </div>
      )}
    </div>
  )
}