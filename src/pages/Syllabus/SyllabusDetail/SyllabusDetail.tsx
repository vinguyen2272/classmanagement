import type { AppDispatch, RootState } from '../../../app/store'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch, useSelector } from 'react-redux'
import styles from './SyllabusDetail.module.css'
import Outline from './Outline/Outline'
import {
  getSyllabusById,
  getSyllabuses,
} from '../../../features/syllabus/syllabusFetchSlice'
import ActionButtons from '../components/ActionButton_Details/ActionButton'
import type { Syllabus } from '../../../context/Interface/Syllabus'
import { useAppSelector } from '../../../app/hooks'
import { getAdmin } from '../../../features/admin/adminSlice'
import SyllabusTabsOption from '../../../components/SyllabusTabsOption/SyllabusTabsOption'
import { Button } from 'primereact/button'
import General from './General/General'
import TrainingMaterial from './TrainingMaterial/TrainingMaterial'

const SyllabusDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch<AppDispatch>()
  // const syllabus = useSelector((state: RootState) =>
  //   id ? selectSyllabusById(state, id) : null
  // )
  const syllabus = useAppSelector(state =>
    state.syllabus.syllabuses.find(s => s.syllabusId === id)
  )
  const confirm = (data: Syllabus) => {
    // setSelectedSyllabus(data)
  }
  const admin = useAppSelector(state => state.admin.adminState)
  const onHandleDeactivate = (data: Syllabus) => {}

  const onHandleDuplicateSyllabus = (data: Syllabus) => {
    const _data = { ...data, id: Date.now() }
    // handle duplication logic
  }
  const adminSelected = admin.filter(
    (item, index) => Number(item.adminId) === syllabus?.createdBy
  )
  useEffect(() => {
    if (id) {
      dispatch(getSyllabuses())
       dispatch(getAdmin())
      dispatch(getSyllabusById(parseInt(id, 10)))
    }
  }, [dispatch, id])

  const statusSyllabuses = {
    active: styles.active,
    inactive: styles.inactive,
    draft: styles.draft,
  }
  const tabsName = ['General', 'Outline', 'Training material']
  const tabsElement = [<General />, <Outline />, <TrainingMaterial />]
  return (
    <div className={styles.container}>
      <div className={`${styles.h1}`}>Syllabus</div>
      {syllabus ? (
        <div>
          <div className={`${styles.titleActions}`}>
            <div className={`${styles.title}`}>
              <div className={`${styles.h1} ${styles.h1bigger}`}>
                {syllabus.name}
              </div>
              <div>
                <button
                  className={`${statusSyllabuses[syllabus.status]} ${styles.standardButton}`}
                >
                  {syllabus.status.charAt(0).toUpperCase() +
                    syllabus.status.slice(1)}
                </button>
              </div>
            </div>
            <div className={styles.actions}>
              <ActionButtons
                onHandleDelete={() => confirm(syllabus)}
                onHandleDuplicate={() => {
                  onHandleDuplicateSyllabus(syllabus)
                }}
                onHandleDeactivate={() => {
                  onHandleDeactivate(syllabus)
                }}
              />
            </div>
          </div>

          <div className={styles.code}>{syllabus.code} v4.0</div>
          <hr></hr>

          <div className={styles.duration}>
            <span className={styles.h1}>{syllabus.duration}</span> days{' '}
            <i>({syllabus.duration * 24} hours)</i>
          </div>

          <div className={styles.modified}>
            Modified on {syllabus.creationDate} by{' '}
            <b> {adminSelected[0]?.name}</b>
          </div>

          <section className={styles.syllabusCreate}>
       
            <div className={styles.tabsControl}>
              <SyllabusTabsOption
                tabsName={tabsName}
                tabsElement={tabsElement}
              />
            </div>
          
          </section>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default SyllabusDetail
