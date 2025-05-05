import * as React from "react"
import { cn } from "../../lib/utils"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number // 0-100
}

export const Progress: React.FC<ProgressProps> = ({ value, className, ...props }) => {
  return (
    <div className={cn("w-full h-3 bg-accent2 rounded-full overflow-hidden", className)} {...props}>
      <div
        className="h-full bg-cta transition-all duration-300"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  )
}
