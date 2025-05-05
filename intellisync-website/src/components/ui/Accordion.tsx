import * as React from "react"
import { cn } from "../../lib/utils"

export interface AccordionItem {
  label: string
  content: React.ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  defaultOpen?: number[]
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({ items, defaultOpen = [], className }) => {
  const [openIndexes, setOpenIndexes] = React.useState<number[]>(defaultOpen)
  const toggle = (idx: number) => setOpenIndexes(open => open.includes(idx) ? open.filter(i => i !== idx) : [...open, idx])
  return (
    <div className={cn("w-full", className)}>
      {items.map((item, idx) => (
        <div key={idx} className="border-b border-accent2">
          <button
            className={cn("w-full flex justify-between items-center py-3 font-header text-lg text-primary focus:outline-none", openIndexes.includes(idx) ? "text-cta" : "")}
            onClick={() => toggle(idx)}
          >
            {item.label}
            <span>{openIndexes.includes(idx) ? "−" : "+"}</span>
          </button>
          {openIndexes.includes(idx) && (
            <div className="py-2 text-body text-accent2">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  )
}
