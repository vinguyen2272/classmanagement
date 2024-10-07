import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar } from 'primereact/calendar';
import { NavigationMenu } from '../../../../../assets/svg';
import Template from '../AccordionTemplate/Template';
import styles from './TimeFrame.module.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
import { addLocale } from 'primereact/api';
import { useState } from 'react';
addLocale('en-ThaiVDQ2', {
    firstDayOfWeek: 0,
    dayNames: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ],
    dayNamesMin: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
});
export default function TimeFrameInput({ commenceDate, completionDate, schedule = [completionDate, commenceDate, '2022-04-29'], disabled = false, isShow = 0, }) {
    const [startDate, setStartDate] = useState();
    return (
    // <PrimeReactProvider>
    _jsx("div", { id: "timeFrameAccordion", className: styles.timeFrameAccordion, children: _jsx(Template, { icon: _jsx(NavigationMenu.CalendarIcon, { color: "white" }), header: 'Time Frame', subheader: _jsxs("div", { children: [_jsx("span", { children: "start date" }), _jsx("div", { className: styles.startDateInput, children: _jsx(Calendar, { value: startDate, onChange: e => {
                                e.value && setStartDate(e.value);
                            }, dateFormat: "dd/mm/yy", placeholder: '--/--/----', showIcon: true }) })] }), disabled: disabled, isShow: isShow, children: _jsx("div", { className: styles.container, children: _jsx(Calendar, { value: schedule.map(date => new Date(date)), selectionMode: "multiple", numberOfMonths: 2, inline: true, style: { width: '100%' }, showOtherMonths: false, locale: "en-ThaiVDQ2" }) }) }) })
    // </PrimeReactProvider>
    );
}
