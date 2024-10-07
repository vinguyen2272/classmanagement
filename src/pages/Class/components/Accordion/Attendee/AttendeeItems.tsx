import styles from './AttendeeItems.module.css'

interface Props {
  label: string
  value: number
  bgColor: string
  color?: string
}

export default function AttendeeItems({
  label,
  value,
  bgColor = 'white',
  color = 'white',
}: Props) {
  return (
    <div
      className={styles.attendeeItems}
      style={{ background: `${bgColor}`, color: `${color}` }}
    >
      <p className={styles.attendeeItemsLabel}>{label}</p>
      <p className={styles.attendeeItemsCount}>{value}</p>
    </div>
  )
}
