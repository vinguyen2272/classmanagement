import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Tag } from 'primereact/tag';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getCourseScheduleThunk, getDetailPrograms, selectCourseSchedule, selectDetailProgram, } from '../../../features/program/trainingProgramSlice';
import ProgramDetailContent from './ProgramDetailContent';
import Title from './Title';
import { getAdmin, selectAdmin } from '../../../features/admin/adminSlice';
export default function TrainingProgramDetail() {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const programDetail = useAppSelector(selectDetailProgram);
    const admins = useAppSelector(selectAdmin);
    const courseSchedule = useAppSelector(selectCourseSchedule);
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
    useEffect(() => {
        if (id) {
            dispatch(getDetailPrograms(id));
            dispatch(getCourseScheduleThunk(id));
        }
        dispatch(getAdmin());
    }, [dispatch, id]);
    return (_jsxs(_Fragment, { children: [programDetail && (_jsxs("div", { className: "w-[100%]", children: [_jsxs(Title, { children: [_jsxs("p", { children: [" ", programDetail?.courseName, " "] }), _jsxs("div", { className: "font-bold flex items-center ", children: [_jsxs("h2", { style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                        }, children: [_jsx("span", { className: " text-[40px] ", children: programDetail?.courseAlias }), _jsx(Tag, { style: {
                                                    backgroundColor: 'transparent',
                                                    border: '1px solid #fff',
                                                    borderRadius: '40px',
                                                    letterSpacing: 0,
                                                }, children: programDetail?.status })] }), _jsx("i", { className: "pi pi-ellipsis-h ml-auto", style: {
                                            fontSize: '30px',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                        } })] })] }), _jsxs("div", { className: "p-[30px]", children: [_jsxs("p", { children: [_jsx("span", { className: "font-bold text-[24px] ", children: calculateDuration(programDetail?.startTime, programDetail?.endTime) }), "day(s) (97 hours)"] }), _jsxs("p", { children: ["Modified on ", formatDate(programDetail.creationDate), " by", _jsxs("span", { className: "font-bold", children: [" ", admin] })] })] }), _jsx("hr", { className: "bg-primary font-bold h-0.5" }), _jsxs("div", { className: "px-[30px]", children: [_jsx("h3", { className: "font-bold text-[24px]", children: "General information" }), _jsx("div", { className: "w-[max-content] rounded-sm  py-3 shadow-lg", children: _jsx("div", { className: "px-[30px]", children: _jsxs("ul", { className: "list-disc", children: [_jsx("li", { children: "Leverage DevOps practices to transform processes with Lean, Agile, and ITSM" }), _jsx("li", { children: "Learn how to break the silos between Development and Operations" }), _jsx("li", { children: "Experiential learning with case studies, real-world success stories, engaging activities, more" })] }) }) })] }), programDetail && (_jsx(ProgramDetailContent, { course: programDetail, calculateDuration: calculateDuration, formatDate: formatDate, admin: admin, courseSchedule: courseSchedule }))] })), !programDetail && _jsx("p", { children: " No Data Found " })] }));
}
