import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Column } from 'primereact/column'
import { Link, useNavigate } from 'react-router-dom'
import { Menu } from 'primereact/menu'
import { Table } from '../../../components/Table/Table'
import styles from './ListOfSyllabus.module.css'
import { Calendar } from 'primereact/calendar'
import { Button } from 'primereact/button'
import ActionButtons from '../components/ActionButton/ActionButton'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import type { Syllabus } from '../../../context/Interface/Syllabus'
import { getAdmin } from '../../../features/admin/adminSlice'
import {
  getSyllabuses,
  deleteSyllabus,
  duplicateSyllabus,
} from '../../../features/syllabus/syllabusFetchSlice'
import { ConfirmDialog } from 'primereact/confirmdialog'
import { ReportProblemIcon } from '../../../assets/svg/Indicator/Indicator'
import ButtonUnderlined from '../../../components/Button/ButtonUnderlined'
import ButtonContained from '../../../components/Button/ButtonContained'

const ListOfSyllabus: React.FC = () => {
  const menu = useRef<any>(null)
  const calendarRef = useRef<any>(null)
  const data = useAppSelector(state => state.syllabus.syllabuses)
  const admin = useAppSelector(state => state.admin.adminState)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchTerms, setSearchTerms] = useState<string[]>([])
  const [createdOnDate, setCreatedOnDate] = useState<Date | null>(null)
  const [visibleDialog, setVisibleDialog] = useState(false)
  const [selectedSyllabus, setSelectedSyllabus] = useState<Syllabus | null>(
    null
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const confirm = (data: Syllabus) => {
    setSelectedSyllabus(data)
    setVisibleDialog(true)
  }

  const onHideDialog = () => {
    setVisibleDialog(false)
  }

  const accept = () => {
    if (selectedSyllabus) {
      dispatch(deleteSyllabus(selectedSyllabus.syllabusId))
      setVisibleDialog(false)
    }
  }

  const reject = () => {
    setVisibleDialog(false)
  }
  // Duplicate Info
  // const duplicate = (data: Syllabus) => {
  //   const _data = { ...data, id: Date.now() }
  //   dispatch(duplicateSyllabus(_data))
  // }
  const [updateData, setUpdateData] = useState<Syllabus[]>(data)
  const onHandleDuplicateSyllabus = (data: Syllabus) => {
    const _data = { ...data, id: Date.now() }
    setUpdateData([...updateData, _data])

    dispatch(duplicateSyllabus(_data))
  }
  useEffect(() => {
    dispatch(getSyllabuses())
    dispatch(getAdmin())
  }, [dispatch])
  const outputStandardTemplate = (rowData: Syllabus) => {
    return rowData.outputStandard.map((standard: string) => (
      <button key={standard} className={styles.standardButton}>
        {standard}
      </button>
    ))
  }

  const statusTemplate = (rowData: Syllabus) => {
    const statusSyllabuses = {
      active: styles.active,
      inactive: styles.inactive,
      draft: styles.draft,
    }
    return (
      <button
        className={`${statusSyllabuses[rowData.status]} ${styles.standardButton}`}
      >
        {rowData.status}
      </button>
    )
  }

  const syllabusTemplate = (rowData: Syllabus) => (
    <Link to={`/syllabus/${rowData.syllabusId}/detail`} className={styles.link}>
      <b>{rowData.name}</b>
    </Link>
  )

  const codeTemplate = (rowData: Syllabus) => (
    <Link to={`/syllabus/${rowData.syllabusId}/detail`} className={styles.link}>
      {rowData.code}
    </Link>
  )

  const createdOnTemplate = (rowData: Syllabus) => (
    <Link to={`/syllabus/${rowData.syllabusId}/detail`} className={styles.link}>
      {new Date(rowData.creationDate).toLocaleDateString()}
    </Link>
  )

  const createdByTemplate = (rowData: Syllabus) => {
    const adminSelected = admin.filter(
      (item, index) => Number(item.adminId) === rowData.createdBy
    )

    return (
      <Link to={`/syllabus/${rowData.syllabusId}/detail`} className={styles.link}>
        {adminSelected[0]?.name}
      </Link>
    )
  }

  const durationTemplate = (rowData: Syllabus) => (
    <Link to={`/syllabus/${rowData.syllabusId}/detail`} className={styles.link}>
      {rowData.duration} days
    </Link>
  )

  const actionsTemplate = (rowData: Syllabus) => {
    return (
      <ActionButtons
        onHandleDelete={() => confirm(rowData)}
        onHandleDuplicate={() => {
          onHandleDuplicateSyllabus(rowData)
        }}
      />
    )
  }

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchTerms(prevTerms => [...prevTerms, searchTerm])
      setSearchTerm('')
    }
  }

  const removeSearchTerm = (term: string) => {
    setSearchTerms(prevTerms => prevTerms.filter(t => t !== term))
  }

  const filteredData = data.filter(item => {
    const searchFilter = searchTerms.length
      ? searchTerms.every(
          term =>
            item.name.toLowerCase().includes(term.toLowerCase()) ||
            item.code.toLowerCase().includes(term.toLowerCase())
        )
      : true

    let dateFilter = true

    if (createdOnDate) {
      const inputDate = new Date(createdOnDate)
      if (isNaN(inputDate.getTime())) {
        alert(
          'Invalid date format. Please enter a valid date in MM/DD/YYYY format.'
        )
        dateFilter = false
      } else {
        dateFilter =
          new Date(item.creationDate).toDateString() ===
          inputDate.toDateString()
      }
    }

    return searchFilter && dateFilter
  })
  const handleCalendarIconClick = () => {
    if (calendarRef.current) {
      calendarRef.current.focus()
    }
  }

  const [content, setContent] = useState('<p>Hello, ProseMirror!</p>')

  const handleContentChange = (newContent: string) => {
    setContent(newContent)
  }
  return (
    <div className={styles.container}>
      <div className={styles.h1}>Syllabus</div>
      <div className={styles.searchContainer}>
        <div className={styles.filter}>
          <span className="p-input-icon-left">
            <i
              className={`pi pi-search ${styles.iconSearch}`}
              onClick={() =>
                (
                  document.querySelector(
                    `.${styles.searchInput}`
                  ) as HTMLInputElement
                )?.focus()
              }
            />
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search by..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
          </span>
          <span className={styles.calendar} onClick={handleCalendarIconClick}>
            <i className={`pi pi-calendar ${styles.iconCalendar}`} />
            <Calendar
              ref={calendarRef}
              value={createdOnDate}
              onChange={e => setCreatedOnDate(e.value as Date)}
              className={styles.calendarComponent}
              placeholder="Created Date"
            />
          </span>
        </div>

        <div className={styles.more}>
          <Button className={styles.import}>
            <i className="pi pi-upload" style={{ marginRight: '8px' }} />
            Import
          </Button>
          <Button
            className={styles.add}
            onClick={() => navigate('/syllabus/create')}
          >
            <i className="pi pi-plus" style={{ marginRight: '8px' }} />
            Add Syllabus
          </Button>
        </div>
      </div>
      <div className={styles.filterTags}>
        {searchTerms.map((term, index) => (
          <button
            key={index}
            className={styles.searchTerm}
            onClick={() => removeSearchTerm(term)}
          >
            {term}
            <i className={`pi pi-times ${styles.iconTimes}`} />
          </button>
        ))}
      </div>
      <div className={styles.tableContainer}>
        <Table data={filteredData}>
          <Column
            field="syllabus"
            header="Syllabus"
            body={syllabusTemplate}
            sortable
          />
          <Column field="code" header="Code" body={codeTemplate} sortable />
          <Column
            field="createdOn"
            header="Created On"
            body={createdOnTemplate}
            sortable
          />
          <Column
            field="createdBy"
            header="Created By"
            body={createdByTemplate}
            sortable
          />
          <Column
            field="duration"
            header="Duration"
            body={durationTemplate}
            sortable
          />
          <Column header="Output Standard" body={outputStandardTemplate} />
          <Column header="Status" body={statusTemplate} sortable />
          <Column header="Actions" body={actionsTemplate} />
        </Table>
      </div>
      <ConfirmDialog
        className={styles.dialogContainer}
        visible={visibleDialog}
        onHide={onHideDialog}
        message={`Do you really want to delete ${selectedSyllabus?.name} class? This class cannot be restored.`}
        header={
          <div className={styles.dialogHeader}>
            <ReportProblemIcon color="var(--orange-color)" />
            <span>Delete Class</span>
          </div>
        }
        footer={
          <div className={styles.dialogFooter}>
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

export default ListOfSyllabus
