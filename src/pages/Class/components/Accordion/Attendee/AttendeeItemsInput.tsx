import { useState } from 'react'
import styles from './AttendeeItems.module.css'
import { InputText } from 'primereact/inputtext'

interface Props {
  label: string
  bgColor: string
  color?: string
  handleChange: (value: string) => void
  parentValue?: string
}

export default function AttendeeItems({
  label,
  bgColor = 'white',
  color = 'white',
  handleChange,
  parentValue,
}: Props) {
  const [value, setValue] = useState<string>()
  return (
    <div
      className={styles.attendeeItems}
      style={{ background: `${bgColor}`, color: `${color}` }}
    >
      <p className={styles.attendeeItemsLabel}>{label}</p>

      <InputText
        className={styles.cusInput}
        value={parentValue || value}
        onChange={e => {
          setValue(e.target.value)
          handleChange(e.target.value)
        }}
      />
    </div>
  )
}
