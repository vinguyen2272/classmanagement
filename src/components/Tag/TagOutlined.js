import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export default function TagOutlined({ value, icon, color = 'orange', onHandleClick, }) {
    const colorClasses = {
        primary: 'border-primary',
        secondary: 'border-secondary',
        orange: 'border-orange',
        blue: 'border-blue',
        brown: 'border-brown',
        white: 'border-white',
    };
    return (_jsx(_Fragment, { children: _jsx("div", { className: `${colorClasses[color]} border  text-orange w-[max-content] text-center rounded-[50px] `, children: _jsxs("p", { className: " px-[15px] py-[8px] text-sm flex items-center gap-1", children: [value, _jsx("i", { className: `${icon} text-xs`, onClick: e => onHandleClick?.(value) })] }) }) }));
}
