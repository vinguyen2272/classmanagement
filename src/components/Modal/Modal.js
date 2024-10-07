import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './modal.module.css';
import { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import ActiveButton from '../CheckStatus/ActiveButton';
import DateInput from '../DateInput/DateInput';
import { Controller, useForm } from 'react-hook-form';
import S_Button from '../../pages/UseManagement/ComponentOnly/Button/Button';
import { AddIcon } from '../../assets/svg/Action/Action';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useSelector } from 'react-redux';
import { addUserList } from '../../features/user/UserListSlice';
import { useAppDispatch } from '../../app/hooks';
import { Toast } from 'primereact/toast';
export default function Modal() {
    const dispatch = useAppDispatch();
    const [visible, setVisible] = useState(false);
    const { register, control, handleSubmit, formState: { errors, isSubmitted }, reset, } = useForm();
    const dataUserList = useSelector((state) => state.userList.userList);
    const toast = useRef(null);
    const onSubmit = data => {
        const dataDayofBirth = data.dateOfBirth ? new Date(data.dateOfBirth) : null;
        const isoDateString = dataDayofBirth?.toISOString();
        const postData = {
            ...data,
            dateOfBirth: isoDateString ?? null,
            id: String(dataUserList.length + 1),
        };
        dispatch(addUserList(postData));
        setVisible(false);
        reset();
        if (toast.current) {
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'User added successfully', life: 3000 });
        }
    };
    const footerContent = (_jsxs("div", { className: styles.footerModal, children: [_jsx(Button, { label: "Cancel", onClick: () => setVisible(false), className: `${styles.cancelButton} p-button-text` }), _jsx(Button, { className: `${styles.SaveButton}`, label: "Save", onClick: handleSubmit(onSubmit), autoFocus: true })] }));
    return (_jsxs("div", { className: styles.modalGroups, children: [_jsx(Toast, { ref: toast, position: 'bottom-right' }), _jsx(S_Button, { icon: _jsx(AddIcon, { color: "white" }), onClick: () => setVisible(true), children: "Add User" }), _jsx(Dialog, { className: styles.dialogContainer, header: _jsx("div", { className: styles.dialogHeader, children: "Add a new user" }), visible: visible, style: { width: '542px' }, onHide: () => {
                    if (!visible)
                        return;
                    setVisible(false);
                }, footer: footerContent, children: _jsx("form", { className: styles.formGroup, children: _jsxs("div", { className: styles.modalBody, children: [_jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "User type" }), _jsxs("div", { className: styles.selectGroup, children: [_jsxs("select", { id: "", className: styles.selectModal, ...register('type', { required: 'This field is required' }), children: [_jsx("option", { value: "", className: styles.optionModal, children: "Select one" }), _jsx("option", { value: "Admin", className: styles.optionModal, children: "Admin" }), _jsx("option", { value: "Employee", className: styles.optionModal, children: "Trainer" })] }), isSubmitted && errors.type && (_jsx("span", { className: styles.spanError, children: errors.type.message }))] })] }), _jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Name" }), _jsxs("div", { className: styles.selectGroup, children: [_jsx("input", { type: "text", className: styles.inputModal, placeholder: 'User name', ...register('fullName', {
                                                    required: 'This field is required',
                                                }) }), isSubmitted && errors.fullName && (_jsx("span", { className: styles.spanError, children: errors.fullName.message }))] })] }), _jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Email address" }), _jsxs("div", { className: styles.selectGroup, children: [_jsx("input", { type: "text", className: styles.inputModal, placeholder: 'Email address', ...register('email', { required: 'This field is required' }) }), isSubmitted && errors.email && (_jsx("span", { className: styles.spanError, children: errors.email.message }))] })] }), _jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Phone" }), _jsxs("div", { className: styles.selectGroup, children: [_jsx("input", { type: "number", className: styles.inputModal, placeholder: 'Phone number', ...register('phone', { required: 'This field is required' }) }), isSubmitted && errors.phone && (_jsx("span", { className: styles.spanError, children: errors.phone.message }))] })] }), _jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Date of birth" }), _jsx(Controller, { name: "dateOfBirth", control: control, render: ({ field }) => _jsx(DateInput, { ...field }) })] }), _jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Gender" }), _jsxs("div", { className: styles.selectGroup, children: [_jsxs("div", { className: styles.genderInput, children: [_jsx("input", { type: "radio", id: "male", value: "male", className: styles.radio, defaultChecked: true, ...register('gender', {
                                                            required: 'This field is required',
                                                        }) }), _jsx("label", { htmlFor: "male", className: styles.radioLabel, children: "Male" }), _jsx("input", { type: "radio", id: "female", value: "female", className: styles.radio, ...register('gender', {
                                                            required: 'This field is required',
                                                        }) }), _jsx("label", { htmlFor: "female", className: styles.radioLabel, children: "Female" })] }), isSubmitted && errors.gender && (_jsx("span", { className: styles.spanError, children: errors.gender.message }))] })] }), _jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Status" }), _jsx("div", { children: _jsx(Controller, { name: "activeStatus", control: control, defaultValue: true, render: ({ field }) => _jsx(ActiveButton, { ...field }) }) })] })] }) }) })] }));
}
