import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import style from './Permission.module.css';
import { PrimeReactProvider } from 'primereact/api';
import { AddIcon, VisibilityIcon, VisibilityOffIcon } from '../../../../assets/svg/Action/Action';
import { CreateIcon } from '../../../../assets/svg/DocumentManage/DocumentManage';
import { GradeIcon } from '../../../../assets/svg/Indicator/Indicator';
const Permission = ({ defaultValue, onChange }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    useEffect(() => {
        setSelectedOption(defaultValue);
    }, [defaultValue]);
    const options = [
        { label: 'Access denied', value: 'Access denied', icon: _jsx("div", { className: style.iconSVG, children: _jsx(VisibilityOffIcon, {}) }) },
        { label: 'View', value: 'View', icon: _jsx("div", { className: style.iconSVG, children: _jsx(VisibilityIcon, {}) }) },
        { label: 'Modify', value: 'Modify', icon: _jsx("div", { className: style.iconSVG, children: _jsx(CreateIcon, {}) }) },
        { label: 'Create', value: 'Create', icon: _jsx("div", { className: style.iconSVG, children: _jsx(AddIcon, {}) }) },
        { label: 'Full access', value: 'Full Access', icon: _jsx("div", { className: style.iconSVG, children: _jsx(GradeIcon, {}) }) }
    ];
    const handleChange = (e) => {
        setSelectedOption(e.value);
        onChange(e.value);
    };
    const itemTemplate = (option) => {
        return (_jsxs("div", { className: style.dropDown, children: [_jsx("span", { children: option.icon }), _jsx("span", { children: option.label })] }));
    };
    const valueTemplate = (option) => {
        if (option) {
            return (_jsxs("div", { className: style.dropDown, children: [_jsx("span", { children: option.icon }), _jsx("span", { children: option.label })] }));
        }
        return _jsx("span", { children: "Permission" });
    };
    return (_jsx(PrimeReactProvider, { value: { unstyled: false }, children: _jsx("div", { className: selectedOption ? style.selectContainerSpec : style.selectContainer, children: _jsx(Dropdown, { style: { width: '100%', padding: '0px 10px', paddingRight: '0px' }, value: selectedOption, itemTemplate: itemTemplate, valueTemplate: valueTemplate, options: options, onChange: handleChange, placeholder: "Permission", className: style.customDropdown }) }) }));
};
export default Permission;
