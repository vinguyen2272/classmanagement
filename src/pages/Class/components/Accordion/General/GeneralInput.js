import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Template from '../AccordionTemplate/Template';
import GeneralItem from './GeneralItem';
import styles from './General.module.css';
import { Delivery, Indicator, NavigationMenu, Other, } from '../../../../../assets/svg';
import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
export default function GeneralInput({ classTime = {
    from: { hour: '09', minute: '00' },
    to: { hour: '12', minute: '00' },
}, location = ['Ftown1', 'Ftown2'], trainer = ['Trainer1', 'Trainer2'], admin = ['Admin1', 'Admin2'], FSU = 'FSU', email = 'anhhungxadieu@gmail', createdDate = '2022-01-01', createdBy = 'John Doe', reviewedDate = '2022-01-02', reviewedBy = 'Jane Doe', approvedDate = '2022-01-03', approvedBy = 'Mark Johnson', disabled = false, isShow = 0, }) {
    const [fromTime, setFromTime] = useState();
    const [toTime, setToTime] = useState();
    const [locationInput, setLocationInput] = useState();
    const [adminInput, setAdminInput] = useState();
    const [FSUInput, setFSUInput] = useState();
    const [contactInput, setContactInput] = useState();
    const LOCATION = [
        { name: 'Ftown 1', code: 'F1' },
        { name: 'Ftown 2', code: 'F1' },
        { name: 'Ftown 3', code: 'F3' },
    ];
    const ADMIN = [{ name: 'admin 1' }, { name: 'admin 2' }, { name: 'admin 3' }];
    const CONSTFSU = [{ name: 'FSA' }, { name: 'FSA' }];
    const CONTACT = [
        { name: 'contact1@gmail.com' },
        { name: 'contact2@gamail.com' },
    ];
    return (_jsx("div", { id: "generalAccordion", className: styles.generalAccordion, children: _jsx(Template, { header: "General", icon: _jsx(NavigationMenu.CalendarIcon, { color: "white" }), disabled: disabled, isShow: isShow, children: _jsxs("div", { className: styles.generalContainer, children: [_jsx(GeneralItem, { label: 'Class time', icon: _jsx(Other.AlarmIcon, { color: "#285D9A" }), children: _jsxs("div", { className: styles.classTimeInputWrapper, children: [_jsx("p", { className: styles.textNormal, children: "from" }), _jsx(Calendar, { value: fromTime, onChange: e => {
                                        if (e.value !== null) {
                                            setFromTime(e.value);
                                        }
                                    }, timeOnly: true, className: styles.cusTimeCalendar }), _jsx("p", { className: styles.textNormal, children: "to" }), _jsx(Calendar, { value: toTime, onChange: e => {
                                        if (e.value !== null) {
                                            setToTime(e.value);
                                        }
                                    }, timeOnly: true, className: styles.cusTimeCalendar })] }) }), _jsx(GeneralItem, { label: 'Location', icon: _jsx(Other.HomeWorkIcon, { color: "#285D9A" }), children: _jsx(Dropdown, { value: locationInput, onChange: e => setLocationInput(e.value), options: LOCATION, optionLabel: "name", editable: true, placeholder: "Select", className: styles.cusDropdown }) }), _jsx(GeneralItem, { label: 'Trainer', icon: _jsx(Delivery.ConceptIcon, { color: "#8B8B8B" }), disabled: true }), _jsx(GeneralItem, { label: 'Admin', icon: _jsx(Indicator.GradeIcon, { color: "#285D9A" }), children: _jsx(Dropdown, { value: adminInput, onChange: e => setAdminInput(e.value), options: ADMIN, optionLabel: "name", placeholder: "Select", className: styles.cusDropdown }) }), _jsxs(GeneralItem, { label: 'FSU', icon: _jsx(Indicator.SupplierIcon, { color: "#285D9A" }), children: [_jsx(Dropdown, { value: FSUInput, onChange: e => setFSUInput(e.value), options: CONSTFSU, optionLabel: "name", placeholder: "Select", className: styles.cusDropdown }), _jsx(Dropdown, { value: contactInput, onChange: e => setContactInput(e.value), options: CONTACT, optionLabel: "name", placeholder: "Contact", className: styles.cusDropdown })] }), _jsx("div", { className: styles.separateLine }), _jsx(GeneralItem, { label: 'Created', disabled: true }), _jsx(GeneralItem, { label: 'Review', disabled: true }), _jsx(GeneralItem, { label: 'Approve', disabled: true })] }) }) }));
}
