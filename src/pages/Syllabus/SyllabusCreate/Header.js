import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import styles from './SyllabusCreate.module.css';
import { useAppSelector } from '../../../app/hooks';
import { selectCreateStage } from '../../../features/syllabus/syllabusCreateSlice';
const Header = () => {
    const createStage = useAppSelector(selectCreateStage);
    const [activeButton, setActiveButton] = useState('Code');
    const handleButtonClick = (button) => {
        setActiveButton(button);
    };
    const getButtonStyle = (button) => {
        return {
            fontWeight: activeButton === button ? '700' : '500',
        };
    };
    return (_jsxs(_Fragment, { children: [_jsxs("header", { className: styles.header, children: [_jsx("h1", { className: styles.h1, children: "Syllabus" }), _jsx("div", { className: styles.progressBarBox, children: _jsx(ProgressBar, { stage: createStage }) })] }), _jsx("main", { className: styles.main, children: _jsxs("div", { className: styles.name, children: [_jsxs("div", { className: styles.nameBox, children: [_jsx("label", { className: styles.nameLabel, children: "Syllabus Name*" }), _jsx(InputText, { placeholder: "Enter syllabus title", className: styles.nameField })] }), _jsxs("div", { className: styles.btnGroup, children: [_jsx(Button, { label: "Code", onClick: () => handleButtonClick('Code'), style: getButtonStyle('Code'), className: styles.btnNoOutline }), _jsx(Button, { label: "NPL", onClick: () => handleButtonClick('NPL'), style: getButtonStyle('NPL'), className: styles.btnNoOutline })] }), _jsxs("p", { className: styles.version, children: ["Version ", _jsx("span", { children: "1.0" })] })] }) })] }));
};
export default Header;
