import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { setCreateStage } from '../../../../features/syllabus/syllabusCreateSlice';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import styles from './General.module.css';
import TimeAllocation from '../TimeAllocation/TimeAllocation';
import { useParams } from 'react-router-dom';
import { FilterCenterFocusIcon, GradeIcon, VerifiedUserIcon, } from '../../../../assets/svg/Indicator/Indicator';
import { GroupIcon, SettingIcon, } from '../../../../assets/svg/NavigationMenu/NavigationMenu';
const General = () => {
    const { id } = useParams();
    const syllabus = useAppSelector(state => state.syllabus.syllabuses.find(s => s.syllabusId === id));
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setCreateStage('general'));
    }, [dispatch]);
    const [levelSelectedOption, setLevelSelectedOption] = useState(null);
    function handleChange(e) {
        setLevelSelectedOption(e.value);
    }
    const timeAllocationData = [54, 29, 9, 1, 6];
    return (_jsxs("div", { className: styles.general, children: [_jsxs("div", { className: styles.tabElement, children: [_jsxs("div", { className: styles.item_top, children: [_jsx("div", { className: styles.form, children: _jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.item, children: [_jsx(GradeIcon, {}), _jsx("label", { className: styles.label, htmlFor: "level", children: "Level" }), _jsx("div", { className: styles.value, children: syllabus?.level })] }), _jsxs("div", { className: styles.item, children: [_jsx(GroupIcon, {}), _jsx("label", { className: styles.label, htmlFor: "attendee", children: "Attendee number" }), _jsx("div", { className: styles.value, children: syllabus?.attendeeNumber })] }), _jsxs("div", { className: styles.item, children: [_jsx(VerifiedUserIcon, {}), _jsx("label", { className: styles.label, htmlFor: "output", children: "Output standards" }), _jsx("div", { className: styles.value, children: syllabus?.outputStandard.map((standard) => (_jsx("button", { className: styles.standardButton, children: standard }, standard))) })] })] }) }), _jsxs("div", { className: styles.techRequirement, children: [_jsxs("div", { className: styles.item, children: [_jsx(SettingIcon, {}), _jsx("p", { className: styles.TagName, children: "Technical Requirement(s)" })] }), _jsxs("ul", { className: styles.techRequirementList, children: [_jsx("p", { children: "Trainees\u2019 PCs need to have following software installed & run without any issues:" }), _jsx("li", { children: "Microsoft SQL Server 2005 Express (in which the trainees can create & manipulate on their own database" }), _jsx("li", { children: "Microsoft Visual Studio 2017" }), _jsx("li", { children: "Microsoft Office 2007 (Visio, Word, PowerPoint)" })] })] })] }), _jsxs("div", { className: styles.objective, children: [_jsxs("div", { className: styles.item, children: [_jsx(FilterCenterFocusIcon, {}), _jsx("label", { className: styles.label, htmlFor: "level", children: "Course objectives" })] }), _jsx("div", { className: styles.value, children: syllabus?.courseObjective })] })] }), _jsx("div", { className: styles.timeAllocation, children: _jsx(TimeAllocation, { data: timeAllocationData }) })] }));
};
export default General;
