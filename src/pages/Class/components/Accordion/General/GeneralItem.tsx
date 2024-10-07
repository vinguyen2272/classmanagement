import styles from './GeneralItem.module.css'
interface Props {
  label: string
  icon?: React.ReactNode
  children?: React.ReactNode
  disabled?: boolean
}

export default function GeneralItem({
  icon,
  label,
  children,
  disabled = false,
}: Props) {
  const className = disabled
    ? `${styles.container} ${styles.disabled}`
    : styles.container

  return (
    <div className={className}>
      <div className={styles.label}>
        {icon}
        <p>{label}</p>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
