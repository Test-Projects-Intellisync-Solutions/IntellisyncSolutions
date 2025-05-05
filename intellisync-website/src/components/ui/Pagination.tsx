import * as React from "react"
import { cn } from "../../lib/utils"

export interface PaginationProps {
  page: number
  pageCount: number
  onPageChange: (page: number) => void
  className?: string
}

export const Pagination: React.FC<PaginationProps> = ({ page, pageCount, onPageChange, className }) => {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)
  return (
    <div className={cn("flex gap-2 items-center", className)}>
      <button
        className="px-3 py-1 rounded bg-accent2 text-surface hover:bg-accent1"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        Prev
      </button>
      {pages.map(p => (
        <button
          key={p}
          className={cn(
            "px-3 py-1 rounded font-header",
            p === page ? "bg-cta text-white" : "bg-surface text-primary hover:bg-accent2"
          )}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}
      <button
        className="px-3 py-1 rounded bg-accent2 text-surface hover:bg-accent1"
        onClick={() => onPageChange(Math.min(pageCount, page + 1))}
        disabled={page === pageCount}
      >
        Next
      </button>
    </div>
  )
}
