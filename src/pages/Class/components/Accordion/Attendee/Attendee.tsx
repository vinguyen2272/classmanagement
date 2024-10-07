import { PrimeReactProvider } from 'primereact/api'
import { Indicator } from '../../../../../assets/svg'
import Template from '../AccordionTemplate/Template'
import styles from './Attendee.module.css'

import AttendeeItems from './AttendeeItems'

interface Props {
  planned: number
  accepted: number
  actual: number
  attendeeType?: string
  disabled?: boolean
  isShow?: number
}

export default function Attendee({
  planned,
  accepted,
  actual,
  attendeeType = 'Fresher',
  disabled = false,
  isShow = 0,
}: Props) {
  return (
    <PrimeReactProvider>
      <div id="attendeeAccordion" className={styles.attendeeAccordion}>
        <Template
          icon={<Indicator.GradeIcon color="white" />}
          header={'Attendee'}
          subheader={attendeeType}
          disabled={disabled}
          isShow={isShow}
        >
          <div className={styles.attendeeContainer}>
            <AttendeeItems
              label={'Planned'}
              value={planned}
              bgColor="var(--primary-color)"
            />
            <AttendeeItems
              label={'Accepted'}
              value={accepted}
              bgColor="#285D9A"
            />
            <AttendeeItems
              label={'Actual'}
              value={actual}
              bgColor="white"
              color="black"
            />
          </div>
        </Template>
      </div>
    </PrimeReactProvider>
  )
}
