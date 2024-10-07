import React from 'react'
import { useState } from 'react'
import ProgressBar, {
  type ProgressBarProps,
} from '../../../components/ProgressBar/ProgressBar'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import styles from './SyllabusCreate.module.css'
import { useAppSelector } from '../../../app/hooks'
import { selectCreateStage } from '../../../features/syllabus/syllabusCreateSlice'

const Header = () => {
  const createStage = useAppSelector(selectCreateStage)

  const [activeButton, setActiveButton] = useState<string>('Code')

  const handleButtonClick = (button: string) => {
    setActiveButton(button)
  }

  const getButtonStyle = (button: string) => {
    return {
      fontWeight: activeButton === button ? '700' : '500',
    }
  }
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Syllabus</h1>
        <div className={styles.progressBarBox}>
          <ProgressBar stage={createStage} />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.name}>
          <div className={styles.nameBox}>
            <label className={styles.nameLabel}>Syllabus Name*</label>
            <InputText
              placeholder="Enter syllabus title"
              className={styles.nameField}
            />
          </div>
          <div className={styles.btnGroup}>
            <Button
              label="Code"
              onClick={() => handleButtonClick('Code')}
              style={getButtonStyle('Code')}
              className={styles.btnNoOutline}
            />
            <Button
              label="NPL"
              onClick={() => handleButtonClick('NPL')}
              style={getButtonStyle('NPL')}
              className={styles.btnNoOutline}

            />
          </div>
          <p className={styles.version}>
            Version <span>1.0</span>
          </p>
        </div>
      </main>
    </>
  )
}

export default Header
