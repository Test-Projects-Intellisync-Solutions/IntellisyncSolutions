import * as React from "react"
import { cn } from "../../lib/utils"

export interface BreadcrumbProps {
  items: { label: string; href?: string }[]
  className?: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => (
  <nav className={cn("flex items-center gap-2 text-sm font-body text-accent2", className)} aria-label="Breadcrumb">
    {items.map((item, idx) => (
      <React.Fragment key={idx}>
        {item.href ? (
          <a href={item.href} className="hover:text-cta underline">
            {item.label}
          </a>
        ) : (
          <span className="text-primary">{item.label}</span>
        )}
        {idx < items.length - 1 && <span className="mx-1">/</span>}
      </React.Fragment>
    ))}
  </nav>
)
