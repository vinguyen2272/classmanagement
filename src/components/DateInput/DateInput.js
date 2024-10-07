import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Calendar } from 'primereact/calendar';
import styles from './DateInput.module.css';
import { CalendarIcon } from "../../assets/svg/NavigationMenu/NavigationMenu";
const DateInput = forwardRef((props, ref) => {
    return (_jsxs("div", { className: `${styles.canlendarContainer} card flex justify-content-center`, children: [_jsx(CalendarIcon, {}), _jsx(Calendar, { placeholder: "Select Date", readOnlyInput: true, className: styles.calendaGroup, variant: "filled", value: props.value, onChange: props.onChange, ref: ref })] }));
});
export default DateInput;
