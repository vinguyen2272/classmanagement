import General from '../components/Accordion/General/General'
import Attendee from '../components/Accordion/Attendee/Attendee'
import TimeFrame from '../components/Accordion/TimeFrame/TimeFrame'
import { PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'
import CusTooltip from '../components/Tooltip/CusTooltip'
import { useRef } from 'react'
import styles from './ClassDetail.module.css'
import Header from '../components/Header/Header'
import SyllabusCardWithAvatar from '../../../components/SyllabusCardWithAvatar/SyllabusCardWithAvatar'
import TrainingDetail from '../components/TrainingDetail/TrainingDetail'
import AttendeeEdit from '../components/Accordion/Attendee/AttendeeInput'
import GeneralInput from '../components/Accordion/General/GeneralInput'
import TimeFrameInput from '../components/Accordion/TimeFrame/TimeFrameInput'

import {syllabusDataHasImage} from '../ClassEdit/ClassEdit'

export default function ClassDetail() {
  // const timeFrameRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <PrimeReactProvider>
        <div className={styles.headerWrapper}>
          <Header></Header>
        </div>
        <div className={styles.classInfoWrapper}>
          <div
            style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}
          >
            <General />
            {/* <GeneralInput /> */}
            <Attendee planned={10} accepted={10} actual={10} />
            {/* <AttendeeEdit /> */}
          </div>
          <div>
            <TimeFrame
              commenceDate={'2022-04-22'}
              completionDate={'2022-05-22'}
            />
            {/* <TimeFrameInput commenceDate={''} completionDate={''} /> */}
          </div>
        </div>
        <div className={styles.trainingDetail}>
          <TrainingDetail syllabusData={syllabusDataHasImage} />
        </div>
      </PrimeReactProvider>
    </>
  )
}
