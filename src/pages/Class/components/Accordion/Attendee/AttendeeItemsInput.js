import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './AttendeeItems.module.css';
import { InputText } from 'primereact/inputtext';
export default function AttendeeItems({ label, bgColor = 'white', color = 'white', handleChange, parentValue, }) {
    const [value, setValue] = useState();
    return (_jsxs("div", { className: styles.attendeeItems, style: { background: `${bgColor}`, color: `${color}` }, children: [_jsx("p", { className: styles.attendeeItemsLabel, children: label }), _jsx(InputText, { className: styles.cusInput, value: parentValue || value, onChange: e => {
                    setValue(e.target.value);
                    handleChange(e.target.value);
                } })] }));
}
