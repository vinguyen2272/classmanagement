import Template from '../AccordionTemplate/Template'
import GeneralItem from './GeneralItem'

import styles from './General.module.css'
import {
  Delivery,
  Indicator,
  NavigationMenu,
  Other,
} from '../../../../../assets/svg'
import { InputText } from 'primereact/inputtext'
import { useState } from 'react'
import { Calendar } from 'primereact/calendar'
import { Nullable } from 'vitest'
import { Dropdown } from 'primereact/dropdown'

interface Props {
  classTime?: {
    from: { hour: string; minute: string }
    to: { hour: string; minute: string }
  }
  location?: string[]
  trainer?: string[]
  admin?: string[]
  FSU?: string
  email?: string
  createdDate?: string
  createdBy?: string
  reviewedDate?: string
  reviewedBy?: string
  approvedDate?: string
  approvedBy?: string
  disabled?: boolean
  isShow?: number
}

export default function GeneralInput({
  classTime = {
    from: { hour: '09', minute: '00' },
    to: { hour: '12', minute: '00' },
  },
  location = ['Ftown1', 'Ftown2'],
  trainer = ['Trainer1', 'Trainer2'],
  admin = ['Admin1', 'Admin2'],
  FSU = 'FSU',
  email = 'anhhungxadieu@gmail',
  createdDate = '2022-01-01',
  createdBy = 'John Doe',
  reviewedDate = '2022-01-02',
  reviewedBy = 'Jane Doe',
  approvedDate = '2022-01-03',
  approvedBy = 'Mark Johnson',
  disabled = false,
  isShow = 0,
}: Props) {
  const [fromTime, setFromTime] = useState<Date>()
  const [toTime, setToTime] = useState<Date>()
  const [locationInput, setLocationInput] = useState<string>()
  const [adminInput, setAdminInput] = useState<string>()
  const [FSUInput, setFSUInput] = useState<string>()
  const [contactInput, setContactInput] = useState<string>()

  const LOCATION = [
    { name: 'Ftown 1', code: 'F1' },
    { name: 'Ftown 2', code: 'F1' },
    { name: 'Ftown 3', code: 'F3' },
  ]
  const ADMIN = [{ name: 'admin 1' }, { name: 'admin 2' }, { name: 'admin 3' }]
  const CONSTFSU = [{ name: 'FSA' }, { name: 'FSA' }]
  const CONTACT = [
    { name: 'contact1@gmail.com' },
    { name: 'contact2@gamail.com' },
  ]

  return (
    <div id="generalAccordion" className={styles.generalAccordion}>
      <Template
        header="General"
        icon={<NavigationMenu.CalendarIcon color="white" />}
        disabled={disabled}
        isShow={isShow}
      >
        <div className={styles.generalContainer}>
          <GeneralItem
            label={'Class time'}
            icon={<Other.AlarmIcon color="#285D9A" />}
          >
            <div className={styles.classTimeInputWrapper}>
              <p className={styles.textNormal}>from</p>
              <Calendar
                value={fromTime}
                onChange={e => {
                  if (e.value !== null) {
                    setFromTime(e.value)
                  }
                }}
                timeOnly
                className={styles.cusTimeCalendar}
              />
              <p className={styles.textNormal}>to</p>
              <Calendar
                value={toTime}
                onChange={e => {
                  if (e.value !== null) {
                    setToTime(e.value)
                  }
                }}
                timeOnly
                className={styles.cusTimeCalendar}
              />
            </div>
          </GeneralItem>
          <GeneralItem
            label={'Location'}
            icon={<Other.HomeWorkIcon color="#285D9A" />}
          >
            <Dropdown
              value={locationInput}
              onChange={e => setLocationInput(e.value)}
              options={LOCATION}
              optionLabel="name"
              editable
              placeholder="Select"
              className={styles.cusDropdown}
              // onClick={e => e.stopPropagation()}
            />
          </GeneralItem>
          <GeneralItem
            label={'Trainer'}
            icon={<Delivery.ConceptIcon color="#8B8B8B" />}
            disabled={true}
          ></GeneralItem>
          <GeneralItem
            label={'Admin'}
            icon={<Indicator.GradeIcon color="#285D9A" />}
          >
            <Dropdown
              value={adminInput}
              onChange={e => setAdminInput(e.value)}
              options={ADMIN}
              optionLabel="name"
              placeholder="Select"
              className={styles.cusDropdown}
            />
          </GeneralItem>
          <GeneralItem
            label={'FSU'}
            icon={<Indicator.SupplierIcon color="#285D9A" />}
          >
            <Dropdown
              value={FSUInput}
              onChange={e => setFSUInput(e.value)}
              options={CONSTFSU}
              optionLabel="name"
              placeholder="Select"
              className={styles.cusDropdown}
            />
            <Dropdown
              value={contactInput}
              onChange={e => setContactInput(e.value)}
              options={CONTACT}
              optionLabel="name"
              placeholder="Contact"
              className={styles.cusDropdown}
            />
          </GeneralItem>

          <div className={styles.separateLine}></div>

          <GeneralItem label={'Created'} disabled={true}></GeneralItem>
          <GeneralItem label={'Review'} disabled={true}></GeneralItem>
          <GeneralItem label={'Approve'} disabled={true}></GeneralItem>
        </div>
      </Template>
    </div>
  )
}
