import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import { Fragment, useEffect } from 'react';
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout';
const App = () => {
    useEffect(() => {
        console.log = () => { };
        console.error = () => { };
        console.warn = () => { };
    }, []);
    return (_jsx(Router, { children: _jsx("div", { className: "App", children: _jsxs(Routes, { children: [publicRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;
                        const Page = route.component;
                        return (_jsx(Route, { path: route.path, element: _jsx(Layout, { children: _jsx(Page, {}) }) }, index));
                    }), privateRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;
                        const Page = route.component;
                        return (_jsx(Route, { path: route.path, element: _jsx(Layout, { children: _jsx(Page, {}) }) }, index));
                    })] }) }) }));
};
export default App;
