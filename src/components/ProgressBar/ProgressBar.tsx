import type React from 'react'
import styles from './ProgressBar.module.css'

export interface ProgressBarProps {
  stage: 'general' | 'outline' | 'other' | 'done'
}

const ProgressBar: React.FC<ProgressBarProps> = ({ stage }) => {
  let markerClass = ''

  switch (stage) {
    case 'general':
      markerClass = styles.marker1
      break
    case 'outline':
      markerClass = styles.marker2
      break
    case 'other':
      markerClass = styles.marker3
      break
    case 'done':
      markerClass = styles.marker4
      break
    default:
      markerClass = styles.hidden
  }

  return (
    <div className={styles.progressBar}>
      <div className={`${styles.progress} ${styles[stage]}`}></div>
      <div className={`${styles.stageMarker} ${markerClass}`}></div>
      <div className={`${styles.stageLabel} ${styles.label1}`}>General</div>
      <div className={`${styles.stageLabel} ${styles.label2}`}>Outline</div>
      <div className={`${styles.stageLabel} ${styles.label3}`}>Other</div>
      <div className={`${styles.stageLabel} ${styles.label4}`}>Done</div>
    </div>
  )
}

export default ProgressBar
