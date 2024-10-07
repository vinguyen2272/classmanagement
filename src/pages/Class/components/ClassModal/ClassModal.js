import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './ClassModal.module.css';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useForm } from 'react-hook-form';
import { AddIcon } from '../../../../assets/svg/Action/Action';
import ButtonContained from '../../../../components/Button/ButtonContained';
export default function ClassModal({ addSyllabusItem, }) {
    const [visible, setVisible] = useState(false);
    const { register, control, handleSubmit, formState: { errors, isSubmitted }, reset, } = useForm();
    const onSubmit = data => {
        addSyllabusItem(data);
        setVisible(false);
        reset();
    };
    const footerContent = (_jsxs("div", { className: styles.footerModal, children: [_jsx(Button, { label: "Cancel", onClick: () => setVisible(false), className: `${styles.cancelButton} p-button-text` }), _jsx(Button, { className: `${styles.SaveButton}`, label: "Create", onClick: handleSubmit(onSubmit), autoFocus: true })] }));
    return (_jsxs("div", { className: styles.modalGroups, children: [_jsxs(ButtonContained, { onHandleClick: () => setVisible(true), children: [_jsx(AddIcon, { color: "white" }), " Add Syllabus"] }), _jsx(Dialog, { className: styles.dialogContainer, header: _jsx("div", { className: styles.dialogHeader, children: "New Syllabus" }), visible: visible, style: { width: '542px' }, onHide: () => {
                    if (!visible)
                        return;
                    setVisible(false);
                }, footer: footerContent, children: _jsx("form", { className: styles.formGroup, children: _jsxs("div", { className: styles.modalBody, children: [_jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Syllabus name" }), _jsxs("div", { className: styles.selectGroup, children: [_jsx("input", { type: "text", className: styles.inputModal, placeholder: 'Syllabus name', ...register('syllabus', {
                                                    required: 'This field is required',
                                                }) }), isSubmitted && errors.syllabus && (_jsx("span", { className: styles.spanError, children: errors.syllabus.message }))] })] }), _jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Day" }), _jsxs("div", { className: styles.selectGroup, children: [_jsx("input", { type: "text", className: styles.inputModal, placeholder: 'Day', ...register('day', { required: 'This field is required' }) }), isSubmitted && errors.day && (_jsx("span", { className: styles.spanError, children: errors.day.message }))] })] }), _jsxs("div", { className: styles.modalGroup, children: [_jsx("label", { htmlFor: "", className: styles.labelModal, children: "Hours" }), _jsxs("div", { className: styles.selectGroup, children: [_jsx("input", { type: "text", className: styles.inputModal, placeholder: 'Hours', ...register('hours', { required: 'This field is required' }) }), isSubmitted && errors.hours && (_jsx("span", { className: styles.spanError, children: errors.hours.message }))] })] })] }) }) })] }));
}
