import { Delivery, Indicator, Other } from '../../../../assets/svg'
import type { EventInfo } from '../Types/Type'
import Style from './CalendarEvent.module.css'

interface CalendarEventProps {
  event: EventInfo
  blurClass: string
}

const CalendarEvent: React.FC<CalendarEventProps> = ({ event, blurClass }) => {
  return (
    <div className={`${Style.wrapContainer} ${blurClass}`}>
      <b>Day 10 of 20</b>
      <div className={Style.wrapContent}>
        <div className="contentLefft">
          <span className={Style.myIcon}>
            <Other.HomeWorkIcon />
            Location
          </span>
          <span className={Style.myIcon}>
            <Delivery.ConceptIcon />
            Trainer
          </span>
          <span className={Style.myIcon}>
            <Indicator.GradeIcon />
            Admin
          </span>
        </div>
        <div className="contentRight">
          <p>{event.location}</p>
          <p>{event.trainer}</p>
          <p>{event.admin}</p>
        </div>
      </div>
    </div>
  )
}

export default CalendarEvent
