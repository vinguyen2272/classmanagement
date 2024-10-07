import styles from './modal.module.css'
import React, { useRef, useState } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { PrimeReactProvider } from 'primereact/api'
import ActiveButton from '../CheckStatus/ActiveButton'
import DateInput from '../DateInput/DateInput'
import type { SubmitHandler } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'
import S_Button from '../../pages/UseManagement/ComponentOnly/Button/Button'
import { AddIcon } from '../../assets/svg/Action/Action'
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch, useSelector } from 'react-redux'
import { addUserList } from '../../features/user/UserListSlice'
import type { RootState } from '../../app/store'
import { useAppDispatch } from '../../app/hooks'
import { Toast } from 'primereact/toast'
type FormValues = {
  id: string
  type: string
  fullName: string
  email: string
  phone: string
  dateOfBirth: string | null
  gender: string
  activeStatus: boolean
}
export default function Modal() {
  const dispatch = useAppDispatch()
  const [visible, setVisible] = useState(false)
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
  } = useForm<FormValues>()
  const dataUserList = useSelector(
    (state: RootState) => state.userList.userList
  )
  const toast = useRef<Toast>(null)
  const onSubmit: SubmitHandler<FormValues> = data => {
    const dataDayofBirth = data.dateOfBirth ? new Date(data.dateOfBirth) : null
    const isoDateString = dataDayofBirth?.toISOString()
    const postData = {
      ...data,
      dateOfBirth: isoDateString ?? null,
      id: String(dataUserList.length + 1),
    }

    dispatch(addUserList(postData))
    setVisible(false)
    reset();
   
    
    if (toast.current) {
      toast.current.show({ severity: 'success', summary: 'Success', detail:  'User added successfully', life: 3000 });
  }
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
        label="Save"
        onClick={handleSubmit(onSubmit)}
        autoFocus
      />
    </div>
  )

  return (
    <div className={styles.modalGroups}>
      <Toast ref={toast} position ='bottom-right'/>
      <S_Button
        icon={<AddIcon color="white" />}
        onClick={() => setVisible(true)}
      >
        Add User
      </S_Button>
      <Dialog
        className={styles.dialogContainer}
        header={<div className={styles.dialogHeader}>Add a new user</div>}
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
                User type
              </label>
              <div className={styles.selectGroup}>
                <select
                  id=""
                  className={styles.selectModal}
                  {...register('type', { required: 'This field is required' })}
                >
                  <option value="" className={styles.optionModal}>
                    Select one
                  </option>
                  <option value="Admin" className={styles.optionModal}>
                    Admin
                  </option>
                  <option value="Employee" className={styles.optionModal}>
                    Trainer
                  </option>
                </select>
                {isSubmitted && errors.type && (
                  <span className={styles.spanError}>
                    {errors.type.message}
                  </span>
                )}
              </div>
            </div>
            <div className={styles.modalGroup}>
              <label htmlFor="" className={styles.labelModal}>
                Name
              </label>
              <div className={styles.selectGroup}>
                <input
                  type="text"
                  className={styles.inputModal}
                  placeholder={'User name'}
                  {...register('fullName', {
                    required: 'This field is required',
                  })}
                />
                {isSubmitted && errors.fullName && (
                  <span className={styles.spanError}>
                    {errors.fullName.message}
                  </span>
                )}
              </div>
            </div>
            <div className={styles.modalGroup}>
              <label htmlFor="" className={styles.labelModal}>
                Email address
              </label>
              <div className={styles.selectGroup}>
                <input
                  type="text"
                  className={styles.inputModal}
                  placeholder={'Email address'}
                  {...register('email', { required: 'This field is required' })}
                />
                {isSubmitted && errors.email && (
                  <span className={styles.spanError}>
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className={styles.modalGroup}>
              <label htmlFor="" className={styles.labelModal}>
                Phone
              </label>
              <div className={styles.selectGroup}>
                <input
                  type="number"
                  className={styles.inputModal}
                  placeholder={'Phone number'}
                  {...register('phone', { required: 'This field is required' })}
                />
                {isSubmitted && errors.phone && (
                  <span className={styles.spanError}>
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>
            <div className={styles.modalGroup}>
              <label htmlFor="" className={styles.labelModal}>
                Date of birth
              </label>
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => <DateInput {...field} />}
              />
            </div>
            <div className={styles.modalGroup}>
              <label htmlFor="" className={styles.labelModal}>
                Gender
              </label>
              <div className={styles.selectGroup}>
                <div className={styles.genderInput}>
                  <input
                    type="radio"
                    id="male"
                    value="male"
                    className={styles.radio}
                    defaultChecked
                    {...register('gender', {
                      required: 'This field is required',
                    })}
                  />
                  <label htmlFor="male" className={styles.radioLabel}>
                    Male
                  </label>
                  <input
                    type="radio"
                    id="female"
                    value="female"
                    className={styles.radio}
                    {...register('gender', {
                      required: 'This field is required',
                    })}
                  />
                  <label htmlFor="female" className={styles.radioLabel}>
                    Female
                  </label>
                </div>
                {isSubmitted && errors.gender && (
                  <span className={styles.spanError}>
                    {errors.gender.message}
                  </span>
                )}
              </div>
            </div>
            <div className={styles.modalGroup}>
              <label htmlFor="" className={styles.labelModal}>
                Status
              </label>
              <div>
                <Controller
                  name="activeStatus"
                  control={control}
                  defaultValue={true}
                  render={({ field }) => <ActiveButton {...field} />}
                />
              </div>
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  )
}
