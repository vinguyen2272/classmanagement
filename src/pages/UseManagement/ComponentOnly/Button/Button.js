import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from 'primereact/button';
export default function S_Button({ children, color = 'primary', icon, onClick, }) {
    const colorClasses = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        orange: 'bg-orange',
        blue: 'bg-blue',
        brown: 'bg-brown',
    };
    return (_jsx("div", { children: _jsx(Button, { icon: icon, className: `${colorClasses[color]} px-[10px] py-[4px] text-white  `, style: { borderRadius: '8px' }, onClick: onClick, children: _jsx("span", { className: "ms-2", children: children }) }) }));
}
