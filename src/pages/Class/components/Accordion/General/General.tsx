import Template from '../AccordionTemplate/Template'
import GeneralItem from './GeneralItem'

import styles from './General.module.css'
import {
  Delivery,
  Indicator,
  NavigationMenu,
  Other,
} from '../../../../../assets/svg'

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

export default function General({
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
            <p className={styles.textNormal}>
              {classTime?.from.hour +
                ':' +
                classTime?.from.minute +
                ' - ' +
                classTime?.to.hour +
                ':' +
                classTime?.to.minute}
            </p>
          </GeneralItem>
          <GeneralItem
            label={'Location'}
            icon={<Other.HomeWorkIcon color="#285D9A" />}
          >
            {location &&
              location.map((location, index) => (
                <p key={'location' + index} className={styles.textNormal}>
                  {location}
                </p>
              ))}
          </GeneralItem>
          <GeneralItem
            label={'Trainer'}
            icon={<Delivery.ConceptIcon color="#285D9A" />}
          >
            {trainer &&
              trainer.map((trainer, index) => (
                <p key={'trainer' + index} className={styles.linkText}>
                  {trainer}
                </p>
              ))}
          </GeneralItem>
          <GeneralItem
            label={'Admin'}
            icon={<Indicator.GradeIcon color="#285D9A" />}
          >
            {admin &&
              admin.map((admin, index) => (
                <p key={'admin' + index} className={styles.linkText}>
                  {admin}
                </p>
              ))}
          </GeneralItem>
          <GeneralItem
            label={'FSU'}
            icon={<Indicator.SupplierIcon color="#285D9A" />}
          >
            <p className={styles.textNormal}>{FSU}</p>
            <p className={styles.textNormal}>{email}</p>
          </GeneralItem>

          <div className={styles.separateLine}></div>

          <GeneralItem label={'Created'}>
            <p className={styles.textNormal}>
              {createdDate} by {createdBy}
            </p>
          </GeneralItem>
          <GeneralItem label={'Review'}>
            <p className={styles.textNormal}>
              {reviewedDate} by {reviewedBy}
            </p>
          </GeneralItem>
          <GeneralItem label={'Approve'}>
            <p className={styles.textNormal}>
              {approvedDate} by {approvedBy}
            </p>
          </GeneralItem>
        </div>
      </Template>
    </div>
  )
}
