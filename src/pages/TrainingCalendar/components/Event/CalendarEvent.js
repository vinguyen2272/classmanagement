import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Delivery, Indicator, Other } from '../../../../assets/svg';
import Style from './CalendarEvent.module.css';
const CalendarEvent = ({ event, blurClass }) => {
    return (_jsxs("div", { className: `${Style.wrapContainer} ${blurClass}`, children: [_jsx("b", { children: "Day 10 of 20" }), _jsxs("div", { className: Style.wrapContent, children: [_jsxs("div", { className: "contentLefft", children: [_jsxs("span", { className: Style.myIcon, children: [_jsx(Other.HomeWorkIcon, {}), "Location"] }), _jsxs("span", { className: Style.myIcon, children: [_jsx(Delivery.ConceptIcon, {}), "Trainer"] }), _jsxs("span", { className: Style.myIcon, children: [_jsx(Indicator.GradeIcon, {}), "Admin"] })] }), _jsxs("div", { className: "contentRight", children: [_jsx("p", { children: event.location }), _jsx("p", { children: event.trainer }), _jsx("p", { children: event.admin })] })] })] }));
};
export default CalendarEvent;
