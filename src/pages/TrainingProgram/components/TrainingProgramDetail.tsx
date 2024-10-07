import { Tag } from 'primereact/tag'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
  getCourseScheduleThunk,
  getDetailPrograms,
  selectCourseSchedule,
  selectDetailProgram,
} from '../../../features/program/trainingProgramSlice'
import ProgramDetailContent from './ProgramDetailContent'
import Title from './Title'
import { getAdmin, selectAdmin } from '../../../features/admin/adminSlice'

export default function TrainingProgramDetail() {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const programDetail = useAppSelector(selectDetailProgram)
  const admins = useAppSelector(selectAdmin)
  const courseSchedule = useAppSelector(selectCourseSchedule)

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

  useEffect(() => {
    if (id) {
      dispatch(getDetailPrograms(id))
      dispatch(getCourseScheduleThunk(id))
    }
    dispatch(getAdmin())
  }, [dispatch, id])

  return (
    <>
      {programDetail && (
        <div className="w-[100%]">
          <Title>
            <p> {programDetail?.courseName} </p>

            <div className="font-bold flex items-center ">
              <h2
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span className=" text-[40px] ">
                  {programDetail?.courseAlias}
                </span>
                <Tag
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #fff',
                    borderRadius: '40px',
                    letterSpacing: 0,
                  }}
                >
                  {programDetail?.status}
                </Tag>
              </h2>

              <i
                className="pi pi-ellipsis-h ml-auto"
                style={{
                  fontSize: '30px',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              ></i>
            </div>
          </Title>

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

          <hr className="bg-primary font-bold h-0.5" />

          <div className="px-[30px]">
            <h3 className="font-bold text-[24px]">General information</h3>

            <div className="w-[max-content] rounded-sm  py-3 shadow-lg">
              <div className="px-[30px]">
                <ul className="list-disc">
                  <li>
                    Leverage DevOps practices to transform processes with Lean,
                    Agile, and ITSM
                  </li>

                  <li>
                    Learn how to break the silos between Development and
                    Operations
                  </li>

                  <li>
                    Experiential learning with case studies, real-world success
                    stories, engaging activities, more
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {programDetail && (
            <ProgramDetailContent
              course={programDetail}
              calculateDuration={calculateDuration}
              formatDate={formatDate}
              admin={admin}
              courseSchedule={courseSchedule}
            />
          )}
        </div>
      )}

      {!programDetail && <p> No Data Found </p>}
    </>
  )
}
