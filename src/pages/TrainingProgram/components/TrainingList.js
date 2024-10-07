import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/consistent-type-imports */
import 'primeicons/primeicons.css';
import { Column } from 'primereact/column';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { Table } from '../../../components/Table/Table';
import TagContained from '../../../components/Tag/TagContained';
import { deletePrograms, duplicatePrograms, getAllPrograms, } from '../../../features/program/trainingProgramSlice';
import ActionTable from './ActionTable';
import styles from './TrainingList.module.css';
export default function TrainingList({ data, loading, admins, }) {
    const [visible, setVisible] = useState(false);
    const [selectedProgramId, setSelectedProgramId] = useState(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    function randomID(length = 8) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
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
    const calculateDuration = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const durationInMs = end.getTime() - start.getTime();
        const durationInDays = Math.ceil(durationInMs / (1000 * 60 * 60 * 24));
        return `${durationInDays} day${durationInDays > 1 ? 's' : ''}`;
    };
    const handleDelete = (id) => {
        dispatch(deletePrograms(id)).then(resultAction => {
            if (deletePrograms.fulfilled.match(resultAction)) {
                dispatch(getAllPrograms());
            }
        });
    };
    const handleDuplicateProgram = (program) => {
        const newProgram = { ...program, courseId: randomID() };
        dispatch(duplicatePrograms(newProgram)).then(resultAction => {
            if (duplicatePrograms.fulfilled.match(resultAction)) {
                dispatch(getAllPrograms());
            }
        });
    };
    const actionTable = (data, option) => {
        return (_jsx(ActionTable, { data: data, onHandleVisible: setVisible, onHandleSelectProgram: setSelectedProgramId, onHandleDuplicateProgram: handleDuplicateProgram }));
    };
    const dateBody = (course) => {
        return formatDate(course.creationDate);
    };
    const getSeverity = (course) => {
        switch (course.status) {
            case 'status 1':
                return 'primary';
            case 'status 2':
                return 'secondary';
            case 'status 3':
                return 'blue';
            default:
                return 'primary';
        }
    };
    const programNameBody = (course) => {
        return (_jsx("span", { onClick: () => navigate(`/training-program/detail/${course.courseId}`), children: course.courseName }));
    };
    const statusBodyTemplate = (course) => {
        return _jsx(TagContained, { value: course.status, color: getSeverity(course) });
    };
    const durationBodyTemplate = (course) => {
        return calculateDuration(course.startTime, course.endTime);
    };
    const adminBodyTemplate = (course) => {
        const adminSelected = admins.find(item => item.adminId === course.createdBy)?.name;
        return _jsxs("span", { children: [" ", adminSelected, " "] });
    };
    const accept = () => {
        handleDelete(selectedProgramId);
    };
    const reject = () => { };
    return (_jsxs("div", { className: "w-[100%] px-[30px] mt-3", children: [_jsxs(Table, { data: data, children: [_jsx(Column, { field: "courseId", header: "ID", sortable: true }), _jsx(Column, { body: programNameBody, header: "Program name", sortable: true, style: {
                            fontWeight: 600,
                            cursor: 'pointer',
                        } }), _jsx(Column, { header: "Create on", body: dateBody, sortable: true }), _jsx(Column, { body: adminBodyTemplate, header: "Created by", sortable: true }), _jsx(Column, { body: durationBodyTemplate, header: "Duration", sortable: true }), _jsx(Column, { body: statusBodyTemplate, header: "Status", sortable: true }), _jsx(Column, { body: actionTable }), loading && _jsx("span", { children: "Loading..." })] }), _jsx("div", { children: _jsx(ConfirmDialog, { visible: visible, onHide: () => setVisible(false), message: "Are you sure you want to delete this program?", header: "Confirmation", icon: "pi pi-exclamation-triangle", accept: accept, reject: reject, breakpoints: { '1100px': '75vw', '960px': '100vw' }, className: styles.dialogContainer }) })] }));
}
