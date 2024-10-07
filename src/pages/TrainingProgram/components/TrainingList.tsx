/* eslint-disable @typescript-eslint/consistent-type-imports */
import 'primeicons/primeicons.css'
import { Column, ColumnBodyOptions } from 'primereact/column'

import { ConfirmDialog } from 'primereact/confirmdialog'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { Table } from '../../../components/Table/Table'
import TagContained from '../../../components/Tag/TagContained'
import { CourseModel } from '../../../context/Interface/CourseModel'
import {
  deletePrograms,
  duplicatePrograms,
  getAllPrograms,
} from '../../../features/program/trainingProgramSlice'
import ActionTable from './ActionTable'
import { Admin } from '../../../context/Interface/Admin'

import styles from './TrainingList.module.css'

interface TrainingListProps {
  data: CourseModel[]
  loading: boolean
  admins: Admin[]
}

export default function TrainingList({
  data,
  loading,
  admins,
}: TrainingListProps) {
  const [visible, setVisible] = useState(false)
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(
    null
  )

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function randomID(length = 8) {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

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

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const durationInMs = end.getTime() - start.getTime()
    const durationInDays = Math.ceil(durationInMs / (1000 * 60 * 60 * 24))

    return `${durationInDays} day${durationInDays > 1 ? 's' : ''}`
  }

  const handleDelete = (id: string) => {
    dispatch(deletePrograms(id)).then(resultAction => {
      if (deletePrograms.fulfilled.match(resultAction)) {
        dispatch(getAllPrograms())
      }
    })
  }

  const handleDuplicateProgram = (program: CourseModel) => {
    const newProgram = { ...program, courseId: randomID() }

    dispatch(duplicatePrograms(newProgram)).then(resultAction => {
      if (duplicatePrograms.fulfilled.match(resultAction)) {
        dispatch(getAllPrograms())
      }
    })
  }

  const actionTable = (data: CourseModel, option: ColumnBodyOptions) => {
    return (
      <ActionTable
        data={data}
        onHandleVisible={setVisible}
        onHandleSelectProgram={setSelectedProgramId}
        onHandleDuplicateProgram={handleDuplicateProgram}
      />
    )
  }

  const dateBody = (course: CourseModel) => {
    return formatDate(course.creationDate)
  }

  const getSeverity = (course: CourseModel) => {
    switch (course.status) {
      case 'status 1':
        return 'primary'

      case 'status 2':
        return 'secondary'

      case 'status 3':
        return 'blue'

      default:
        return 'primary'
    }
  }

  const programNameBody = (course: CourseModel) => {
    return (
      <span
        onClick={() => navigate(`/training-program/detail/${course.courseId}`)}
      >
        {course.courseName}
      </span>
    )
  }

  const statusBodyTemplate = (course: CourseModel) => {
    return <TagContained value={course.status} color={getSeverity(course)} />
  }

  const durationBodyTemplate = (course: CourseModel) => {
    return calculateDuration(course.startTime, course.endTime)
  }

  const adminBodyTemplate = (course: CourseModel) => {
    const adminSelected = admins.find(
      item => item.adminId === course.createdBy
    )?.name
    return <span> {adminSelected} </span>
  }

  const accept = () => {
    handleDelete(selectedProgramId!)
  }

  const reject = () => {}

  return (
    <div className="w-[100%] px-[30px] mt-3">
      <Table data={data}>
        <Column field="courseId" header="ID" sortable></Column>
        <Column
          body={programNameBody}
          header="Program name"
          sortable
          style={{
            fontWeight: 600,
            cursor: 'pointer',
          }}
        ></Column>
        <Column header="Create on" body={dateBody} sortable></Column>
        <Column body={adminBodyTemplate} header="Created by" sortable></Column>
        <Column body={durationBodyTemplate} header="Duration" sortable></Column>
        <Column body={statusBodyTemplate} header="Status" sortable></Column>
        <Column body={actionTable}></Column>

        {loading && <span>Loading...</span>}
      </Table>

      <div>
        <ConfirmDialog
          visible={visible}
          onHide={() => setVisible(false)}
          message="Are you sure you want to delete this program?"
          header="Confirmation"
          icon="pi pi-exclamation-triangle"
          accept={accept}
          reject={reject}
          breakpoints={{ '1100px': '75vw', '960px': '100vw' }}
          className={styles.dialogContainer}
        />
      </div>
    </div>
  )
}
