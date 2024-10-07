import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from 'primereact/button';
export default function ButtonContained({ children, color = 'primary', icon, onHandleClick, }) {
    const colorClasses = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        orange: 'bg-orange',
        blue: 'bg-blue',
        brown: 'bg-brown',
        white: 'bg-white',
    };
    return (_jsx("div", { children: _jsx(Button, { icon: icon, className: `${colorClasses[color]} px-[10px] py-[8px] text-white text-center w-[max-content]  `, onClick: onHandleClick, children: _jsx("span", { className: ` flex gap-1 ${icon ? 'ms-2 ' : ''}`, children: children }) }) }));
}
