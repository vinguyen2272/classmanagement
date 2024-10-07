import { useEffect, useState } from 'react'
import { setCreateStage } from '../../../../features/syllabus/syllabusCreateSlice'
import { Dropdown } from 'primereact/dropdown'
import { useAppDispatch } from '../../../../app/hooks'
import styles from './General.module.css'
import LevelOptions, { type LevelOptionsType } from './levelSelect'
import { InputText } from 'primereact/inputtext'
import TimeAllocation from '../TimeAllocation/TimeAllocation'

const General = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setCreateStage('general'));
  }, [dispatch]);

  const [levelSelectedOption, setLevelSelectedOption] =
    useState<LevelOptionsType | null>(null)

  function handleChange(e: { value: LevelOptionsType }): void {
    setLevelSelectedOption(e.value)
  }
  const timeAllocationData: number[] = [54, 29, 9, 1, 6]

  return (
    <div className={styles.general}>
      <div className={styles.tabElement}>
        <div className={styles.form}>
          <div className={styles.level}>
            <label className={styles.label} htmlFor="level">
              Level
            </label>
            <Dropdown
              value={levelSelectedOption}
              options={LevelOptions}
              onChange={handleChange}
              optionLabel="label"
              placeholder="Select an option"
              className={styles.levelSelect}
            />
          </div>
          <div className={styles.attendee}>
            <label className={styles.label} htmlFor="attendee">
              Attendee number
            </label>
            <InputText
              placeholder="Attendee number"
              className={styles.attendeeInput}
            />
          </div>
        </div>

        <div className={styles.techRequirement}>
          <p className={styles.TagName}>Technical Requirement(s)</p>
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

      <div className={styles.timeAllocation}>
        <TimeAllocation data={timeAllocationData} />
      </div>
    </div>
  )
}

export default General
