import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Accordion, AccordionTab } from 'primereact/accordion';
import styles from './Template.module.css';
import 'primeicons/primeicons.css';
// import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'
import { PrimeReactProvider } from 'primereact/api';
import { Action } from '../../../../../assets/svg';
export default function Template({ icon, header, subheader, children, disabled, isShow = 0, }) {
    return (_jsx(PrimeReactProvider, { children: _jsx("div", { className: styles.card, children: _jsx(Accordion, { activeIndex: isShow, className: styles.accordionWrapper, expandIcon: _jsx("div", { "data-pc-section": "headericon", children: _jsx(Action.ArrowDropDownIcon, { color: "white" }) }), collapseIcon: _jsx("div", { "data-pc-section": "headericon", children: _jsx(Action.ArrowDropDownIcon, { color: "white" }) }), children: _jsx(AccordionTab, { header: _jsxs("div", { children: [_jsxs("div", { style: { display: 'flex', gap: '10px' }, children: [icon, " ", header] }), _jsx("div", { className: styles.subheader, children: subheader })] }), className: styles.accordionContent, disabled: disabled, children: children }) }) }) }));
}
