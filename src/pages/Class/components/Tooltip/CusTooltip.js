import { jsx as _jsx } from "react/jsx-runtime";
import { Tooltip } from 'primereact/tooltip';
import styles from './CusTooltip.module.css';
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
import './CusTooltip.css';
export default function CusTooltip({ target, position, children }) {
    return (_jsx(Tooltip, { className: styles.tooltipWrapper, target: target, position: position, children: children }));
}
