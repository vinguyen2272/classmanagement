import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from "react";
import styles from './ActiveButton.module.css'; // Import CSS module
const ActiveButton = forwardRef((props, ref) => {
    const { onChange } = props;
    const [checked, setChecked] = useState(true);
    const handleChange = (e) => {
        setChecked(!checked);
        onChange(e);
    };
    return (_jsxs("div", { className: styles.switchButton, children: [_jsxs("label", { className: `${styles.switch} ${checked ? styles.orange : ''}`, children: [_jsx("input", { type: "checkbox", checked: checked, onChange: handleChange }), _jsx("span", { className: styles.slider })] }), _jsx("div", { className: checked ? styles.contentActive : styles.contentDisabled, children: "Active" })] }));
});
export default ActiveButton;
