import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './TrainingEdit.module.css';
import { TabPanel, TabView } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { PrimeReactProvider } from 'primereact/api';
import icon_find from '../../assets/khang_img/icon_find.png';
import { AutoComplete } from 'primereact/autocomplete';
export default function TrainingEdit({ setItem }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleTabChange = (e) => {
        setActiveIndex(e.index);
    };
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const items = [
        {
            label: 'DevOps Foundation',
            value: 'DevOps Foundation',
            duration: '31 days (97hrs)',
            modifiedDate: '23/07/2022',
            modifiedAuthor: 'Warrior Tran',
        },
        {
            label: 'DevOps Beginer',
            value: 'DevOps Beginer',
            duration: '20 days (69hrs)',
            modifiedDate: '31/01/2022',
            modifiedAuthor: 'King Jeans',
        },
        {
            label: 'DevOps Advanced',
            value: 'DevOps Advanced',
            duration: '41 days (109hrs)',
            modifiedDate: '01/01/2022',
            modifiedAuthor: 'Ba Chu Heo',
        },
    ];
    const searchItems = (event) => {
        setFilteredItems(items.filter(item => item.label.toLowerCase().includes(event.query.toLowerCase())));
    };
    const itemTemplate = (item) => {
        return (_jsxs("div", { className: styles.suggest, children: [_jsx("strong", { children: item.label }), _jsxs("div", { className: styles.infor, children: [_jsx("p", { children: item.duration }), _jsxs("div", { children: [_jsx("span", { children: item.modifiedDate }), _jsx("span", { children: " by " }), _jsx("strong", { children: item.modifiedAuthor })] })] })] }));
    };
    return (_jsx(PrimeReactProvider, { children: _jsx("div", { className: styles.container, children: _jsxs(TabView, { onTabChange: handleTabChange, children: [_jsxs(TabPanel, { header: "Training Program", headerClassName: activeIndex !== 0 ? styles.inactive : '', children: [_jsx(Card
                            // title="DevOps Foundation"
                            , { 
                                // title="DevOps Foundation"
                                className: styles.devops, children: _jsxs("div", { className: styles.trainingGroup, children: [_jsx("p", { children: "Training Program name" }), _jsxs("div", { className: styles.inputContainer, children: [_jsx("img", { src: icon_find, alt: "icon", className: styles.inputIcon }), _jsx(AutoComplete, { value: selectedItem, suggestions: filteredItems, completeMethod: searchItems, field: "label", itemTemplate: itemTemplate, onChange: (e) => setSelectedItem(e.value), onSelect: (e) => setItem(e.value), placeholder: "Search for a name" })] })] }) }), _jsx("div", { className: styles.bottomDevops })] }), _jsx(TabPanel, { header: "Attendee list", headerClassName: activeIndex !== 1 ? styles.inactive : '' }), _jsx(TabPanel, { header: "Budget", headerClassName: activeIndex !== 2 ? styles.inactive : '' }), _jsx(TabPanel, { header: "Others", headerClassName: activeIndex !== 3 ? styles.inactive : '' })] }) }) }));
}
