import { jsx as _jsx } from "react/jsx-runtime";
import CalendarEvent from './Event/CalendarEvent';
const Tooltip = ({ info, position, width, blurClass }) => {
    if (!info)
        return null;
    return (_jsx("div", { style: {
            position: 'absolute',
            top: position.top,
            left: position.left,
            width: width,
            zIndex: 1000,
        }, children: _jsx(CalendarEvent, { event: info, blurClass: blurClass }) }));
};
export default Tooltip;
