import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dropdown } from 'primereact/dropdown';
import { Indicator } from '../../../../../assets/svg';
import Template from '../AccordionTemplate/Template';
import styles from './Attendee.module.css';
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
import { useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import AttendeeItemsInput from './AttendeeItemsInput';
export default function AttendeeInput({ isShow = 0, disabled = false }) {
    const ATTENDEETYPE = [
        { name: 'Internship', code: 'IN' },
        { name: 'Fresher', code: 'FR' },
        { name: 'Junior', code: 'JU' },
        { name: 'Senior', code: 'SE' },
        { name: 'Leader', code: 'LE' },
    ];
    const [attendeeType, setAttendeeType] = useState();
    const [planned, setPlanned] = useState();
    const [accepted, setAccepted] = useState();
    const [actual, setActual] = useState();
    return (_jsx(PrimeReactProvider, { children: _jsx("div", { id: "attendeeAccordion", className: styles.attendeeAccordion, children: _jsx(Template, { icon: _jsx(Indicator.GradeIcon, { color: "white" }), header: 'Attendee', subheader: _jsx("div", { className: styles.dropdownWrapper, children: _jsx(Dropdown, { value: attendeeType, onChange: e => setAttendeeType(e.value), options: ATTENDEETYPE, optionLabel: "name", editable: true, placeholder: "Select", className: styles.dropdown }) }), isShow: isShow, disabled: disabled, children: _jsxs("div", { className: styles.attendeeContainer, children: [_jsx(AttendeeItemsInput, { label: 'Planned', bgColor: "var(--primary-color)", handleChange: value => setPlanned(value), parentValue: planned }), _jsx(AttendeeItemsInput, { label: 'Accepted', bgColor: "#285D9A", parentValue: accepted, handleChange: value => setAccepted(value) }), _jsx(AttendeeItemsInput, { label: 'Actual', bgColor: "white", color: "black", parentValue: actual, handleChange: value => setActual(value) })] }) }) }) }));
}
