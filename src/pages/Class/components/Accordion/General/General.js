import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Template from '../AccordionTemplate/Template';
import GeneralItem from './GeneralItem';
import styles from './General.module.css';
import { Delivery, Indicator, NavigationMenu, Other, } from '../../../../../assets/svg';
export default function General({ classTime = {
    from: { hour: '09', minute: '00' },
    to: { hour: '12', minute: '00' },
}, location = ['Ftown1', 'Ftown2'], trainer = ['Trainer1', 'Trainer2'], admin = ['Admin1', 'Admin2'], FSU = 'FSU', email = 'anhhungxadieu@gmail', createdDate = '2022-01-01', createdBy = 'John Doe', reviewedDate = '2022-01-02', reviewedBy = 'Jane Doe', approvedDate = '2022-01-03', approvedBy = 'Mark Johnson', disabled = false, isShow = 0, }) {
    return (_jsx("div", { id: "generalAccordion", className: styles.generalAccordion, children: _jsx(Template, { header: "General", icon: _jsx(NavigationMenu.CalendarIcon, { color: "white" }), disabled: disabled, isShow: isShow, children: _jsxs("div", { className: styles.generalContainer, children: [_jsx(GeneralItem, { label: 'Class time', icon: _jsx(Other.AlarmIcon, { color: "#285D9A" }), children: _jsx("p", { className: styles.textNormal, children: classTime?.from.hour +
                                ':' +
                                classTime?.from.minute +
                                ' - ' +
                                classTime?.to.hour +
                                ':' +
                                classTime?.to.minute }) }), _jsx(GeneralItem, { label: 'Location', icon: _jsx(Other.HomeWorkIcon, { color: "#285D9A" }), children: location &&
                            location.map((location, index) => (_jsx("p", { className: styles.textNormal, children: location }, 'location' + index))) }), _jsx(GeneralItem, { label: 'Trainer', icon: _jsx(Delivery.ConceptIcon, { color: "#285D9A" }), children: trainer &&
                            trainer.map((trainer, index) => (_jsx("p", { className: styles.linkText, children: trainer }, 'trainer' + index))) }), _jsx(GeneralItem, { label: 'Admin', icon: _jsx(Indicator.GradeIcon, { color: "#285D9A" }), children: admin &&
                            admin.map((admin, index) => (_jsx("p", { className: styles.linkText, children: admin }, 'admin' + index))) }), _jsxs(GeneralItem, { label: 'FSU', icon: _jsx(Indicator.SupplierIcon, { color: "#285D9A" }), children: [_jsx("p", { className: styles.textNormal, children: FSU }), _jsx("p", { className: styles.textNormal, children: email })] }), _jsx("div", { className: styles.separateLine }), _jsx(GeneralItem, { label: 'Created', children: _jsxs("p", { className: styles.textNormal, children: [createdDate, " by ", createdBy] }) }), _jsx(GeneralItem, { label: 'Review', children: _jsxs("p", { className: styles.textNormal, children: [reviewedDate, " by ", reviewedBy] }) }), _jsx(GeneralItem, { label: 'Approve', children: _jsxs("p", { className: styles.textNormal, children: [approvedDate, " by ", approvedBy] }) })] }) }) }));
}
