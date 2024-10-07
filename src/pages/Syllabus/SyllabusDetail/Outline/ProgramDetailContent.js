import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion, AccordionTab } from 'primereact/accordion';
import TagContained from '../../../../components/Tag/TagContained';
import styles from './ProgramDetailContent.module.css';
import TagOutlined from '../../../../components/Tag/TagOutlined';
export default function ProgramDetailContent({ schedule }) {
    return (_jsx("div", { className: `${styles.content} px-[30px]`, children: schedule.length > 0 ? (schedule.map(day => (_jsx(Accordion, { children: _jsx(AccordionTab, { header: _jsx("p", { className: "text-white", children: day.day }), className: "bg-primary shadow-lg mb-2 overflow-hidden", children: _jsx(Accordion, { className: "mb-0.5", children: day.units.map((unit, index) => (_jsx(AccordionTab, { header: _jsxs("div", { className: "flex gap-10", children: [_jsxs("p", { className: "text-[18px] font-bold", children: ["Unit ", index + 1] }), _jsx("div", { children: _jsxs("h5", { children: [_jsx("p", { className: "font-bold mb-2", children: unit.unitName }), _jsx("p", { children: "6 hrs" })] }) }), _jsx("div", { className: "ml-auto", children: _jsx("i", { className: "pi pi-chevron-circle-down" }) })] }), className: "border-b-[1px]", children: _jsxs("div", { className: "flex gap-16", children: [_jsx("p", { className: "invisible", children: "Test" }), _jsx("div", { className: "flex-1", children: unit.miniUnits.map((miniUnit, index) => (_jsx("div", { className: "bg-gray px-[20px] py-2 rounded-[10px] mb-1", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-1", children: _jsx("h6", { className: "font-bold", children: miniUnit.miniUnitName }) }), _jsxs("div", { className: "flex gap-10 items-center", children: [_jsx(TagContained, { value: "K65D" }), _jsx("p", { children: "10 mins" }), miniUnit.isOnline ? (_jsx(TagOutlined, { value: "online" })) : (_jsx(TagContained, { value: "offline" })), _jsx("i", { className: "pi pi-user" }), _jsx("i", { className: "pi pi-folder" })] })] }) }, index))) })] }) }, unit.unitName))) }) }) }, day.day)))) : (_jsx("p", { children: "No Data Found" })) }));
}
