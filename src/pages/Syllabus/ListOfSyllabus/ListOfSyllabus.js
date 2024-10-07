import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Column } from 'primereact/column';
import { Link, useNavigate } from 'react-router-dom';
import { Table } from '../../../components/Table/Table';
import styles from './ListOfSyllabus.module.css';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import ActionButtons from '../components/ActionButton/ActionButton';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getAdmin } from '../../../features/admin/adminSlice';
import { getSyllabuses, deleteSyllabus, duplicateSyllabus, } from '../../../features/syllabus/syllabusFetchSlice';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { ReportProblemIcon } from '../../../assets/svg/Indicator/Indicator';
import ButtonUnderlined from '../../../components/Button/ButtonUnderlined';
import ButtonContained from '../../../components/Button/ButtonContained';
const ListOfSyllabus = () => {
    const menu = useRef(null);
    const calendarRef = useRef(null);
    const data = useAppSelector(state => state.syllabus.syllabuses);
    const admin = useAppSelector(state => state.admin.adminState);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTerms, setSearchTerms] = useState([]);
    const [createdOnDate, setCreatedOnDate] = useState(null);
    const [visibleDialog, setVisibleDialog] = useState(false);
    const [selectedSyllabus, setSelectedSyllabus] = useState(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const confirm = (data) => {
        setSelectedSyllabus(data);
        setVisibleDialog(true);
    };
    const onHideDialog = () => {
        setVisibleDialog(false);
    };
    const accept = () => {
        if (selectedSyllabus) {
            dispatch(deleteSyllabus(selectedSyllabus.syllabusId));
            setVisibleDialog(false);
        }
    };
    const reject = () => {
        setVisibleDialog(false);
    };
    // Duplicate Info
    // const duplicate = (data: Syllabus) => {
    //   const _data = { ...data, id: Date.now() }
    //   dispatch(duplicateSyllabus(_data))
    // }
    const [updateData, setUpdateData] = useState(data);
    const onHandleDuplicateSyllabus = (data) => {
        const _data = { ...data, id: Date.now() };
        setUpdateData([...updateData, _data]);
        dispatch(duplicateSyllabus(_data));
    };
    useEffect(() => {
        dispatch(getSyllabuses());
        dispatch(getAdmin());
    }, [dispatch]);
    const outputStandardTemplate = (rowData) => {
        return rowData.outputStandard.map((standard) => (_jsx("button", { className: styles.standardButton, children: standard }, standard)));
    };
    const statusTemplate = (rowData) => {
        const statusSyllabuses = {
            active: styles.active,
            inactive: styles.inactive,
            draft: styles.draft,
        };
        return (_jsx("button", { className: `${statusSyllabuses[rowData.status]} ${styles.standardButton}`, children: rowData.status }));
    };
    const syllabusTemplate = (rowData) => (_jsx(Link, { to: `/syllabus/${rowData.syllabusId}/detail`, className: styles.link, children: _jsx("b", { children: rowData.name }) }));
    const codeTemplate = (rowData) => (_jsx(Link, { to: `/syllabus/${rowData.syllabusId}/detail`, className: styles.link, children: rowData.code }));
    const createdOnTemplate = (rowData) => (_jsx(Link, { to: `/syllabus/${rowData.syllabusId}/detail`, className: styles.link, children: new Date(rowData.creationDate).toLocaleDateString() }));
    const createdByTemplate = (rowData) => {
        const adminSelected = admin.filter((item, index) => Number(item.adminId) === rowData.createdBy);
        return (_jsx(Link, { to: `/syllabus/${rowData.syllabusId}/detail`, className: styles.link, children: adminSelected[0]?.name }));
    };
    const durationTemplate = (rowData) => (_jsxs(Link, { to: `/syllabus/${rowData.syllabusId}/detail`, className: styles.link, children: [rowData.duration, " days"] }));
    const actionsTemplate = (rowData) => {
        return (_jsx(ActionButtons, { onHandleDelete: () => confirm(rowData), onHandleDuplicate: () => {
                onHandleDuplicateSyllabus(rowData);
            } }));
    };
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            setSearchTerms(prevTerms => [...prevTerms, searchTerm]);
            setSearchTerm('');
        }
    };
    const removeSearchTerm = (term) => {
        setSearchTerms(prevTerms => prevTerms.filter(t => t !== term));
    };
    const filteredData = data.filter(item => {
        const searchFilter = searchTerms.length
            ? searchTerms.every(term => item.name.toLowerCase().includes(term.toLowerCase()) ||
                item.code.toLowerCase().includes(term.toLowerCase()))
            : true;
        let dateFilter = true;
        if (createdOnDate) {
            const inputDate = new Date(createdOnDate);
            if (isNaN(inputDate.getTime())) {
                alert('Invalid date format. Please enter a valid date in MM/DD/YYYY format.');
                dateFilter = false;
            }
            else {
                dateFilter =
                    new Date(item.creationDate).toDateString() ===
                        inputDate.toDateString();
            }
        }
        return searchFilter && dateFilter;
    });
    const handleCalendarIconClick = () => {
        if (calendarRef.current) {
            calendarRef.current.focus();
        }
    };
    const [content, setContent] = useState('<p>Hello, ProseMirror!</p>');
    const handleContentChange = (newContent) => {
        setContent(newContent);
    };
    return (_jsxs("div", { className: styles.container, children: [_jsx("div", { className: styles.h1, children: "Syllabus" }), _jsxs("div", { className: styles.searchContainer, children: [_jsxs("div", { className: styles.filter, children: [_jsxs("span", { className: "p-input-icon-left", children: [_jsx("i", { className: `pi pi-search ${styles.iconSearch}`, onClick: () => document.querySelector(`.${styles.searchInput}`)?.focus() }), _jsx("input", { type: "text", className: styles.searchInput, placeholder: "Search by...", value: searchTerm, onChange: e => setSearchTerm(e.target.value), onKeyDown: handleSearch })] }), _jsxs("span", { className: styles.calendar, onClick: handleCalendarIconClick, children: [_jsx("i", { className: `pi pi-calendar ${styles.iconCalendar}` }), _jsx(Calendar, { ref: calendarRef, value: createdOnDate, onChange: e => setCreatedOnDate(e.value), className: styles.calendarComponent, placeholder: "Created Date" })] })] }), _jsxs("div", { className: styles.more, children: [_jsxs(Button, { className: styles.import, children: [_jsx("i", { className: "pi pi-upload", style: { marginRight: '8px' } }), "Import"] }), _jsxs(Button, { className: styles.add, onClick: () => navigate('/syllabus/create'), children: [_jsx("i", { className: "pi pi-plus", style: { marginRight: '8px' } }), "Add Syllabus"] })] })] }), _jsx("div", { className: styles.filterTags, children: searchTerms.map((term, index) => (_jsxs("button", { className: styles.searchTerm, onClick: () => removeSearchTerm(term), children: [term, _jsx("i", { className: `pi pi-times ${styles.iconTimes}` })] }, index))) }), _jsx("div", { className: styles.tableContainer, children: _jsxs(Table, { data: filteredData, children: [_jsx(Column, { field: "syllabus", header: "Syllabus", body: syllabusTemplate, sortable: true }), _jsx(Column, { field: "code", header: "Code", body: codeTemplate, sortable: true }), _jsx(Column, { field: "createdOn", header: "Created On", body: createdOnTemplate, sortable: true }), _jsx(Column, { field: "createdBy", header: "Created By", body: createdByTemplate, sortable: true }), _jsx(Column, { field: "duration", header: "Duration", body: durationTemplate, sortable: true }), _jsx(Column, { header: "Output Standard", body: outputStandardTemplate }), _jsx(Column, { header: "Status", body: statusTemplate, sortable: true }), _jsx(Column, { header: "Actions", body: actionsTemplate })] }) }), _jsx(ConfirmDialog, { className: styles.dialogContainer, visible: visibleDialog, onHide: onHideDialog, message: `Do you really want to delete ${selectedSyllabus?.name} class? This class cannot be restored.`, header: _jsxs("div", { className: styles.dialogHeader, children: [_jsx(ReportProblemIcon, { color: "var(--orange-color)" }), _jsx("span", { children: "Delete Class" })] }), footer: _jsxs("div", { className: styles.dialogFooter, children: [_jsx(ButtonUnderlined, { onHandleClick: reject, children: "Cancel" }), _jsx(ButtonContained, { color: "primary", onHandleClick: accept, children: "Delete" })] }) })] }));
};
export default ListOfSyllabus;
