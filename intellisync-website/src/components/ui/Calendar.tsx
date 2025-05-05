import * as React from "react"
import { cn } from "../../lib/utils"
import { addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, format } from "date-fns"

export interface CalendarProps {
  value: Date
  onChange: (date: Date) => void
  className?: string
}

export const Calendar: React.FC<CalendarProps> = ({ value, onChange, className }) => {
  const [currentMonth, setCurrentMonth] = React.useState(startOfMonth(value))

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-2">
      <button className="text-accent2" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>{"<"}</button>
      <span className="font-header text-base">{format(currentMonth, "MMMM yyyy")}</span>
      <button className="text-accent2" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>{">"}</button>
    </div>
  )

  const renderDays = () => {
    const days = []
    const startDate = startOfWeek(currentMonth)
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="w-8 text-center font-header text-xs text-accent2">
          {format(addDays(startDate, i), "EEE")}
        </div>
      )
    }
    return <div className="flex">{days}</div>
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)
    const rows = []
    let days = []
    let day = startDate
    let formattedDate = ""
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d")
        const isDisabled = !isSameMonth(day, monthStart)
        days.push(
          <button
            key={day.toString()}
            className={cn(
              "w-8 h-8 flex items-center justify-center rounded-full font-body text-sm",
              isSameDay(day, value) ? "bg-cta text-white" : isDisabled ? "text-accent2 opacity-40" : "hover:bg-accent1 hover:text-primary"
            )}
            onClick={() => !isDisabled && onChange(day)}
            disabled={isDisabled}
          >
            {formattedDate}
          </button>
        )
        day = addDays(day, 1)
      }
      rows.push(<div key={day.toString()} className="flex">{days}</div>)
      days = []
    }
    return <div>{rows}</div>
  }

  return (
    <div className={cn("inline-block p-4 bg-surface rounded-xl border border-accent2", className)}>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  )
}
