import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './modalEdit.module.css';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Controller, useForm } from 'react-hook-form';
import { updateUserList } from '../../../../features/user/UserListSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../../app/hooks';
import DateInput from '../../../../components/DateInput/DateInput';
import ActiveButton from '../../../../components/CheckStatus/ActiveButton';
export default function ModalEdit({ visible, userID, onClose, toast }) {
    const dispatch = useAppDispatch();
    const dataUserList = useSelector((state) => state.userList.userList);
    const coverDate = (rowData) => {
        const isoString = rowData.dateOfBirth;
        const date = new Date(isoString);
        return date;
    };
    const transformData = dataUserList.map((item) => ({
        ...item,
        dateOfBirth: coverDate(item)
    }));
    const dataModalUser = transformData.find((user) => (user.id === userID));
    const { register, control, handleSubmit, formState: { errors, isSubmitted }, reset } = useForm({
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
    const onSubmit = (data) => {
        const dataDayofBirth = data.dateOfBirth ? new Date(data.dateOfBirth) : null;
        const isoDateString = dataDayofBirth ? new Date(dataDayofBirth.getTime() - dataDayofBirth.getTimezoneOffset() * 60000).toISOString() : null;
        const postData = {
            ...data,
            dateOfBirth: isoDateString ?? null,
            id: userID,
            phone: data.phone ?? '',
            activeStatus: data.activeStatus ?? true,
        };
        dispatch(updateUserList(postData));
        onClose();
        if (toast.current) {
            toast.current.show({
                severity: 'success',
                summary: 'Success',
                detail: 'User updated successfully',
                life: 3000
            });
        }
    };
    const footerContent = (_jsxs("div", { className: styles.footerModal, children: [_jsx(Button, { label: "Cancer", onClick: onClose, className: `${styles.cancelButton} p-button-text` }), _jsx(Button, { className: `${styles.SaveButton}`, label: "Save", onClick: handleSubmit(onSubmit), autoFocus: true })] }));
    return (_jsx("div", { className: styles.modalGroups, children: _jsx(Dialog, { className: styles.dialogContainer, header: _jsx("div", { className: styles.dialogHeader, children: "Update User" }), visible: visible, style: { width: '542px' }, onHide: onClose, footer: footerContent, children: _jsx("form", { className: styles.formGroup, children: _jsxs("div", { className: styles.modalBody, children: [_jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "User type" }), _jsxs("div", { className: styles.selectGroup, children: [_jsxs("select", { id: "", className: styles.selectModal, ...register('type', { required: 'This field is required' }), children: [_jsx("option", { value: "", className: styles.optionModal, children: "Select user type" }), _jsx("option", { value: "Admin", className: styles.optionModal, children: "Admin" }), _jsx("option", { value: "Trainer", className: styles.optionModal, children: "Trainer" })] }), isSubmitted && errors.type && _jsx("span", { className: styles.spanError, children: errors.type.message })] })] }), _jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Name" }), _jsxs("div", { className: styles.selectGroup, children: [_jsx("input", { type: "text", className: styles.inputModal, placeholder: 'User name', ...register('fullName', { required: 'This field is required' }) }), isSubmitted && errors.fullName && _jsx("span", { className: styles.spanError, children: errors.fullName.message })] })] }), _jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Email address" }), _jsxs("div", { className: styles.selectGroup, children: [_jsx("input", { type: "text", className: styles.inputModalEmail, placeholder: 'Email address', ...register('email', { required: 'This field is required' }), style: { border: 'none' } }), isSubmitted && errors.email && _jsx("span", { className: styles.spanError, children: errors.email.message })] })] }), _jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Phone" }), _jsxs("div", { className: styles.selectGroup, children: [_jsx("input", { type: "text", className: styles.inputModal, placeholder: 'Phone number', ...register('phone', { required: 'This field is required' }) }), isSubmitted && errors.phone && _jsx("span", { className: styles.spanError, children: errors.phone.message })] })] }), _jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Date of birth" }), _jsx(Controller, { name: 'dateOfBirth', control: control, render: ({ field }) => (_jsx(DateInput, { ...field, value: dataModalUser?.dateOfBirth })) })] }), _jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Gender" }), _jsxs("div", { className: styles.selectGroup, children: [_jsxs("div", { className: styles.genderInput, children: [_jsx("input", { type: "radio", id: "male", value: "male", className: styles.radio, ...register('gender', { required: 'This field is required' }) }), _jsx("label", { htmlFor: "male", className: styles.radioLabel, children: "Male" }), _jsx("input", { type: "radio", id: "female", value: "female", className: styles.radio, ...register('gender', { required: 'This field is required' }) }), _jsx("label", { htmlFor: "female", className: styles.radioLabel, children: "Female" })] }), isSubmitted && errors.gender && _jsx("span", { className: styles.spanError, children: errors.gender.message })] })] }), _jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Status" }), _jsx("div", { children: _jsx(Controller, { name: 'activeStatus', control: control, defaultValue: true, render: ({ field }) => (_jsx(ActiveButton, { ...field, value: field.value ?? true })) }) })] })] }) }) }) }));
}
