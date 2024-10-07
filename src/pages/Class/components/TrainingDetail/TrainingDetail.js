import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './TrainingDetail.module.css';
import { TabPanel, TabView } from 'primereact/tabview';
import { Card } from 'primereact/card';
import SyllabusCardWithAvatar from '../../../../components/SyllabusCardWithAvatar/SyllabusCardWithAvatar';
import { PrimeReactProvider } from 'primereact/api';
export default function TrainingDetail({ programNameProp = 'DevOps Foundation', programDurationProp, programModifiedDateProp, programModifiedAuthorProp, programIsBtnEditProp, syllabusData, }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleTabChange = (e) => {
        setActiveIndex(e.index);
    };
    return (_jsx(PrimeReactProvider, { children: _jsx("div", { className: styles.container, children: _jsxs(TabView, { onTabChange: handleTabChange, children: [_jsxs(TabPanel, { header: "Training Program", headerClassName: activeIndex !== 0 ? styles.inactive : '', children: [_jsxs(Card
                            // title={programNameProp || "DevOps Foundation"}
                            , { 
                                // title={programNameProp || "DevOps Foundation"}
                                className: styles.devops, children: [_jsxs("div", { className: styles.title, children: [_jsx("p", { children: programNameProp }), programIsBtnEditProp && (_jsxs("svg", { width: "44", height: "30", viewBox: "0 0 44 30", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("rect", { width: "44", height: "30", rx: "10", fill: "#F1F1F1" }), _jsx("g", { clipPath: "url(#clip0_68_9518)", children: _jsx("path", { d: "M13 20.25V24H16.75L27.81 12.94L24.06 9.19L13 20.25ZM15.92 22H15V21.08L24.06 12.02L24.98 12.94L15.92 22ZM30.71 8.63L28.37 6.29C28.17 6.09 27.92 6 27.66 6C27.4 6 27.15 6.1 26.96 6.29L25.13 8.12L28.88 11.87L30.71 10.04C31.1 9.65 31.1 9.02 30.71 8.63Z", fill: "#285D9A" }) }), _jsx("defs", { children: _jsx("clipPath", { id: "clip0_68_9518", children: _jsx("rect", { width: "24", height: "24", fill: "white", transform: "translate(10 3)" }) }) })] }))] }), _jsxs("div", { className: styles.detail, children: [_jsx("span", { children: programDurationProp || '31 days (97 hours)' }), _jsx("span", { children: "\u00A0 | \u00A0" }), _jsxs("span", { children: ["Modified on ", programModifiedDateProp || '23/07/2022', " by", ' ', _jsx("b", { children: programModifiedAuthorProp || 'Warrior Tran' })] })] })] }), _jsx("div", { className: styles.listCourse, children: syllabusData.map((syllabus, index) => (_jsx(SyllabusCardWithAvatar, { ...syllabus }, index))) }), _jsx("div", { className: styles.bottomDevops })] }), _jsx(TabPanel, { header: "Attendee list", headerClassName: activeIndex !== 1 ? styles.inactive : '' }), _jsx(TabPanel, { header: "Budget", headerClassName: activeIndex !== 2 ? styles.inactive : '' }), _jsx(TabPanel, { header: "Others", headerClassName: activeIndex !== 3 ? styles.inactive : '' })] }) }) }));
}
