import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useEffect } from 'react'
// import { useAppDispatch } from '../../../../app/hooks'
// import { type Schedule } from '../../../../context/Interface/CourseSchedule'
// import { setCreateStage } from '../../../../features/syllabus/syllabusCreateSlice'
// import ProgramDetailContent from './ProgramDetailContent'
// import styles from './Outline.module.css'
// import { Button } from 'primereact/button'
// const Outline = () => {
//   const dispatch = useAppDispatch()
//   useEffect(() => {
//     dispatch(setCreateStage('outline'));
//   }, [dispatch]);
//   const schedule: Schedule[] = [
//     {
//       day: 'Day 1',
//       units: [
//         {
//           unitName: 'Math',
//           duration: '30 days',
//           miniUnits: [
//             {
//               miniUnitName: 'How to Plus',
//               outcome: 'Plus',
//               miniDuration: '30m',
//               isOnline: false,
//               type: '',
//               learningMaterials: [
//                 { filename: '', uploadedBy: '', uploadedOn: '' },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ]
//   return (
//     <>
//     <div >
//       <ProgramDetailContent schedule={schedule} />
//     </div>
//     <div className={`${styles.addBtn} ${styles.addDayBtn}`}>
//     <Button label="Add unit" icon="pi pi-plus-circle" />
//   </div>
//     </>
//   )
// }
// export default Outline
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { setCreateStage } from '../../../../features/syllabus/syllabusCreateSlice';
import ProgramDetailContent from './ProgramDetailContent';
import styles from './Outline.module.css';
import { Button } from 'primereact/button';
import TimeAllocation from '../TimeAllocation/TimeAllocation';
const Outline = () => {
    const dispatch = useAppDispatch();
    const timeAllocationData = [54, 29, 9, 1, 6];
    const [schedule, setSchedule] = useState(() => {
        const storedSchedule = localStorage.getItem('schedule');
        const initialSchedule = [
            {
                day: 'Day 1',
                units: [],
            },
        ];
        if (storedSchedule) {
            const schedule = JSON.parse(storedSchedule);
            if (schedule.length > 0) {
                return schedule;
            }
            else
                return initialSchedule;
        }
        else {
            return initialSchedule;
        }
    });
    useEffect(() => {
        dispatch(setCreateStage('outline'));
    }, [dispatch]);
    const handleAddDay = () => {
        const newDay = {
            day: `Day ${schedule.length + 1}`,
            units: [],
        };
        setSchedule([...schedule, newDay]);
    };
    useEffect(() => {
        localStorage.setItem('schedule', JSON.stringify(schedule));
        console.log(typeof setSchedule);
    }, [schedule]);
    return (_jsxs("div", { className: styles.outlineContent, children: [_jsxs("div", { className: styles.scheduleList, children: [_jsx("div", { children: _jsx(ProgramDetailContent, { schedule: schedule, setSchedule: setSchedule }) }), _jsx("div", { className: `${styles.addBtn} ${styles.addDayBtn}`, children: _jsx(Button, { label: "Add unit", icon: "pi pi-plus-circle", onClick: handleAddDay }) })] }), _jsx("div", { className: styles.allocation, children: _jsx(TimeAllocation, { data: timeAllocationData }) })] }));
};
export default Outline;
