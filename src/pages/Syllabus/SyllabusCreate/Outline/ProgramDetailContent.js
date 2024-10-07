import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion, AccordionTab } from 'primereact/accordion';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import TagContained from '../../../../components/Tag/TagContained';
import styles from './ProgramDetailContent.module.css';
import TagOutlined from '../../../../components/Tag/TagOutlined';
export default function ProgramDetailContent({ schedule, setSchedule, }) {
    const handleRemoveDay = (index) => {
        const newSchedule = [...schedule];
        newSchedule.splice(index, 1);
        newSchedule.map((schedule, index) => (schedule.day = `Day ${index + 1}`));
        setSchedule(newSchedule);
    };
    return (_jsx("div", { className: `${styles.content}`, children: schedule.length > 0 ? (schedule.map((day, index) => (_jsx(Accordion, { children: _jsx(AccordionTab, { header: _jsxs("p", { className: "text-white flex items-center gap-[10px]", children: [day.day, _jsx("i", { className: "text-[20px] pi pi-minus-circle text-red-500", onClick: () => {
                                handleRemoveDay(index);
                            } })] }), className: "bg-primary shadow-lg mb-2 overflow-hidden", children: _jsx(Accordion, { className: "mb-0.5", children: day.units.length === 0 ? (_jsx(AccordionTab, { header: _jsxs("div", { className: "flex gap-10 items-center", children: [_jsx("p", { className: "text-[18px] font-bold", children: "Unit 1" }), _jsxs("div", { className: "flex gap-[20px] items-center", children: [_jsx("input", { type: "text", className: styles.unitCreateInput, placeholder: "Unit name" }), _jsxs("div", { className: `${styles.addBtn}  ${styles.addDayBtn}`, children: [' ', _jsx(Button, { label: "Create" })] })] }), _jsx("div", { className: "ml-auto", children: _jsx("i", { className: "pi pi-chevron-circle-down" }) })] }), className: "border-b-[1px]" })) : (day.units.map((unit, index) => (_jsxs(AccordionTab, { header: _jsxs("div", { className: "flex gap-10", children: [_jsxs("p", { className: "text-[18px] font-bold", children: ["Unit ", index + 1] }), _jsx("div", { children: _jsxs("h5", { children: [_jsx("p", { className: "font-bold mb-2", children: unit.unitName }), _jsx("p", { children: "6 hrs" })] }) }), _jsx("div", { className: "ml-auto", children: _jsx("i", { className: "pi pi-chevron-circle-down" }) })] }), className: "border-b-[1px]", children: [_jsx("div", { className: "flex gap-16", children: _jsxs("div", { className: "flex-1", children: [unit.miniUnits.map((miniUnit, index) => (_jsx("div", { className: "bg-gray px-[20px] py-2 rounded-[10px] mb-1", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex-1", children: _jsx("h6", { className: "font-bold", children: miniUnit.miniUnitName }) }), _jsxs("div", { className: "flex gap-10 items-center", children: [_jsx(TagContained, { value: "K65D" }), _jsx("p", { children: "10 mins" }), miniUnit.isOnline ? (_jsx(TagOutlined, { value: "online" })) : (_jsx(TagContained, { value: "offline" })), _jsx("i", { className: "pi pi-user" }), _jsx("i", { className: "pi pi-folder" })] })] }) }, index))), _jsx("i", { className: "py-2 text-[20px] pi pi-plus-circle text-primary-500" })] }) }), _jsx("div", { className: `${styles.addBtn}  ${styles.addUnitBtn}`, children: _jsx(Button, { label: "Add unit", icon: "pi pi-plus-circle" }) })] }, unit.unitName)))) }) }) }, day.day)))) : (_jsx("p", { children: "No Data Found" })) }));
}
