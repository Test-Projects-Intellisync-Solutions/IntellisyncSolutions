import * as React from "react"
import { cn } from "@/lib/utils"

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode
}

export const Avatar: React.FC<AvatarProps> = ({ className, fallback, ...props }) => {
  const [errored, setErrored] = React.useState(false)
  return errored || !props.src ? (
    <div className={cn("w-10 h-10 rounded-full bg-accent2 flex items-center justify-center font-header text-lg text-surface", className)}>
      {fallback || <span>?</span>}
    </div>
  ) : (
    <img
      className={cn("w-10 h-10 rounded-full object-cover", className)}
      onError={() => setErrored(true)}
      {...props}
    />
  )
}
