import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { toggleSidebar, selectCollapsed, } from '../../../../features/sidebar/sidebarSlice';
import styles from './SidebarMenu.module.css';
import items from './SidebarItems';
import { MenuIcon, MenuCloseIcon, } from '../../../../assets/svg/NavigationMenu/NavigationMenu';
const SidebarMenu = () => {
    const dispatch = useAppDispatch();
    const collapsed = useAppSelector(selectCollapsed);
    const [openSubMenu, setOpenSubMenu] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const newOpenSubMenu = { ...openSubMenu };
        Object.keys(newOpenSubMenu).forEach(key => {
            if (!newOpenSubMenu[key]) {
                delete newOpenSubMenu[key];
            }
        });
        items.forEach(item => {
            if (item.items) {
                item.items.forEach(subItem => {
                    if (subItem.path === location.pathname) {
                        newOpenSubMenu[item.key] = true;
                    }
                });
            }
        });
        setOpenSubMenu(newOpenSubMenu);
    }, [location.pathname]);
    const toggleSubMenu = (menu) => {
        setOpenSubMenu(prev => {
            const newState = { ...prev };
            Object.keys(newState).forEach(key => {
                if (key !== menu) {
                    newState[key] = false;
                }
            });
            newState[menu] = !prev[menu];
            return newState;
        });
    };
    const toggleSubMenuIcon = (menu) => {
        setOpenSubMenu(prev => ({ ...prev, [menu]: !prev[menu] }));
    };
    const handleCollapse = () => {
        dispatch(toggleSidebar());
        if (!collapsed) {
            setOpenSubMenu({});
        }
        else {
            items.forEach(item => {
                if (item.items) {
                    item.items.forEach(subItem => {
                        if (subItem.path === location.pathname) {
                            setOpenSubMenu(prev => ({ ...prev, [item.key]: true }));
                        }
                    });
                }
            });
        }
    };
    const handleLabelClick = (item) => {
        toggleSubMenu(item.key);
        if (item.items && item.items.length > 0) {
            navigate(item.items[0].path);
        }
        else if (item.path) {
            navigate(item.path);
        }
    };
    return (_jsxs("div", { className: `${styles.sidebar} ${collapsed ? styles.collapsed : ''}`, children: [_jsx("div", { className: `${styles.menuItem} ${styles.barButton}`, onClick: handleCollapse, children: collapsed ? _jsx(MenuIcon, {}) : _jsx(MenuCloseIcon, {}) }), items.map((item, index) => (_jsxs("div", { className: styles.menuItem, children: [_jsxs("div", { className: styles.menuTitle, children: [_jsx("div", { children: _jsx(item.icon, { width: 24, height: 24, color: "#2D3748" }) }), _jsx("span", { className: styles.itemName, onClick: () => handleLabelClick(item), children: item.label }), item.items && item.items.length > 0 && (_jsx("i", { className: `${styles.itemShowIcon} pi ${openSubMenu[item.key] ? 'pi-chevron-down' : 'pi-chevron-left'}`, onClick: e => {
                                    e.stopPropagation();
                                    item.key && toggleSubMenuIcon(item.key);
                                } }))] }), !collapsed && item.key && (_jsx("div", { className: `${styles.submenuItems} ${openSubMenu[item.key] ? styles.open : ''}`, children: item.items?.map((subItem, subIndex) => (_jsx(NavLink, { to: subItem.path, className: ({ isActive }) => (isActive ? styles.active : ''), onClick: () => {
                                setOpenSubMenu(prev => ({
                                    ...prev,
                                    [item.key]: false,
                                }));
                                toggleSubMenu(item.key);
                            }, children: _jsx("span", { children: subItem.label }) }, subIndex))) }))] }, index)))] }));
};
export default SidebarMenu;
