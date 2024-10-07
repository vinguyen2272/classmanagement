import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { setCreateStage } from '../../../../features/syllabus/syllabusCreateSlice';
import TimeAllocation from '../TimeAllocation/TimeAllocation';
import AssessmentSchema from './AssessmentSchema';
import styles from './TrainingMaterial.module.css';
const TrainingMaterial = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setCreateStage('other'));
    }, [dispatch]);
    const timeAllocationData = [54, 29, 9, 1, 6];
    return (_jsxs("div", { className: styles.tabElement, children: [_jsx("div", { className: styles.timeAllocation, children: _jsx(TimeAllocation, { data: timeAllocationData, height: 210, width: 210 }) }), _jsx("div", { className: styles.assessmentSchema, children: _jsx(AssessmentSchema, {}) })] }));
};
export default TrainingMaterial;
