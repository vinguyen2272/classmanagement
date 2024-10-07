import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PrimeReactProvider } from 'primereact/api';
import { Indicator } from '../../../../../assets/svg';
import Template from '../AccordionTemplate/Template';
import styles from './Attendee.module.css';
import AttendeeItems from './AttendeeItems';
export default function Attendee({ planned, accepted, actual, attendeeType = 'Fresher', disabled = false, isShow = 0, }) {
    return (_jsx(PrimeReactProvider, { children: _jsx("div", { id: "attendeeAccordion", className: styles.attendeeAccordion, children: _jsx(Template, { icon: _jsx(Indicator.GradeIcon, { color: "white" }), header: 'Attendee', subheader: attendeeType, disabled: disabled, isShow: isShow, children: _jsxs("div", { className: styles.attendeeContainer, children: [_jsx(AttendeeItems, { label: 'Planned', value: planned, bgColor: "var(--primary-color)" }), _jsx(AttendeeItems, { label: 'Accepted', value: accepted, bgColor: "#285D9A" }), _jsx(AttendeeItems, { label: 'Actual', value: actual, bgColor: "white", color: "black" })] }) }) }) }));
}
