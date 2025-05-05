import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Variant can be any string. Known variants get special styles, unknown variants fallback to generic styling.
   */
  variant?: string;
}

/**
 * Mapping of known variants to styles. Add more as needed.
 */
const variantClasses: Record<string, string> = {
  default: "bg-gray-100 text-gray-800",
  accent: "bg-blue-100 text-blue-800",
  error: "bg-red-100 text-red-800",
  secondary: "bg-indigo-100 text-indigo-800",
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  // Fallback to a generic badge style for unknown variants
  const appliedVariant = variantClasses[variant] || "bg-gray-200 text-gray-700";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        appliedVariant,
        className
      )}
      {...props}
    />
  );
}
Badge.displayName = "Badge"
