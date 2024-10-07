import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './SyllabusTab.module.css';
import { TabPanel, TabView } from 'primereact/tabview';
import { PrimeReactProvider } from 'primereact/api';
export default function SyllabusTab({ tab1Prop, tab2Prop, tab3Prop, tab4Prop, isShowTab4 }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleTabChange = (e) => {
        setActiveIndex(e.index);
    };
    return (_jsx(PrimeReactProvider, { children: _jsx("div", { className: styles.container, children: _jsxs(TabView, { activeIndex: activeIndex, onTabChange: handleTabChange, children: [_jsx(TabPanel, { header: tab1Prop || "General", headerClassName: activeIndex !== 0 ? styles.inactive : '' }), _jsx(TabPanel, { header: tab2Prop || "Outline", headerClassName: activeIndex !== 1 ? styles.inactive : '' }), _jsx(TabPanel, { header: tab3Prop || "Outline", headerClassName: activeIndex !== 2 ? styles.inactive : '' }), isShowTab4 &&
                        _jsx(TabPanel, { header: tab4Prop || "Training Material", headerClassName: activeIndex !== 3 ? styles.inactive : '' })] }) }) }));
}
