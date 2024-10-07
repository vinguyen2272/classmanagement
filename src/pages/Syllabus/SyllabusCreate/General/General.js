import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { setCreateStage } from '../../../../features/syllabus/syllabusCreateSlice';
import { Dropdown } from 'primereact/dropdown';
import { useAppDispatch } from '../../../../app/hooks';
import styles from './General.module.css';
import LevelOptions from './levelSelect';
import { InputText } from 'primereact/inputtext';
import TimeAllocation from '../TimeAllocation/TimeAllocation';
const General = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setCreateStage('general'));
    }, [dispatch]);
    const [levelSelectedOption, setLevelSelectedOption] = useState(null);
    function handleChange(e) {
        setLevelSelectedOption(e.value);
    }
    const timeAllocationData = [54, 29, 9, 1, 6];
    return (_jsxs("div", { className: styles.general, children: [_jsxs("div", { className: styles.tabElement, children: [_jsxs("div", { className: styles.form, children: [_jsxs("div", { className: styles.level, children: [_jsx("label", { className: styles.label, htmlFor: "level", children: "Level" }), _jsx(Dropdown, { value: levelSelectedOption, options: LevelOptions, onChange: handleChange, optionLabel: "label", placeholder: "Select an option", className: styles.levelSelect })] }), _jsxs("div", { className: styles.attendee, children: [_jsx("label", { className: styles.label, htmlFor: "attendee", children: "Attendee number" }), _jsx(InputText, { placeholder: "Attendee number", className: styles.attendeeInput })] })] }), _jsxs("div", { className: styles.techRequirement, children: [_jsx("p", { className: styles.TagName, children: "Technical Requirement(s)" }), _jsxs("ul", { className: styles.techRequirementList, children: [_jsx("p", { children: "Trainees\u2019 PCs need to have following software installed & run without any issues:" }), _jsx("li", { children: "Microsoft SQL Server 2005 Express (in which the trainees can create & manipulate on their own database" }), _jsx("li", { children: "Microsoft Visual Studio 2017" }), _jsx("li", { children: "Microsoft Office 2007 (Visio, Word, PowerPoint)" })] })] })] }), _jsx("div", { className: styles.timeAllocation, children: _jsx(TimeAllocation, { data: timeAllocationData }) })] }));
};
export default General;
