import * as React from "react"
import { cn } from "../../lib/utils"

export interface TabsProps {
  tabs: { label: string; content: React.ReactNode }[]
  defaultIndex?: number
  className?: string
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex = 0, className }) => {
  const [index, setIndex] = React.useState(defaultIndex)
  return (
    <div className={cn("w-full", className)}>
      <div className="flex gap-2 border-b border-accent2 mb-4">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={cn(
              "px-4 py-2 font-header text-base transition-colors",
              index === i ? "border-b-2 border-cta text-cta" : "text-accent2 hover:text-primary"
            )}
            onClick={() => setIndex(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[index]?.content}</div>
    </div>
  )
}
