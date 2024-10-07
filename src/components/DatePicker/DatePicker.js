import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar } from 'primereact/calendar';
import { TabView, TabPanel } from 'primereact/tabview';
import Style from './date.module.css';
export const DatePicker = ({ value, onChange }) => {
    return (_jsx(_Fragment, { children: _jsx(Calendar, { value: value, onChange: onChange, inline: true }) }));
};
export const FullWidthDate = ({ value, onChange }) => {
    return (_jsx("div", { className: Style.container, children: _jsx(Calendar, { value: value, onChange: onChange, inline: true, style: { width: '100%' } }) }));
};
export const SyntheticDate = ({ value, onChange, }) => {
    const handleDateSelect = (e) => {
        const newDates = e.value instanceof Array ? e.value : [e.value];
        onChange(newDates);
        if (e.view === 'year') {
            onChange([newDates[0]]);
        }
        else {
            onChange(newDates);
        }
    };
    return (_jsx(_Fragment, { children: _jsxs(TabView, { className: Style.myTab, children: [_jsx(TabPanel, { header: "Day", children: _jsx("div", { className: Style.container, children: _jsx(Calendar, { value: value, onChange: handleDateSelect, selectionMode: "multiple", inline: true, style: { width: '100%' } }) }) }), _jsx(TabPanel, { header: "Week", children: _jsx(Calendar, { value: value, onChange: handleDateSelect, selectionMode: "multiple", inline: true, showWeek: true, style: { width: '100%' } }) }), _jsx(TabPanel, { header: "Month", children: _jsx(Calendar, { value: value, onChange: handleDateSelect, selectionMode: "multiple", numberOfMonths: 2, inline: true, style: { width: '100%' } }) }), _jsx(TabPanel, { header: "Year", children: _jsx(Calendar, { value: value ? value[0] : null, onChange: handleDateSelect, selectionMode: "single", view: "month", inline: true, style: { width: '50%' } }) })] }) }));
};
