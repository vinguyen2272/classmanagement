import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { setCreateStage } from '../../../../features/syllabus/syllabusCreateSlice';
import ProgramDetailContent from './ProgramDetailContent';
import { useParams } from 'react-router-dom';
const Outline = () => {
    const { id } = useParams();
    const syllabus = useAppSelector(state => state.syllabus.syllabuses.find(s => s.syllabusId === id));
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setCreateStage('outline'));
    }, [dispatch]);
    const schedule = syllabus?.schedule;
    return (_jsx("div", { style: { width: '100%' }, children: _jsx(ProgramDetailContent, { schedule: schedule }) }));
};
export default Outline;
