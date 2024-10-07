import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './SyllabusCreate.module.css';
import Header from './Header';
import SyllabusTabsOption from '../../../components/SyllabusTabsOption/SyllabusTabsOption';
import General from './General/General';
import Outline from './Outline/Outline';
import TrainingMaterial from './TrainingMaterial/TrainingMaterial';
import { Button } from 'primereact/button';
const SyllabusCreate = () => {
    const tabsName = ['General', 'Outline', 'Training material'];
    const tabsElement = [_jsx(General, {}), _jsx(Outline, {}), _jsx(TrainingMaterial, {})];
    function handleCancel() {
        throw new Error('Function not implemented.');
    }
    function handleSaveAsDraft() {
        throw new Error('Function not implemented.');
    }
    function handleSave() {
        throw new Error('Function not implemented.');
    }
    return (_jsxs("section", { className: styles.syllabusCreate, children: [_jsx(Header, {}), _jsx("div", { className: styles.tabsControl, children: _jsx(SyllabusTabsOption, { tabsName: tabsName, tabsElement: tabsElement }) }), _jsxs("div", { className: styles.controller, children: [_jsx(Button, { label: "Cancel", onClick: handleCancel, className: styles.btnCancel }), _jsx(Button, { label: "Save as draft", onClick: handleSaveAsDraft, className: styles.btnSaveAsDraft }), _jsx(Button, { label: "Save", onClick: handleSave, className: styles.btnSave })] })] }));
};
export default SyllabusCreate;
