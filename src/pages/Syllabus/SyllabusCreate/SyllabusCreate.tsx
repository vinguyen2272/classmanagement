import type React from 'react'
import styles from './SyllabusCreate.module.css'
import Header from './Header'
import SyllabusTabsOption from '../../../components/SyllabusTabsOption/SyllabusTabsOption'
import General from './General/General'
import Outline from './Outline/Outline'
import TrainingMaterial from './TrainingMaterial/TrainingMaterial'
import { Button } from 'primereact/button'

const SyllabusCreate: React.FC = () => {
  const tabsName = ['General', 'Outline', 'Training material']
  const tabsElement = [<General />, <Outline />, <TrainingMaterial />]
  function handleCancel(): void {
    throw new Error('Function not implemented.')
  }

  function handleSaveAsDraft(): void {
    throw new Error('Function not implemented.')
  }

  function handleSave(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <section className={styles.syllabusCreate}>
      <Header />
      <div className={styles.tabsControl}>
        <SyllabusTabsOption tabsName={tabsName} tabsElement={tabsElement} />
      </div>
      <div className={styles.controller}>
        <Button
          label="Cancel"
          onClick={handleCancel}
          className={styles.btnCancel}
        />
        <Button
          label="Save as draft"
          onClick={handleSaveAsDraft}
          className={styles.btnSaveAsDraft}
        />
        <Button label="Save" onClick={handleSave} className={styles.btnSave} />
      </div>
    </section>
  )
}

export default SyllabusCreate
