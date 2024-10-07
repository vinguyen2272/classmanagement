import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useAppSelector } from '../../app/hooks';
import { selectCollapsed } from '../../features/sidebar/sidebarSlice';
import styles from './Home.module.css';
export default function Home() {
    const collapsed = useAppSelector(selectCollapsed);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: `app-header  ${collapsed ? 'collapsed' : ''}`, children: _jsx("div", { className: styles.header, children: _jsx("h1", { children: "Welcome to the Home Page" }) }) }), _jsx("div", { className: `app-content  ${collapsed ? 'collapsed' : ''}`, children: _jsxs("div", { className: styles.content, children: [_jsx("p", { children: "This is the default Home page." }), _jsx("p", { className: styles.tsa })] }) })] }));
}
