import CalendarEvent from './Event/CalendarEvent'
import type { EventInfo } from './Types/Type'

interface TooltipProps {
  info: EventInfo | null
  position: { top: number; left: number }
  width: number
  blurClass: string
}

const Tooltip = ({ info, position, width, blurClass }: TooltipProps) => {
  if (!info) return null

  return (
    <div
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        width: width,
        zIndex: 1000,
      }}
    >
      <CalendarEvent event={info} blurClass={blurClass} />
    </div>
  )
}

export default Tooltip
