import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from 'react';
import { CopyIcon, CreateIcon, DeleteForeverIcon, } from '../../../../assets/svg/DocumentManage/DocumentManage';
import { AddIcon } from '../../../../assets/svg/Action/Action';
import style from './ActionButton.module.css';
import { useNavigate } from 'react-router-dom';
const ActionButtons = ({ onHandleDelete, onHandleDuplicate, }) => {
    const op = useRef(null);
    const navigate = useNavigate();
    return (_jsxs(_Fragment, { children: [_jsx(Button, { type: "button", icon: "pi pi-ellipsis-h", rounded: true, onClick: e => op.current?.toggle(e) }), _jsxs(OverlayPanel, { ref: op, className: style.overlayPanelContainer, children: [_jsxs("div", { className: style.popUpMenu, onClick: () => { navigate('/syllabus/create'); }, children: [_jsx(AddIcon, {}), _jsx("p", { children: "Add new syllabus" })] }), _jsxs("div", { className: style.popUpMenu, onClick: () => {
                            navigate('');
                        }, children: [_jsx(CreateIcon, {}), _jsx("p", { children: "Edit syllabus" })] }), _jsxs("div", { className: style.popUpMenu, onClick: onHandleDuplicate, children: [_jsx(CopyIcon, {}), _jsx("p", { children: "Duplicate syllabus" })] }), _jsxs("div", { className: style.popUpMenu, onClick: onHandleDelete, children: [_jsx(DeleteForeverIcon, {}), _jsx("p", { children: "Delete syllabus" })] })] })] }));
};
export default ActionButtons;
