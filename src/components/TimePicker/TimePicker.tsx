import type React from 'react'
import { useState, useRef, useEffect } from 'react'
import styles from './TimePicker.module.css'

interface TimePickerProps {
  value: string
  onChange: (time: string) => void
}

const TimePicker: React.FC<TimePickerProps> = ({ value, onChange }) => {
  const [time, setTime] = useState<string>('--:--')
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false)
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [inputHours, setInputHours] = useState<number>(0)
  const [inputMinutes, setInputMinutes] = useState<number>(0)

  const scrollRefHours = useRef<HTMLDivElement>(null)
  const scrollRefMinutes = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize time, hours, and minutes based on value prop
    if (value) {
      const [hoursPart, minutesPart] = value.split(':').map(Number)
      if (!isNaN(hoursPart) && !isNaN(minutesPart)) {
        setHours(hoursPart)
        setMinutes(minutesPart)
        setInputHours(hoursPart)
        setInputMinutes(minutesPart)
        setTime(value)
      }
    }
  }, [value])

  useEffect(() => {
    const scrollToSelected = (
      ref: React.RefObject<HTMLDivElement>,
      value: number
    ) => {
      if (ref.current) {
        const items = ref.current.children
        for (let i = 0; i < items.length; i++) {
          const item = items[i] as HTMLElement
          if (parseInt(item.innerText, 10) === value) {
            ref.current.scrollTop =
              item.offsetTop -
              ref.current.clientHeight / 2 +
              item.clientHeight / 2
            break
          }
        }
      }
    }

    scrollToSelected(scrollRefHours, hours)
    scrollToSelected(scrollRefMinutes, minutes)
  }, [hours, minutes])

  const handleTimeChange = (newHours: number, newMinutes: number) => {
    const newTime = `${newHours < 10 ? '0' : ''}${newHours}:${newMinutes < 10 ? '0' : ''}${newMinutes}`
    setTime(newTime)
    onChange(newTime) // Update the parent with the new time
  }

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible)
    if (inputRef.current) inputRef.current.focus()
  }

  const handleHoursChange = (delta: number) => {
    const newHours = (hours + delta + 24) % 24
    setHours(newHours)
    handleTimeChange(newHours, minutes)
  }

  const handleMinutesChange = (delta: number) => {
    const newMinutes = (minutes + delta + 60) % 60
    setMinutes(newMinutes)
    handleTimeChange(hours, newMinutes)
  }

  const handleNumberClick = (value: number, isHours: boolean) => {
    if (isHours) {
      setHours(value)
      setInputHours(value) // Update inputHours
      handleTimeChange(value, minutes)
    } else {
      setMinutes(value)
      setInputMinutes(value) // Update inputMinutes
      handleTimeChange(hours, value)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    const numberValue = parseInt(value, 10)

    if (name === 'hours') {
      if (!isNaN(numberValue)) {
        const newHours = Math.max(0, Math.min(23, numberValue))
        setInputHours(newHours)
        setHours(newHours)
        handleTimeChange(newHours, minutes)
      }
    } else if (name === 'minutes') {
      if (!isNaN(numberValue)) {
        const newMinutes = Math.max(0, Math.min(59, numberValue))
        setInputMinutes(newMinutes)
        setMinutes(newMinutes)
        handleTimeChange(hours, newMinutes)
      }
    }
  }

  const getVisibleHours = () => Array.from({ length: 24 }, (_, i) => i)
  const getVisibleMinutes = () => Array.from({ length: 60 }, (_, i) => i)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false)
      }
    }

    if (isDropdownVisible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownVisible])

  return (
    <div className={styles.timePicker} ref={dropdownRef}>
      <button className={styles.timePickerButton} onClick={toggleDropdown}>
        {time}
      </button>
      <div
        className={`${styles.dropdown} ${isDropdownVisible ? styles.show : ''}`}
      >
        <div className={styles.select}>
          <div className={styles.selectWrapper}>
            <div
              className={styles.arrowButton}
              onClick={() => handleHoursChange(-1)}
            >
              <i className={`pi pi-angle-up ${styles.icon}`}></i>
            </div>
            <div ref={scrollRefHours} className={styles.scrollContainer}>
              {getVisibleHours().map(hour => (
                <div
                  key={hour}
                  className={`${styles.number} ${hour === hours ? styles.selected : ''}`}
                  onClick={() => handleNumberClick(hour, true)}
                >
                  {hour < 10 ? `0${hour}` : hour}
                </div>
              ))}
            </div>
            <div
              className={styles.arrowButton}
              onClick={() => handleHoursChange(1)}
            >
              <i className={`pi pi-angle-down ${styles.icon}`}></i>
            </div>
          </div>
          <span className={styles.colon}>:</span>
          <div className={styles.selectWrapper}>
            <div
              className={styles.arrowButton}
              onClick={() => handleMinutesChange(-1)}
            >
              <i className={`pi pi-angle-up ${styles.icon}`}></i>
            </div>
            <div ref={scrollRefMinutes} className={styles.scrollContainer}>
              {getVisibleMinutes().map(minute => (
                <div
                  key={minute}
                  className={`${styles.number} ${minute === minutes ? styles.selected : ''}`}
                  onClick={() => handleNumberClick(minute, false)}
                >
                  {minute < 10 ? `0${minute}` : minute}
                </div>
              ))}
            </div>
            <div
              className={styles.arrowButton}
              onClick={() => handleMinutesChange(1)}
            >
              <i className={`pi pi-angle-down ${styles.icon}`}></i>
            </div>
          </div>
        </div>
        <div className={styles.input}>
          <input
            type="text"
            name="hours"
            value={inputHours < 10 ? `0${inputHours}` : inputHours}
            onChange={handleInputChange}
            className={styles.inputField}
          />
          <span className={styles.colon}>:</span>
          <input
            type="text"
            name="minutes"
            value={inputMinutes < 10 ? `0${inputMinutes}` : inputMinutes}
            onChange={handleInputChange}
            className={styles.inputField}
          />
        </div>
      </div>
    </div>
  )
}

export default TimePicker
