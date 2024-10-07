import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import ButtonContained from '../../../components/Button/ButtonContained';
import ButtonUnderlined from '../../../components/Button/ButtonUnderlined';
import { getCourseScheduleThunk, getDetailPrograms, programActions, selectCourseSchedule, selectDetailProgram, } from '../../../features/program/trainingProgramSlice';
import style from './TrainingProgramAddSyllabus.module.css';
import { AutoComplete, } from 'primereact/autocomplete';
import { getSyllabuses } from '../../../features/syllabus/syllabusFetchSlice';
import ProgramDetailContent from '../components/ProgramDetailContent';
import { getAdmin, selectAdmin } from '../../../features/admin/adminSlice';
export const TrainingProgramAddSyllabus = () => {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getSyllabuses());
        dispatch(getCourseScheduleThunk('1'));
        dispatch(getDetailPrograms('1'));
        dispatch(getAdmin());
    }, [dispatch]);
    const syllabuses = useAppSelector(state => state.syllabus.syllabuses);
    console.log('syllabuses:', syllabuses);
    const programDetail = useAppSelector(selectDetailProgram);
    const courseSchedule = useAppSelector(selectCourseSchedule);
    const admins = useAppSelector(selectAdmin);
    const search = (event) => {
        const syllabusName = syllabuses.map(item => item.name);
        setItems(syllabusName);
    };
    const calculateDuration = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const durationInMs = end.getTime() - start.getTime();
        const durationInDays = Math.ceil(durationInMs / (1000 * 60 * 60 * 24));
        return `${durationInDays} `;
    };
    const admin = admins.find(item => item.adminId === programDetail?.createdBy)?.name;
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
    return (_jsxs(_Fragment, { children: [programDetail && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "p-[30px]", children: [_jsxs("p", { children: [_jsx("span", { className: "font-bold text-[24px] ", children: calculateDuration(programDetail?.startTime, programDetail?.endTime) }), "day(s) (97 hours)"] }), _jsxs("p", { children: ["Modified on ", formatDate(programDetail.creationDate), " by", _jsxs("span", { className: "font-bold", children: [" ", admin] })] })] }), _jsx(ProgramDetailContent, { course: programDetail, calculateDuration: calculateDuration, formatDate: formatDate, admin: admin, courseSchedule: courseSchedule })] })), _jsxs("div", { className: style.contentContainer, children: [_jsxs("div", { className: style.classInput, children: [_jsx("h3", { children: "Search syllabus" }), _jsx(AutoComplete, { value: value, suggestions: items, completeMethod: search, onChange: e => setValue(e.value), className: style.autoCompleteInput }), _jsx(ButtonContained, { onHandleClick: () => { }, children: "Create" })] }), _jsxs("div", { className: style.buttonContainer, children: [_jsx(ButtonContained, { onHandleClick: () => {
                                    dispatch(programActions.setSelectProgramStep('create training program'));
                                }, children: "Back" }), _jsxs("div", { className: style.button, children: [_jsx(ButtonUnderlined, { children: "Cancel" }), _jsx(ButtonContained, { children: "Save" })] })] })] })] }));
};
