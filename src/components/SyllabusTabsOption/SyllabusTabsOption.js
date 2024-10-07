import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './SyllabusTabsOption.module.css';
import { TabPanel, TabView } from 'primereact/tabview';
import { PrimeReactProvider } from 'primereact/api';
export default function SyllabusTabsOption({ tabsName, tabsElement, }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleTabChange = (e) => {
        setActiveIndex(e.index);
    };
    return (_jsx(PrimeReactProvider, { children: _jsx("div", { className: styles.container, children: _jsx(TabView, { activeIndex: activeIndex, onTabChange: handleTabChange, children: tabsName.map((tabName, index) => (_jsx(TabPanel, { header: tabName || 'General', headerClassName: activeIndex !== index ? styles.inactive : '', children: tabsElement[activeIndex] }, index))) }) }) }));
}
