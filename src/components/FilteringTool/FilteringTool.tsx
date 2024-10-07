import React, { useEffect } from 'react'
import styles from './FilteringTool.module.css'
import { Button } from 'primereact/button'
import stashDownIconAsset from '../../assets/DucNH83/stackdownicon.png'
import { Dropdown } from 'primereact/dropdown'
import { useState } from 'react'
import { addLocale, PrimeReactProvider } from 'primereact/api'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import vietnamProvincesList from '../../assets/DucNH83/vietnam_provinces.json'
import { MultiSelect } from 'primereact/multiselect'
import axios from 'axios'
import { Calendar } from 'primereact/calendar'

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

interface IFormInput {
  firstName: string
  gender: GenderEnum
}

addLocale('en', {
  firstDayOfWeek: 1,
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  today: 'Today',
  clear: 'Clear',
  //...
})

const FilteringTool = () => {
  const [selectedCities, setSelectedCities] = useState('')
  const [filterFromTime, setFilterFromTime] = useState(new Date(null))
  const [filterToTime, setFilterToTime] = useState(new Date(null))
  const [selectedFSU, setSelectedFSU] = useState('')
  const [selectedTrainer, setSelectedTrainer] = useState('')
  const [trainerList, setTrainerList] = useState<string[]>([])
  const [filteredClassTime, setFilteredClassTime] = useState<string[]>([])
  const [filteredClassStatus, setFilteredClassStatus] = useState<string[]>([])
  const [filteredAttendee, setFilteredAttendee] = useState<string[]>([])
  const stashDownIcon: JSX.Element = <img src={stashDownIconAsset}></img>
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)
  const toggleFilterTool = () => {
    const filterToolContainer = document.getElementById(
      styles['filteringToolContainer']
    ) as HTMLDivElement
    filterToolContainer.classList.toggle(styles.show)
  }

  const classTime = ['Morning', 'Noon', 'Night', 'Online']
  const status = ['Planning', 'Opening', 'Closed']
  let filteringObject = {}
  const attendee = [
    'Intern',
    'Fresher',
    'Online-fee-fresher',
    'Offline-fee-fresher',
  ]
  const FSU = []

  const fetchTrainer = async () => {
    await axios
      .get('https://6698b84c2069c438cd6faaf9.mockapi.io/api/v1/studentList')
      .then(response => {
        let cachedList = []
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].isTrainer === true) {
            cachedList.push(response.data[i].name)
          }
        }
        setTrainerList(cachedList)
      })
      .catch(err => console.log(err))
  }

  const handleClearForm = (e: MouseEvent) => {
    e.preventDefault()
    const selectValues = document.querySelectorAll(
      '.' + styles.filteringToolContainer + ' select'
    )
    selectValues.forEach(item => ((item as HTMLInputElement).value = ''))
    setFilterFromTime(new Date('--/--/----'))
    setFilterToTime(new Date('--/--/----'))
    setSelectedCities('')
    setSelectedTrainer('')
  }

  const handleSelectInput = async (
    filteredTarget: string[],
    target: string
  ) => {
    switch (true) {
      case filteredTarget === filteredClassTime:
        if (!filteredTarget.some(item => item === target)) {
          await setFilteredClassTime([...filteredClassTime, target])
        } else {
          await setFilteredClassTime(prevState =>
            prevState.filter(item => item !== target)
          )
        }
        break
      case filteredTarget === filteredClassStatus:
        if (!filteredTarget.some(item => item === target)) {
          await setFilteredClassStatus([...filteredClassStatus, target])
        } else {
          await setFilteredClassStatus(prevState =>
            prevState.filter(item => item !== target)
          )
        }
        break
      case filteredTarget === filteredAttendee:
        if (!filteredTarget.some(item => item === target)) {
          await setFilteredAttendee([...filteredAttendee, target])
        } else {
          await setFilteredAttendee(prevState =>
            prevState.filter(item => item !== target)
          )
        }
        break
      default:
        console.log('Unknown filter target')
      
    }
  }

  const handleSearchConfirm = () => {
    filteringObject = {
      classTime: filteredClassTime,
      classStatus: filteredClassStatus,
      attendee: filteredAttendee,
      trainer: selectedTrainer,
      city: selectedCities,
      fromTime: filterFromTime,
      toTime: filterToTime,
      FSU: selectedFSU,
    }
    //Send the filtering object to your API endpoint or store it in a Redux store for further use.
  }

  useEffect(() => {
    fetchTrainer()
  }, [])

  return (
    <>
      <PrimeReactProvider>
        <div className={styles.container}>
          <Button
            onClick={() => {
              toggleFilterTool()
            }}
            style={{
              backgroundColor: 'rgb(45, 55, 72)',
              color: 'white',
              padding: '4px 10px',
              gap: '6px',
              fontWeight: 'bold',
            }}
            label="Filter"
            icon={stashDownIcon}
            severity="success"
          ></Button>
          <div
            id={styles['filteringToolContainer']}
            className={styles.filteringToolContainer}
          >
            <div className={styles.filterRow1}>
              <div className={styles.wrapper}>
                <label htmlFor="">Class Location</label>
                <MultiSelect
                  style={{ width: '100%', border: '1px solid gray' }}
                  value={selectedCities}
                  onChange={e => setSelectedCities(e.value)}
                  options={vietnamProvincesList}
                  optionLabel="name"
                  placeholder="Select Cities"
                  maxSelectedLabels={3}
                  display="chip"
                  className="w-full md:w-20rem"
                />
              </div>
              <div className={styles.wrapper}>
                <label htmlFor="">Class time frame</label>
                <div>
                  <div>
                    <span>from:</span>
                    <Calendar
                      locale="en"
                      dateFormat="dd/mm/yy"
                      value={filterFromTime}
                      onChange={e => {
                        if (e.value !== null) {
                          setFilterFromTime(e.value!)
                        }
                      }}
                    />
                  </div>
                  <div>
                    <span>to:</span>
                    <Calendar
                      maskSlotChar="--/--/----"
                      value={filterToTime}
                      onChange={e => {
                        if (e.value !== null) {
                          setFilterToTime(e.value!)
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.filterRow2}>
              <div id={styles['classTimeId']} className={styles.classTime}>
                <span>Class time</span>
                <div className={styles.selectGroup}>
                  {classTime.map((time, index) => {
                    return (
                      <div key={index}>
                        <input
                          onChange={() =>
                            handleSelectInput(filteredClassTime, time)
                          }
                          type="checkbox"
                          id={styles[`${'classTime' + time}`]}
                        />
                        <label htmlFor={styles[`${'classTime' + time}`]}>
                          {time}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className={styles.classStatus}>
                <span>Status</span>
                <div className={styles.selectGroup}>
                  {status.map((item, index) => {
                    return (
                      <div key={index}>
                        <input
                          onChange={() =>
                            handleSelectInput(filteredClassStatus, item)
                          }
                          type="checkbox"
                          id={styles[`${'status' + item}`]}
                        />
                        <label htmlFor={styles[`${'status' + item}`]}>
                          {item}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className={styles.attendee}>
                <span>Attendee</span>
                <div className={styles.selectGroup}>
                  {attendee.map((type, index) => {
                    return (
                      <div key={index}>
                        <input
                          onChange={() =>
                            handleSelectInput(filteredAttendee, type)
                          }
                          type="checkbox"
                          id={styles['attendee' + type]}
                        />
                        <label htmlFor={styles['attendee' + type]}>
                          {type}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className={styles.filterRow3}>
              <div>
                <label htmlFor={styles['FSUSelector']}>FSU</label>
                <Dropdown
                  id={styles['FSUSelector']}
                  value={selectedFSU}
                  onChange={e => setSelectedFSU(e.value)}
                  options={FSU}
                  optionLabel="name"
                  placeholder="Select an FSU"
                  className="w-full md:w-14rem"
                />
              </div>
              <div>
                <label htmlFor={styles.TrainerSelector}>Trainer</label>
                <Dropdown
                  id={styles.TrainerSelector}
                  value={selectedTrainer}
                  onChange={e => setSelectedTrainer(e.value)}
                  options={trainerList}
                  optionLabel="name"
                  placeholder="Select a Trainer"
                  className="w-full md:w-14rem"
                />
              </div>
            </div>
            <div className={styles.functioningBtn}>
              <Button
                style={{
                  backgroundColor: 'rgb(45, 55, 72)',
                  color: 'white',
                  padding: '4px 10px',
                  gap: '6px',
                  fontWeight: 'bold',
                }}
                onClick={() => handleClearForm(event)}
                severity="success"
                label="Clear"
              ></Button>
              <Button
                style={{
                  backgroundColor: 'rgb(45, 55, 72)',
                  color: 'white',
                  padding: '4px 10px',
                  gap: '6px',
                  fontWeight: 'bold',
                }}
                onClick={() => handleSearchConfirm()}
                severity="success"
                label="Search"
              ></Button>
            </div>
          </div>
        </div>
      </PrimeReactProvider>
    </>
  )
}

export default FilteringTool
