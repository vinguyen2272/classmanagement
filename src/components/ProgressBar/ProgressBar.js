import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './ProgressBar.module.css';
const ProgressBar = ({ stage }) => {
    let markerClass = '';
    switch (stage) {
        case 'general':
            markerClass = styles.marker1;
            break;
        case 'outline':
            markerClass = styles.marker2;
            break;
        case 'other':
            markerClass = styles.marker3;
            break;
        case 'done':
            markerClass = styles.marker4;
            break;
        default:
            markerClass = styles.hidden;
    }
    return (_jsxs("div", { className: styles.progressBar, children: [_jsx("div", { className: `${styles.progress} ${styles[stage]}` }), _jsx("div", { className: `${styles.stageMarker} ${markerClass}` }), _jsx("div", { className: `${styles.stageLabel} ${styles.label1}`, children: "General" }), _jsx("div", { className: `${styles.stageLabel} ${styles.label2}`, children: "Outline" }), _jsx("div", { className: `${styles.stageLabel} ${styles.label3}`, children: "Other" }), _jsx("div", { className: `${styles.stageLabel} ${styles.label4}`, children: "Done" })] }));
};
export default ProgressBar;
