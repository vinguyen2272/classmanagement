import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Column } from 'primereact/column';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { AddIcon } from '../../../assets/svg/Action/Action';
import { ReportProblemIcon } from '../../../assets/svg/Indicator/Indicator';
import ButtonContained from '../../../components/Button/ButtonContained';
import ButtonUnderlined from '../../../components/Button/ButtonUnderlined';
import FilteringTool from '../../../components/FilteringTool/FilteringTool';
import { Table } from '../../../components/Table/Table';
import TagContained from '../../../components/Tag/TagContained';
import { getAdmin } from '../../../features/admin/adminSlice';
import { deleteClass, deleteSearchClassTag, duplicateClass, getClasses, searchClassTag, } from '../../../features/class/classSlice';
import ActionButtons from '../components/ActionButton/ActionButton';
import style from './ListOfClass.module.css';
export const ListOfClass = () => {
    const data = useAppSelector(state => state.class.classes);
    const admin = useAppSelector(state => state.admin.adminState);
    const [updateData, setUpdateData] = useState();
    const [visibleDialog, setVisibleDialog] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchValue = useAppSelector(state => state.class.searchValue);
    useEffect(() => {
        dispatch(getClasses());
        dispatch(getAdmin());
    }, [dispatch]);
    const onHideDialog = () => {
        setVisibleDialog(false);
    };
    // Delete Info
    const confirm = (data) => {
        setSelectedClass(data);
        setVisibleDialog(true);
    };
    const accept = () => {
        if (selectedClass) {
            dispatch(deleteClass(selectedClass.classId));
            setVisibleDialog(false);
        }
    };
    const reject = () => {
        setVisibleDialog(false);
    };
    // Duplicate Info
    const duplicate = (data) => {
        const _data = { ...data, id: Date.now() };
        dispatch(duplicateClass(_data));
    };
    const actionBodyTemplate = (data) => {
        return (_jsx(ActionButtons, { classId: data.classId, onHandleDelete: () => confirm(data), onHandleDuplicate: () => {
                duplicate(data);
            } }));
    };
    // Created on
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1;
        const year = date.getUTCFullYear();
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
        return formattedDate;
    };
    const dateBodyTemplate = (data) => {
        return formatDate(data.creationDate);
    };
    // Duration
    const calculateDuration = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const durationInMs = end.getTime() - start.getTime();
        const durationInDays = Math.ceil(durationInMs / (1000 * 60 * 60 * 24));
        if (durationInDays < 7) {
            return `${durationInDays} day${durationInDays > 1 ? 's' : ''}`;
        }
        else {
            const durationInWeeks = Math.ceil(durationInDays / 7);
            return `${durationInWeeks} week${durationInWeeks > 1 ? 's' : ''}`;
        }
    };
    const durationBodyTemplate = (data) => {
        return calculateDuration(data.creationDate, data.completionDate);
    };
    // Created by
    const adminBodyTemplate = (data) => {
        const adminSelected = admin.filter((item, index) => item.adminId === data.createdBy);
        return adminSelected[0]?.name;
    };
    // Attendee
    const locationBodyTemplate = (data) => {
        return data.location.join(', ');
    };
    // Sort at Class
    const classBodyTemplate = (data) => {
        return _jsx(Link, { to: `/class/detail/${data.classId}`, children: data.className });
    };
    const handleDeleteTag = (item) => {
        dispatch(deleteSearchClassTag(item));
    };
    const attendeeBodyTemplate = (data) => {
        return _jsx(TagContained, { value: data.attendeeType, color: getAttendee(data) });
    };
    const getAttendee = (item) => {
        switch (item.attendeeType) {
            case 'intern':
                return 'primary';
            case 'Online fee-fresher':
                return 'green';
            case 'fresher':
                return 'peach';
            case 'Offline fee-fresher':
                return 'orange';
            default:
                return 'primary';
        }
    };
    const filteredData = searchValue && searchValue.length > 0
        ? data?.filter(item => {
            return searchValue.every(key => Object.values(item).some(value => value.toString().toLowerCase().includes(key.toLowerCase())));
        })
        : data;
    return (_jsxs("div", { children: [_jsx("h1", { className: style.title, children: "Training Class" }), _jsxs("div", { className: style.contentContainer, children: [_jsxs("div", { className: style.searchContainer, children: [_jsxs("div", { className: style.search, children: [_jsxs(IconField, { iconPosition: "left", children: [_jsx(InputIcon, { className: "pi pi-search" }), _jsx(InputText, { value: inputValue, onKeyDown: e => {
                                                    if (e.key === 'Enter') {
                                                        dispatch(searchClassTag(inputValue));
                                                        setInputValue('');
                                                    }
                                                }, onChange: (e) => {
                                                    setUpdateData(e.target.value);
                                                    setInputValue(e.target.value);
                                                }, placeholder: "Search by..." })] }), _jsx(FilteringTool, {})] }), _jsxs(ButtonContained, { onHandleClick: () => {
                                    navigate('/class/create');
                                }, children: [_jsx(AddIcon, { color: "white" }), _jsx("span", { children: "Add new" })] })] }), _jsx("div", { className: style.tagContainer, children: searchValue.map((item, index) => {
                            return (_jsx(TagContained, { icon: "pi pi-times", value: item, onHandleClick: e => {
                                    handleDeleteTag(item);
                                } }, index));
                        }) }), filteredData && (_jsxs(Table, { data: filteredData, children: [_jsx(Column, { header: "Class", body: classBodyTemplate, sortable: true }), _jsx(Column, { header: "Class Code", field: "classCode", sortable: true }), _jsx(Column, { header: "Created on", body: dateBodyTemplate, sortable: true }), _jsx(Column, { header: "Created by", body: adminBodyTemplate, sortable: true }), _jsx(Column, { header: "Duration", body: durationBodyTemplate, sortable: true }), _jsx(Column, { header: "Attendee", body: attendeeBodyTemplate, sortable: true }), _jsx(Column, { header: "Location", body: locationBodyTemplate, sortable: true }), _jsx(Column, { header: "FSU", field: "FSU" }), _jsx(Column, { headerStyle: { width: '5rem', textAlign: 'center' }, bodyStyle: { textAlign: 'center', overflow: 'visible' }, body: actionBodyTemplate })] }))] }), _jsx(ConfirmDialog, { className: style.dialogContainer, visible: visibleDialog, onHide: onHideDialog, message: `Do you really want to delete ${selectedClass?.className} class? This class cannot be restored.`, header: _jsxs("div", { className: style.dialogHeader, children: [_jsx(ReportProblemIcon, { color: "var(--orange-color)" }), _jsx("span", { children: "Delete Class" })] }), footer: _jsxs("div", { className: style.dialogFooter, children: [_jsx(ButtonUnderlined, { onHandleClick: reject, children: "Cancel" }), _jsx(ButtonContained, { color: "primary", onHandleClick: accept, children: "Delete" })] }) })] }));
};
