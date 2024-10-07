import { Calendar } from 'primereact/calendar'
import { NavigationMenu } from '../../../../../assets/svg'
import Template from '../AccordionTemplate/Template'
import styles from './TimeFrame.module.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'
import { addLocale, PrimeReactProvider } from 'primereact/api'
import { useState } from 'react'

interface Props {
  commenceDate: string
  completionDate: string
  schedule?: string[]
  disabled?: boolean
  isShow?: number
}

addLocale('en-ThaiVDQ2', {
  firstDayOfWeek: 0,
  dayNames: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  dayNamesMin: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
})

export default function TimeFrameInput({
  commenceDate,
  completionDate,
  schedule = [completionDate, commenceDate, '2022-04-29'],
  disabled = false,
  isShow = 0,
}: Props) {
  const [startDate, setStartDate] = useState<Date>()

  return (
    // <PrimeReactProvider>
    <div id="timeFrameAccordion" className={styles.timeFrameAccordion}>
      <Template
        icon={<NavigationMenu.CalendarIcon color="white" />}
        header={'Time Frame'}
        subheader={
          <div>
            <span>start date</span>
            <div className={styles.startDateInput}>
              <Calendar
                value={startDate}
                onChange={e => {
                  e.value && setStartDate(e.value)
                }}
                dateFormat="dd/mm/yy"
                placeholder={'--/--/----'}
                showIcon
              />
            </div>
          </div>
        }
        disabled={disabled}
        isShow={isShow}
      >
        <div className={styles.container}>
          <Calendar
            value={schedule.map(date => new Date(date))}
            selectionMode="multiple"
            numberOfMonths={2}
            inline
            style={{ width: '100%' }}
            showOtherMonths={false}
            locale="en-ThaiVDQ2"
          />
        </div>
      </Template>
    </div>
    // </PrimeReactProvider>
  )
}
