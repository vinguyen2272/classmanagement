import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from 'primereact/button';
export default function ButtonUnderlined({ children, color = 'orange', icon, onHandleClick, }) {
    const colorClasses = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        orange: 'text-orange',
        blue: 'text-blue',
        brown: 'text-brown',
        white: 'text-white',
    };
    return (_jsx("div", { children: _jsx(Button, { icon: icon, className: `${colorClasses[color]} px-[10px] py-[8px] w-[max-content]   `, onClick: onHandleClick, children: _jsx("span", { className: icon ? 'ms-2 underline' : 'underline', children: children }) }) }));
}
