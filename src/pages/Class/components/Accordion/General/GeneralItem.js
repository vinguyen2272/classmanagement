import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './GeneralItem.module.css';
export default function GeneralItem({ icon, label, children, disabled = false, }) {
    const className = disabled
        ? `${styles.container} ${styles.disabled}`
        : styles.container;
    return (_jsxs("div", { className: className, children: [_jsxs("div", { className: styles.label, children: [icon, _jsx("p", { children: label })] }), _jsx("div", { className: styles.content, children: children })] }));
}
