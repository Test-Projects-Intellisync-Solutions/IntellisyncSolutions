import * as React from "react"
import { cn } from "../../lib/utils"

export interface CommandProps {
  onCommand: (cmd: string) => void
  placeholder?: string
  className?: string
}

export const Command: React.FC<CommandProps> = ({ onCommand, placeholder = "Type a command...", className }) => {
  const [input, setInput] = React.useState("")
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      onCommand(input.trim())
      setInput("")
    }
  }
  return (
    <input
      className={cn("w-full h-10 px-3 py-2 rounded-md border border-accent2 bg-surface text-primary font-body focus:outline-none focus:ring-2 focus:ring-cta", className)}
      value={input}
      onChange={e => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
    />
  )
}
