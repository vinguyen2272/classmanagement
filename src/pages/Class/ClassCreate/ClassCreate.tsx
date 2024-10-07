import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'
import ButtonContained from '../../../components/Button/ButtonContained'
import Header from '../components/Header/Header'
import styles from './ClassCreate.module.css'
import Attendee from '../components/Accordion/Attendee/Attendee'
import TimeFrame from '../components/Accordion/TimeFrame/TimeFrame'
import ClassModal from '../components/ClassModal/ClassModal'
import TrainingDetail from '../components/TrainingDetail/TrainingDetail'
import TrainingEdit from '../../../components/TrainingEdit/TrainingEdit'
import type { Item } from '../../../context/Interface/Class'
import ButtonUnderlined from '../../../components/Button/ButtonUnderlined'
import SyllabusCardWithAvatar from '../../../components/SyllabusCardWithAvatar/SyllabusCardWithAvatar'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { syllabusDataNoImage } from './data'
import EditTrainingAccordion from './EditTrainingAccordion'
import GeneralInput from '../components/Accordion/General/GeneralInput'
import TimeFrameInput from '../components/Accordion/TimeFrame/TimeFrameInput'
import AttendeeInput from '../components/Accordion/Attendee/AttendeeInput'

export default function ClassCreate() {
  const [inputValue, setInputValue] = useState('')
  const [className, setClassName] = useState('')
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [isEditMode, setEditMode] = useState(false)
  const [isEditTrainingMode, setEditTrainingMode] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [syllabusData, setSyllabusData] = useState(() => {
    const data = localStorage.getItem('syllabusData')
    const updatedData = data
      ? JSON.parse(data).map((item: any) => ({
          ...item,
          isBtnDeleteProp: false,
        }))
      : []
    localStorage.setItem('syllabusData', JSON.stringify(updatedData))
    return data
      ? JSON.parse(data).length !== 0
        ? JSON.parse(data)
        : syllabusDataNoImage
      : syllabusDataNoImage
  })
  const [searchResult, setSearchResult] = useState(syllabusData)

  const handleInputClick = () => {
    setClassName(inputValue)
  }

  const handleEditMode = () => {
    const updatedData = syllabusData.map((item: any) => ({
      ...item,
      isBtnDeleteProp: !isEditMode,
    }))
    localStorage.setItem('syllabusData', JSON.stringify(updatedData))
    setSearchResult(updatedData)
    setSyllabusData(updatedData)
    setEditMode(!isEditMode)
  }

  const handleSearch = (e: any) => {
    if (e.key === 'Enter') {
      const data = syllabusData.filter((i: any) =>
        i.courseNameProp
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      )

      setSearchValue('')
      setSearchResult(data)
    }
  }

  const handleCancel = () => {
    setSelectedItem(null)
    setEditMode(false)
    setClassName('')
    setInputValue('')
    const updatedData = syllabusData.map((item: any) => ({
      ...item,
      isBtnDeleteProp: false,
    }))
    localStorage.setItem('syllabusData', JSON.stringify(updatedData))
    setSearchResult(updatedData)
    setSyllabusData(updatedData)
  }

  const handleDelete = (index: number) => {
    const updatedData = syllabusData.filter((_: any, i: any) => i !== index)
    localStorage.setItem('syllabusData', JSON.stringify(updatedData))
    setSyllabusData(updatedData)
    setSearchResult(updatedData)
  }

  const addSyllabusItem = (data: any) => {
    const days = Math.floor(data.hours / 24)
    const hours = data.hours % 24

    const newSyllabusItem = {
      avatar1Prop: '',
      avatar2Prop: '',
      avatar3Prop: '',
      courseNameProp: data.syllabus,
      activeProp: 'Active',
      isBtnDeleteProp: false,
      versionProp: 'LIN v2.0',
      durationProp: `${days} days (${hours} hours)`,
      modifiedDateProp: data.date,
      modifiedAuthorProp: 'Johny Deep',
    }

    const updatedData = [...syllabusData, newSyllabusItem]
    localStorage.setItem('syllabusData', JSON.stringify(updatedData))
    setSyllabusData(updatedData)
    setSearchResult(updatedData)
  }

  useEffect(() => {
    localStorage.setItem('syllabusData', JSON.stringify(syllabusData))
  }, [syllabusData])

  if (className === '') {
    return (
      <div className={styles.classCreateNoInput}>
        <Header classOnly />
        <div className={styles.classInput}>
          <h3>Class name</h3>
          <div>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Name the class"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <ButtonContained onHandleClick={handleInputClick}>
              Create
            </ButtonContained>
          </div>
        </div>
      </div>
    )
  } else if (isEditMode) {
    return (
      <div className={styles.classCreate}>
        <Header
          editHeader={isEditMode}
          classTitle={`Training program of ${className}`}
          title={selectedItem?.value}
          date={selectedItem?.modifiedDate}
          name={selectedItem?.modifiedAuthor}
          button={<ButtonContained color="secondary">Inactive</ButtonContained>}
        />

        <div className={styles.listCourse}>
          <h3>Content</h3>

          {searchResult.map((syllabus: any, index: number) => (
            <SyllabusCardWithAvatar
              key={index}
              isBtnDeleteClick={() => handleDelete(index)}
              {...syllabus}
            />
          ))}
        </div>

        <div className={styles.actionSyllabus}>
          <div>
            <ClassModal addSyllabusItem={addSyllabusItem} />
          </div>
          <h3>or</h3>
          <div className={styles.search}>
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search" />
              <InputText
                value={searchValue}
                onKeyDown={handleSearch}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setSearchValue(e.target.value)
                }}
                placeholder="select"
              />
            </IconField>
          </div>
        </div>

        <div className={!selectedItem ? styles.actionNoBack : styles.action}>
          <ButtonContained onHandleClick={handleEditMode}>Back</ButtonContained>
          <div>
            <ButtonUnderlined onHandleClick={handleCancel}>
              Cancel
            </ButtonUnderlined>
            <ButtonContained
              onHandleClick={() => {
                setEditTrainingMode(true)
                setEditMode(false)
              }}
            >
              Save
            </ButtonContained>
          </div>
        </div>
      </div>
    )
  } else if (isEditTrainingMode) {
    return (
      <div className={styles.classCreate}>
        <Header
          editHeader={isEditTrainingMode}
          classTitle={`Training program of ${className}`}
          title={selectedItem?.value}
          date={selectedItem?.modifiedDate}
          name={selectedItem?.modifiedAuthor}
          button={<ButtonContained color="secondary">Inactive</ButtonContained>}
        />

        <EditTrainingAccordion />

        <div className={!selectedItem ? styles.actionNoBack : styles.action}>
          <ButtonContained
            onHandleClick={() => {
              setEditTrainingMode(false)
              setEditMode(true)
            }}
          >
            Back
          </ButtonContained>
          <div>
            <ButtonUnderlined onHandleClick={handleCancel}>
              Cancel
            </ButtonUnderlined>
            <ButtonContained
              onHandleClick={() => {
                setEditTrainingMode(true)
                setEditMode(false)
              }}
            >
              Save
            </ButtonContained>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.classCreate}>
      <Header
        editHeader={isEditMode}
        classTitle="Fresher Develop Operation"
        title={className}
        button={<ButtonContained color="secondary">Planning</ButtonContained>}
      />

      <div className={styles.classCreateContent}>
        <div className={styles.classInfoWrapper}>
          <div
            style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}
          >
            <GeneralInput
              isShow={selectedItem ? 0 : 1}
              disabled={selectedItem ? false : true}
            />
            <AttendeeInput
              isShow={selectedItem ? 0 : 1}
              disabled={selectedItem ? false : true}
            />
          </div>
          <div>
            <TimeFrameInput
              commenceDate={''}
              completionDate={''}
              isShow={selectedItem ? 0 : 1}
              disabled={selectedItem ? false : true}
            />
          </div>
        </div>
      </div>

      <div className={styles.training}>
        {selectedItem ? (
          <TrainingDetail
            programNameProp={selectedItem.value}
            programDurationProp={selectedItem.duration}
            programModifiedDateProp={selectedItem.modifiedDate}
            programModifiedAuthorProp={selectedItem.modifiedAuthor}
            programIsBtnEditProp={true}
            syllabusData={syllabusData}
          />
        ) : (
          <div className={styles.trainingEdit}>
            <TrainingEdit setItem={setSelectedItem} />
          </div>
        )}
      </div>

      <div className={!selectedItem ? styles.actionNoBack : styles.action}>
        {selectedItem && (
          <ButtonContained onHandleClick={() => setSelectedItem(null)}>
            Back
          </ButtonContained>
        )}
        <div>
          <ButtonUnderlined onHandleClick={handleCancel}>
            Cancel
          </ButtonUnderlined>
          <ButtonContained>Save as draft</ButtonContained>
          <ButtonContained
            onHandleClick={() => {
              selectedItem && handleEditMode()
            }}
          >
            Next
          </ButtonContained>
        </div>
      </div>
    </div>
  )
}
