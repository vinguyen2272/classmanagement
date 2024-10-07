import { Action, Delivery } from '../../../../assets/svg'
import styles from './Header.module.css'

export default function Header({
  title = 'Fresher Develop Operation',
  classTitle = 'HCM22_FR_DevOps_01',
  day = 31,
  time = 97,
  classOnly = false,
  editHeader = false,
  date,
  name,
  button,
}: {
  title?: string
  classTitle?: string
  day?: number
  time?: number
  classOnly?: boolean
  editHeader?: boolean
  date?: string
  name?: string
  button?: React.ReactNode
}) {
  if (classOnly) {
    return (
      <div className={styles.headerOnly}>
        <h3 className={styles.headerClassTop}>Class</h3>
      </div>
    )
  } else if (editHeader) {
    return (
      <div className={styles.headerEdit}>
        <div className={styles.headerInfoEdit}>
          <div className={styles.headerDetailEdit}>
            <h3 className={styles.headerClassTopEdit}>{classTitle}</h3>
            <div className={styles.headerNameEdit}>
              <h2>{title}</h2>
              {button}
            </div>
          </div>
          <div className={styles.headerMoreEdit}>
            <Action.MoreHorizontalIcon
              color={editHeader ? 'black' : 'white'}
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className={styles.headerActionEdit}>
          <div className={styles.headerDayEdit}>
            <span className={styles.mainText}>{day}</span>
            <span className={styles.subText}>days ({time} hours)</span>
          </div>
          <div className={styles.headerDayModified}>
            <span>
              Modified on {date} by {name}
            </span>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.header}>
      <div className={styles.headerInfo}>
        <div className={styles.headerDetail}>
          <h3 className={styles.headerClassTop}>Class</h3>
          <div className={styles.headerName}>
            <h2>{title}</h2>
            {button}
          </div>
          <h3 className={styles.headerClassBottom}>{classTitle}</h3>
        </div>
        <div className={styles.headerMore}>
          <Action.MoreHorizontalIcon color="white" width={30} height={30} />
        </div>
      </div>
      <div className={styles.headerAction}>
        <div className={styles.headerDay}>
          <span className={styles.mainText}>{day}</span>
          <span className={styles.subText}>days ({time} hours)</span>
        </div>
        <div className={styles.headerBtn}>
          <button>
            <Delivery.AssignmentIcon color="white" />
          </button>
          <button>
            <Delivery.ConceptIcon color="white" />
          </button>
          <button>
            <Delivery.ExamIcon color="white" />
          </button>
          <button>
            <Delivery.SeminarIcon color="white" />
          </button>
          <button>
            <Delivery.GuideIcon color="white" />
          </button>
        </div>
      </div>
    </div>
  )
}
