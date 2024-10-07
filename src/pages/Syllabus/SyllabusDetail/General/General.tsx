import { useEffect, useState } from 'react'
import { setCreateStage } from '../../../../features/syllabus/syllabusCreateSlice'
import { Dropdown } from 'primereact/dropdown'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import styles from './General.module.css'
import LevelOptions, { type LevelOptionsType } from './levelSelect'
import { InputText } from 'primereact/inputtext'
import TimeAllocation from '../TimeAllocation/TimeAllocation'
import { useParams } from 'react-router-dom'
import {
  FilterCenterFocusIcon,
  GradeIcon,
  VerifiedUserIcon,
} from '../../../../assets/svg/Indicator/Indicator'
import {
  GroupIcon,
  SettingIcon,
} from '../../../../assets/svg/NavigationMenu/NavigationMenu'

const General = () => {
  const { id } = useParams<{ id: string }>()
  const syllabus = useAppSelector(state =>
    state.syllabus.syllabuses.find(s => s.syllabusId === id)
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setCreateStage('general'))
  }, [dispatch])

  const [levelSelectedOption, setLevelSelectedOption] =
    useState<LevelOptionsType | null>(null)

  function handleChange(e: { value: LevelOptionsType }): void {
    setLevelSelectedOption(e.value)
  }
  const timeAllocationData: number[] = [54, 29, 9, 1, 6]

  return (
    <div className={styles.general}>
      <div className={styles.tabElement}>
        <div className={styles.item_top}>
          <div className={styles.form}>
            <div className={styles.container}>
              <div className={styles.item}>
                <GradeIcon />
                <label className={styles.label} htmlFor="level">
                  Level
                </label>
                <div className={styles.value}>{syllabus?.level}</div>
              </div>
              <div className={styles.item}>
                <GroupIcon />
                <label className={styles.label} htmlFor="attendee">
                  Attendee number
                </label>
                <div className={styles.value}>{syllabus?.attendeeNumber}</div>
              </div>
              <div className={styles.item}>
                <VerifiedUserIcon />
                <label className={styles.label} htmlFor="output">
                  Output standards
                </label>
                <div className={styles.value}>
                  {syllabus?.outputStandard.map((standard: string) => (
                    <button key={standard} className={styles.standardButton}>
                      {standard}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.techRequirement}>
            <div className={styles.item}>
              <SettingIcon></SettingIcon>
              <p className={styles.TagName}>Technical Requirement(s)</p>
            </div>
            <ul className={styles.techRequirementList}>
              <p>
                Trainees’ PCs need to have following software installed & run
                without any issues:
              </p>
              <li>
                Microsoft SQL Server 2005 Express (in which the trainees can
                create & manipulate on their own database
              </li>
              <li>Microsoft Visual Studio 2017</li>
              <li>Microsoft Office 2007 (Visio, Word, PowerPoint)</li>
            </ul>
          </div>
        </div>
        <div className={styles.objective}>
          <div className={styles.item}>
            <FilterCenterFocusIcon></FilterCenterFocusIcon>
            <label className={styles.label} htmlFor="level">
              Course objectives
            </label>
          </div>
          <div className={styles.value}>{syllabus?.courseObjective}</div>
        </div>
      </div>

      <div className={styles.timeAllocation}>
        <TimeAllocation data={timeAllocationData} />
      </div>
    </div>
  )
}

export default General
