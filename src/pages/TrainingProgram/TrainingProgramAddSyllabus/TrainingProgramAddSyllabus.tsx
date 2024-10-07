/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Dropdown } from 'primereact/dropdown'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import ButtonContained from '../../../components/Button/ButtonContained'
import ButtonUnderlined from '../../../components/Button/ButtonUnderlined'
import {
  getCourseScheduleThunk,
  getDetailPrograms,
  programActions,
  selectCourseSchedule,
  selectDetailProgram,
} from '../../../features/program/trainingProgramSlice'
import style from './TrainingProgramAddSyllabus.module.css'
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from 'primereact/autocomplete'
import { getSyllabuses } from '../../../features/syllabus/syllabusFetchSlice'
import ProgramDetailContent from '../components/ProgramDetailContent'
import { getAdmin, selectAdmin } from '../../../features/admin/adminSlice'

export const TrainingProgramAddSyllabus = () => {
  const [value, setValue] = useState<string>('')
  const [items, setItems] = useState<string[]>([])

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getSyllabuses())
    dispatch(getCourseScheduleThunk('1'))
    dispatch(getDetailPrograms('1'))
    dispatch(getAdmin())
  }, [dispatch])

  const syllabuses = useAppSelector(state => state.syllabus.syllabuses)
  console.log('syllabuses:', syllabuses)
  const programDetail = useAppSelector(selectDetailProgram)
  const courseSchedule = useAppSelector(selectCourseSchedule)
  const admins = useAppSelector(selectAdmin)

  const search = (event: AutoCompleteCompleteEvent) => {
    const syllabusName = syllabuses.map(item => item.name)
    setItems(syllabusName)
  }

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const durationInMs = end.getTime() - start.getTime()
    const durationInDays = Math.ceil(durationInMs / (1000 * 60 * 60 * 24))

    return `${durationInDays} `
  }

  const admin = admins.find(
    item => item.adminId === programDetail?.createdBy
  )?.name

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate)

    const day = date.getUTCDate()
    const month = date.getUTCMonth() + 1
    const year = date.getUTCFullYear()

    const formattedDay = day < 10 ? `0${day}` : day
    const formattedMonth = month < 10 ? `0${month}` : month

    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`
    return formattedDate
  }

  return (
    <>
      {programDetail && (
        <>
          <div className="p-[30px]">
            <p>
              <span className="font-bold text-[24px] ">
                {calculateDuration(
                  programDetail?.startTime,
                  programDetail?.endTime
                )}
              </span>
              day(s) (97 hours)
            </p>

            <p>
              Modified on {formatDate(programDetail.creationDate)} by
              <span className="font-bold"> {admin}</span>
            </p>
          </div>

          <ProgramDetailContent
            course={programDetail}
            calculateDuration={calculateDuration}
            formatDate={formatDate}
            admin={admin}
            courseSchedule={courseSchedule}
          />
        </>
      )}
      <div className={style.contentContainer}>
        <div className={style.classInput}>
          <h3>Search syllabus</h3>
          <AutoComplete
            value={value}
            suggestions={items}
            completeMethod={search}
            onChange={e => setValue(e.value)}
            className={style.autoCompleteInput}
          />
          <ButtonContained onHandleClick={() => {}}>Create</ButtonContained>
        </div>
        <div className={style.buttonContainer}>
          <ButtonContained
            onHandleClick={() => {
              dispatch(
                programActions.setSelectProgramStep('create training program')
              )
            }}
          >
            Back
          </ButtonContained>
          <div className={style.button}>
            <ButtonUnderlined>Cancel</ButtonUnderlined>
            <ButtonContained>Save</ButtonContained>
          </div>
        </div>
      </div>
    </>
  )
}
