import { Dropdown } from 'primereact/dropdown'
import { Indicator } from '../../../../../assets/svg'
import Template from '../AccordionTemplate/Template'
import styles from './Attendee.module.css'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'

import AttendeeItems from './AttendeeItems'
import { useState } from 'react'
import { PrimeReactProvider } from 'primereact/api'
import AttendeeItemsInput from './AttendeeItemsInput'

interface Props {
  planned?: number
  accepted?: number
  actual?: number
  attendeeType?: string
  isShow?: number
  disabled?: boolean
}

export default function AttendeeInput({ isShow = 0, disabled = false }: Props) {
  const ATTENDEETYPE = [
    { name: 'Internship', code: 'IN' },
    { name: 'Fresher', code: 'FR' },
    { name: 'Junior', code: 'JU' },
    { name: 'Senior', code: 'SE' },
    { name: 'Leader', code: 'LE' },
  ]
  const [attendeeType, setAttendeeType] = useState()
  const [planned, setPlanned] = useState<string | undefined>()
  const [accepted, setAccepted] = useState<string | undefined>()
  const [actual, setActual] = useState<string>()

  return (
    <PrimeReactProvider>
      <div id="attendeeAccordion" className={styles.attendeeAccordion}>
        <Template
          icon={<Indicator.GradeIcon color="white" />}
          header={'Attendee'}
          subheader={
            <div className={styles.dropdownWrapper}>
              <Dropdown
                value={attendeeType}
                onChange={e => setAttendeeType(e.value)}
                options={ATTENDEETYPE}
                optionLabel="name"
                editable
                placeholder="Select"
                className={styles.dropdown}
                // onClick={e => e.stopPropagation()}
              />
            </div>
          }
          isShow={isShow}
          disabled={disabled}
        >
          <div className={styles.attendeeContainer}>
            <AttendeeItemsInput
              label={'Planned'}
              bgColor="var(--primary-color)"
              handleChange={value => setPlanned(value)}
              parentValue={planned}
            />
            <AttendeeItemsInput
              label={'Accepted'}
              bgColor="#285D9A"
              parentValue={accepted}
              handleChange={value => setAccepted(value)}
            />
            <AttendeeItemsInput
              label={'Actual'}
              bgColor="white"
              color="black"
              parentValue={actual}
              handleChange={value => setActual(value)}
            />
          </div>
        </Template>
      </div>
    </PrimeReactProvider>
  )
}
