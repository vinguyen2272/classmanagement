import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export default function TagContained({ value, icon, color = 'primary', onHandleClick, }) {
    const colorClasses = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        orange: 'bg-orange',
        blue: 'bg-blue',
        brown: 'bg-brown',
        white: 'bg-white',
        peach: 'bg-peach',
        green: 'bg-green',
    };
    return (_jsx(_Fragment, { children: _jsx("div", { className: `${colorClasses[color]} text-white w-[max-content] text-center rounded-[50px] `, children: _jsxs("p", { className: " px-[15px] py-[8px] text-sm flex items-center gap-1", children: [value, _jsx("i", { className: `${icon} text-xs cursor-pointer `, onClick: e => onHandleClick?.(value) })] }) }) }));
}
