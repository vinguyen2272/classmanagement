import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './Header/Header';
import Sidebar from './Sidebar/SidebarMenu';
import Footer from './Footer/Footer';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
function DefaultLayout({ children }) {
    return (_jsxs("div", { className: "app-container", children: [_jsx(Header, {}), _jsxs("div", { className: `app-main `, children: [_jsx(Sidebar, {}), _jsx("div", { className: `app-main-container`, children: children })] }), _jsx(Footer, {})] }));
}
export default DefaultLayout;
