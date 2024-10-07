/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Column } from 'primereact/column'
import { ConfirmDialog } from 'primereact/confirmdialog'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { AddIcon } from '../../../assets/svg/Action/Action'
import { ReportProblemIcon } from '../../../assets/svg/Indicator/Indicator'
import ButtonContained from '../../../components/Button/ButtonContained'
import ButtonUnderlined from '../../../components/Button/ButtonUnderlined'
import FilteringTool from '../../../components/FilteringTool/FilteringTool'
import { Table } from '../../../components/Table/Table'
import TagContained from '../../../components/Tag/TagContained'
import type { Class } from '../../../context/Interface/Class'
import { getAdmin } from '../../../features/admin/adminSlice'
import {
  deleteClass,
  deleteSearchClassTag,
  duplicateClass,
  getClasses,
  searchClassTag,
} from '../../../features/class/classSlice'
import ActionButtons from '../components/ActionButton/ActionButton'
import style from './ListOfClass.module.css'

export const ListOfClass = () => {
  const data = useAppSelector(state => state.class.classes)
  const admin = useAppSelector(state => state.admin.adminState)
  const [updateData, setUpdateData] = useState<string>()
  const [visibleDialog, setVisibleDialog] = useState(false)
  const [selectedClass, setSelectedClass] = useState<Class | null>(null)
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const searchValue = useAppSelector(state => state.class.searchValue)

  useEffect(() => {
    dispatch(getClasses())
    dispatch(getAdmin())
  }, [dispatch])

  const onHideDialog = () => {
    setVisibleDialog(false)
  }

  // Delete Info
  const confirm = (data: Class) => {
    setSelectedClass(data)
    setVisibleDialog(true)
  }

  const accept = () => {
    if (selectedClass) {
      dispatch(deleteClass(selectedClass.classId))
      setVisibleDialog(false)
    }
  }

  const reject = () => {
    setVisibleDialog(false)
  }
  // Duplicate Info
  const duplicate = (data: Class) => {
    const _data = { ...data, id: Date.now() }
    dispatch(duplicateClass(_data))
  }

  const actionBodyTemplate = (data: Class) => {
    return (
      <ActionButtons
        classId={data.classId}
        onHandleDelete={() => confirm(data)}
        onHandleDuplicate={() => {
          duplicate(data)
        }}
      />
    )
  }

  // Created on
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
  const dateBodyTemplate = (data: Class) => {
    return formatDate(data.creationDate)
  }

  // Duration
  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const durationInMs = end.getTime() - start.getTime()
    const durationInDays = Math.ceil(durationInMs / (1000 * 60 * 60 * 24))

    if (durationInDays < 7) {
      return `${durationInDays} day${durationInDays > 1 ? 's' : ''}`
    } else {
      const durationInWeeks = Math.ceil(durationInDays / 7)
      return `${durationInWeeks} week${durationInWeeks > 1 ? 's' : ''}`
    }
  }

  const durationBodyTemplate = (data: Class) => {
    return calculateDuration(data.creationDate, data.completionDate)
  }

  // Created by
  const adminBodyTemplate = (data: Class) => {
    const adminSelected = admin.filter(
      (item, index) => item.adminId === data.createdBy
    )
    return adminSelected[0]?.name
  }

  // Attendee
  const locationBodyTemplate = (data: Class) => {
    return data.location.join(', ')
  }

  // Sort at Class
  const classBodyTemplate = (data: Class) => {
    return <Link to={`/class/detail/${data.classId}`}>{data.className}</Link>
  }
  const handleDeleteTag = (item: string) => {
    dispatch(deleteSearchClassTag(item))
  }

  const attendeeBodyTemplate = (data: Class) => {
    return <TagContained value={data.attendeeType} color={getAttendee(data)} />
  }

  const getAttendee = (item: Class) => {
    switch (item.attendeeType) {
      case 'intern':
        return 'primary'

      case 'Online fee-fresher':
        return 'green'

      case 'fresher':
        return 'peach'

      case 'Offline fee-fresher':
        return 'orange'

      default:
        return 'primary'
    }
  }

  const filteredData =
    searchValue && searchValue.length > 0
      ? data?.filter(item => {
          return searchValue.every(key =>
            Object.values(item).some(value =>
              value.toString().toLowerCase().includes(key.toLowerCase())
            )
          )
        })
      : data

  return (
    <div>
      <h1 className={style.title}>Training Class</h1>
      <div className={style.contentContainer}>
        <div className={style.searchContainer}>
          <div className={style.search}>
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search" />
              <InputText
                value={inputValue}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    dispatch(searchClassTag(inputValue))
                    setInputValue('')
                  }
                }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setUpdateData(e.target.value)
                  setInputValue(e.target.value)
                }}
                placeholder="Search by..."
              />
            </IconField>
            <FilteringTool />
          </div>
          <ButtonContained
            onHandleClick={() => {
              navigate('/class/create')
            }}
          >
            <AddIcon color="white" />
            <span>Add new</span>
          </ButtonContained>
        </div>
        <div className={style.tagContainer}>
          {searchValue.map((item, index) => {
            return (
              <TagContained
                icon="pi pi-times"
                key={index}
                value={item}
                onHandleClick={e => {
                  handleDeleteTag(item)
                }}
              />
            )
          })}
        </div>
        {filteredData && (
          <Table data={filteredData}>
            <Column header="Class" body={classBodyTemplate} sortable />
            <Column header="Class Code" field="classCode" sortable />
            <Column header="Created on" body={dateBodyTemplate} sortable />
            <Column header="Created by" body={adminBodyTemplate} sortable />
            <Column header="Duration" body={durationBodyTemplate} sortable />
            <Column header="Attendee" body={attendeeBodyTemplate} sortable />
            <Column header="Location" body={locationBodyTemplate} sortable />
            <Column header="FSU" field="FSU" />
            <Column
              headerStyle={{ width: '5rem', textAlign: 'center' }}
              bodyStyle={{ textAlign: 'center', overflow: 'visible' }}
              body={actionBodyTemplate}
            />
          </Table>
        )}
      </div>

      <ConfirmDialog
        className={style.dialogContainer}
        visible={visibleDialog}
        onHide={onHideDialog}
        message={`Do you really want to delete ${selectedClass?.className} class? This class cannot be restored.`}
        header={
          <div className={style.dialogHeader}>
            <ReportProblemIcon color="var(--orange-color)" />
            <span>Delete Class</span>
          </div>
        }
        footer={
          <div className={style.dialogFooter}>
            <ButtonUnderlined onHandleClick={reject}>Cancel</ButtonUnderlined>
            <ButtonContained color="primary" onHandleClick={accept}>
              Delete
            </ButtonContained>
          </div>
        }
      />
    </div>
  )
}
