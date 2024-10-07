import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Header.module.css';
import { PrimeReactProvider } from 'primereact/api';
import { Menubar } from 'primereact/menubar';
import { NavLink } from 'react-router-dom';
import { Button } from 'primereact/button';
import logoPng from '../../../../assets/DucNH83/logoVi.png';
import logo2Png from '../../../../assets/DucNH83/logo-2.png';
function Header() {
    const start = (_jsx(NavLink, { to: "/", children: _jsx("img", { width: 200, style: { padding: '10px' }, className: styles.mainLogo, src: logoPng, alt: "" }) }));
    const end = (_jsxs("div", { className: styles.endContainer, children: [_jsx(NavLink, { to: "/", children: _jsxs("div", { id: styles['endLogoContainer'], children: [_jsx("img", { className: styles.uniGayLogo, src: logo2Png, alt: "" }), _jsx("span", { children: "uniGate" })] }) }), _jsxs("div", { className: styles.accountContainer, children: [_jsx("div", { className: styles.avatarWrapper, children: _jsx("img", { src: "https://s3-alpha-sig.figma.com/img/d1b4/292d/1d049740ed416330e848f7addcf002e1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PinITVVOerAVOdv~6DOLu1lG5GToz3zqJe~GHd9eSWVb8XEIuuMH8U0RVWRMAiLz3OLJFpklPQp9pzOXbY0OaJh8Gr7hFMv306ODEbWJsKEHf3rJPEgOh5JjpAa-FKRgeFRNiuP10ke7yZYJ~uZmQoVzMFj6bkQZ~fnJGJQ38w~jw2ikhEyEPd2dZXKr0nQ9phFiEgVDgHZknwSbhJSvAXHFM4-T6FhLnRJi5wQsxLMsbfP-yJW6WtXS~JIYUulOjGI3R0Ml-yO505tKlf1lJM-4a97jsgM~XLsetSXJbqsBC7cWgeo65ugPuOGn3PO8KaHowaXtk86I6ZyqsLMf3A__", alt: "" }) }), _jsxs("div", { className: styles.namePlaceholder, children: [_jsx("p", { style: { color: 'white', margin: '0', fontWeight: '600' }, children: "Warrior Tran" }), _jsx(Button, { style: { padding: '0', textAlign: 'left', color: 'white' }, link: true, label: "Log out" })] })] })] }));
    return (_jsx(PrimeReactProvider, { children: _jsx("header", { className: styles.container, children: _jsx(Menubar, { style: { width: "100%", boxSizing: "border-box", backgroundColor: 'rgb(45, 55, 72)' }, start: start, end: end, model: undefined }) }) }));
}
export default Header;
