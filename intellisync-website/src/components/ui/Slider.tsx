import * as React from "react"
import { cn } from "../../lib/utils"

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  min?: number
  max?: number
  step?: number
}

export const Slider: React.FC<SliderProps> = ({ min = 0, max = 100, step = 1, className, ...props }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      className={cn(
        "w-full h-2 accent-cta bg-accent2 rounded-lg appearance-none cursor-pointer",
        className
      )}
      {...props}
    />
  )
}
