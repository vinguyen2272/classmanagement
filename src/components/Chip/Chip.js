import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from "./Chip.module.css";
const Chip = ({ name }) => {
    return (_jsx("div", { children: _jsxs("button", { className: style.chipButton, children: [name, " ", _jsx("span", { className: style.spanX, children: "X" })] }) }));
};
export default Chip;
