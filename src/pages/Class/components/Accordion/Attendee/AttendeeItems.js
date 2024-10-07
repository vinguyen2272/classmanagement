import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './AttendeeItems.module.css';
export default function AttendeeItems({ label, value, bgColor = 'white', color = 'white', }) {
    return (_jsxs("div", { className: styles.attendeeItems, style: { background: `${bgColor}`, color: `${color}` }, children: [_jsx("p", { className: styles.attendeeItemsLabel, children: label }), _jsx("p", { className: styles.attendeeItemsCount, children: value })] }));
}
