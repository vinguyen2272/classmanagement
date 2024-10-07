import styles from './modalEdit.module.css'
import { useRef, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { addUserList, updateUserList } from '../../../../features/user/UserListSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../app/hooks';
import { RootState } from '../../../../app/store';
import S_Button from '../Button/Button';
import { AddIcon } from '../../../../assets/svg/Action/Action';
import DateInput from '../../../../components/DateInput/DateInput';
import ActiveButton from '../../../../components/CheckStatus/ActiveButton';
import { Toast } from 'primereact/toast';

type FormValues = {
    id: string,
    type: string;
    fullName: string;
    email: string;
    phone?: string;
    dateOfBirth: string | null;
    gender: string;
    activeStatus?: boolean;
};
interface ModalState {
    visible: boolean;
    onClose: () => void;
    userID: string;
    toast: React.RefObject<Toast>;
}
export default function ModalEdit({ visible, userID, onClose, toast }: ModalState) {
    const dispatch = useAppDispatch();
    const dataUserList = useSelector((state: RootState) => state.userList.userList);
    const coverDate = (rowData: any) => {
        const isoString = rowData.dateOfBirth;
        const date = new Date(isoString);
        return date;
    }
    const transformData = dataUserList.map((item: any) => (
        {
            ...item,
            dateOfBirth: coverDate(item)

        }
    ))
    const dataModalUser = transformData.find((user) => (user.id === userID));
    

    const { register, control, handleSubmit, formState: { errors, isSubmitted }, reset } = useForm<FormValues>({
        defaultValues: {
            type: dataModalUser?.type || '',
            fullName: dataModalUser?.fullName ?? '',
            email: dataModalUser?.email ?? '',
            phone: dataModalUser?.phone ?? '',
            dateOfBirth: dataModalUser?.dateOfBirth ?? '',
            gender: dataModalUser?.gender ?? '',
            activeStatus: dataModalUser?.activeStatus ?? false
        }
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {

        const dataDayofBirth = data.dateOfBirth ? new Date(data.dateOfBirth) : null;
        const isoDateString = dataDayofBirth ? new Date(dataDayofBirth.getTime() - dataDayofBirth.getTimezoneOffset() * 60000).toISOString() : null;

        const postData = {
            ...data,
            dateOfBirth: isoDateString ?? null,
            id: userID,
            phone: data.phone ?? '',
            activeStatus: data.activeStatus ?? true,
        }
        dispatch(updateUserList(postData));
        onClose();
        if(toast.current){
            toast.current.show({
                severity:'success',
                summary: 'Success',
                detail: 'User updated successfully',
                life: 3000
            });
        }

    }
    const footerContent = (

        <div className={styles.footerModal}>
            <Button label="Cancer" onClick={onClose} className={`${styles.cancelButton} p-button-text`} />
            <Button className={`${styles.SaveButton}`} label="Save" onClick={handleSubmit(onSubmit)} autoFocus />
        </div>

    );

    return (

        <div className={styles.modalGroups}>
            <Dialog className={styles.dialogContainer} header={<div className={styles.dialogHeader}>Update User</div>} visible={visible} style={{ width: '542px' }} onHide={onClose} footer={footerContent}>
                <form className={styles.formGroup}>
                    <div className={styles.modalBody}>
                        <div className={styles.modalGroup}>
                            <label htmlFor="" className={styles.labelModal}>User type</label>
                            <div className={styles.selectGroup}>
                                <select id="" className={styles.selectModal} {...register('type', { required: 'This field is required' })}>
                                    <option value="" className={styles.optionModal}>Select user type</option>
                                    <option value="Admin" className={styles.optionModal}>Admin</option>
                                    <option value="Trainer" className={styles.optionModal}>Trainer</option>
                                </select>
                                {isSubmitted && errors.type && <span className={styles.spanError}>{errors.type.message}</span>}
                            </div>
                        </div>
                        <div className={styles.modalGroup}>
                            <label htmlFor="" className={styles.labelModal}>Name</label>
                            <div className={styles.selectGroup}>
                                <input type="text" className={styles.inputModal} placeholder={'User name'} {...register('fullName', { required: 'This field is required' })} />
                                {isSubmitted && errors.fullName && <span className={styles.spanError}>{errors.fullName.message}</span>}
                            </div>
                        </div>
                        <div className={styles.modalGroup}>
                            <label htmlFor="" className={styles.labelModal}>Email address</label>
                            <div className={styles.selectGroup}>
                                <input type="text" className={styles.inputModalEmail} placeholder={'Email address'} {...register('email', { required: 'This field is required' })} style={{ border: 'none' }} />
                                {isSubmitted && errors.email && <span className={styles.spanError}>{errors.email.message}</span>}
                            </div>
                        </div>
                        <div className={styles.modalGroup}>
                            <label htmlFor="" className={styles.labelModal}>Phone</label>
                            <div className={styles.selectGroup}>
                                <input type="text" className={styles.inputModal} placeholder={'Phone number'}
                                    {...register('phone', { required: 'This field is required' })}
                                />
                                {isSubmitted && errors.phone && <span className={styles.spanError}>{errors.phone.message}</span>}
                            </div>
                        </div>
                        <div className={styles.modalGroup}>
                            <label htmlFor="" className={styles.labelModal}>Date of birth</label>
                            <Controller
                                name='dateOfBirth'
                                control={control}
                                render={({ field }) => (<DateInput {...field} value={dataModalUser?.dateOfBirth} />)}
                            />
                        </div>
                        <div className={styles.modalGroup}>
                            <label htmlFor="" className={styles.labelModal}>Gender</label>
                            <div className={styles.selectGroup}>
                                <div className={styles.genderInput}>
                                    <input type="radio" id="male" value="male" className={styles.radio} {...register('gender', { required: 'This field is required' })} />
                                    <label htmlFor="male" className={styles.radioLabel}>Male</label>
                                    <input type="radio" id="female" value="female" className={styles.radio} {...register('gender', { required: 'This field is required' })} />
                                    <label htmlFor="female" className={styles.radioLabel}>Female</label>
                                </div>
                                {isSubmitted && errors.gender && <span className={styles.spanError}>{errors.gender.message}</span>}
                            </div>
                        </div>
                        <div className={styles.modalGroup}>
                            <label htmlFor="" className={styles.labelModal}>Status</label>
                            <div>
                                <Controller
                                    name='activeStatus'
                                    control={control}
                                    defaultValue={true}
                                    render={({ field }) => (<ActiveButton {...field} value={field.value ?? true} />)}
                                />


                            </div>
                        </div>
                    </div>
                </form>
            </Dialog>
        </div>

    )
}
