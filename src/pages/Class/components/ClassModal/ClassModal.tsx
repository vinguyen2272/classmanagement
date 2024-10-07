import styles from './ClassModal.module.css'
import { useState } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { AddIcon } from '../../../../assets/svg/Action/Action'
import ButtonContained from '../../../../components/Button/ButtonContained'

type FormValues = {
  syllabus: string
  hours: string
  day: Date | null
}

export default function ClassModal({
  addSyllabusItem,
}: {
  addSyllabusItem?: any
}) {
  const [visible, setVisible] = useState(false)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = data => {
    addSyllabusItem(data)
    setVisible(false)
    reset()
  }

  const footerContent = (
    <div className={styles.footerModal}>
      <Button
        label="Cancel"
        onClick={() => setVisible(false)}
        className={`${styles.cancelButton} p-button-text`}
      />
      <Button
        className={`${styles.SaveButton}`}
        label="Create"
        onClick={handleSubmit(onSubmit)}
        autoFocus
      />
    </div>
  )

  return (
    <div className={styles.modalGroups}>
      <ButtonContained onHandleClick={() => setVisible(true)}>
        <AddIcon color="white" /> Add Syllabus
      </ButtonContained>
      <Dialog
        className={styles.dialogContainer}
        header={<div className={styles.dialogHeader}>New Syllabus</div>}
        visible={visible}
        style={{ width: '542px' }}
        onHide={() => {
          if (!visible) return
          setVisible(false)
        }}
        footer={footerContent}
      >
        <form className={styles.formGroup}>
          <div className={styles.modalBody}>
            <div className={styles.modalGroup}>
              <label htmlFor="" className={styles.labelModal}>
                Syllabus name
              </label>
              <div className={styles.selectGroup}>
                <input
                  type="text"
                  className={styles.inputModal}
                  placeholder={'Syllabus name'}
                  {...register('syllabus', {
                    required: 'This field is required',
                  })}
                />
                {isSubmitted && errors.syllabus && (
                  <span className={styles.spanError}>
                    {errors.syllabus.message}
                  </span>
                )}
              </div>
            </div>
            <div className={styles.modalGroup}>
              <label htmlFor="" className={styles.labelModal}>
                Day
              </label>
              <div className={styles.selectGroup}>
                <input
                  type="text"
                  className={styles.inputModal}
                  placeholder={'Day'}
                  {...register('day', { required: 'This field is required' })}
                />
                {isSubmitted && errors.day && (
                  <span className={styles.spanError}>{errors.day.message}</span>
                )}
              </div>
            </div>
            <div className={styles.modalGroup}>
              <label htmlFor="" className={styles.labelModal}>
                Hours
              </label>
              <div className={styles.selectGroup}>
                <input
                  type="text"
                  className={styles.inputModal}
                  placeholder={'Hours'}
                  {...register('hours', { required: 'This field is required' })}
                />
                {isSubmitted && errors.hours && (
                  <span className={styles.spanError}>
                    {errors.hours.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  )
}
