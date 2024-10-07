import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './UserListHead.module.css';
import { FilterListIcon } from '../../../../assets/svg/Action/Action';
import S_Button from '../../ComponentOnly/Button/Button';
import Modal from '../../../../components/Modal/Modal';
import { useAppDispatch } from '../../../../app/hooks';
import { removeSearchUsers, setSearchUsers, } from '../../../../features/user/UserListSlice';
import Chip from '../../../../components/Chip/Chip';
import { useSelector } from 'react-redux';
function UserListHead() {
    const dispatch = useAppDispatch();
    const searchKeys = useSelector((state) => state.userList.searchUsers);
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            const inputValue = e.target.value.trim();
            if (!searchKeys.some(value => value.includes(inputValue)) && inputValue) {
                dispatch(setSearchUsers(inputValue));
                e.target.value = '';
            }
        }
    };
    const handleRemove = (keySearch) => {
        dispatch(removeSearchUsers(keySearch));
    };
    return (_jsxs("div", { className: styles.tableHead, children: [_jsx("h4", { className: `${styles.contentHead}`, children: "User Management" }), _jsxs("div", { className: styles.searchAdd, children: [_jsxs("div", { className: styles.inputSearch, children: [_jsxs("div", { className: styles.searchItem, children: [_jsx("i", { className: `${styles.searchIcon} pi pi-search` }), _jsx("input", { className: styles.inputItem, type: "search", placeholder: "Search by...", onKeyUp: handleSearch })] }), _jsx("div", { children: _jsx(S_Button, { icon: _jsx(FilterListIcon, { color: "white" }), children: "Filter" }) })] }), _jsx(Modal, {})] }), _jsx("div", { className: styles.chipContainer, children: searchKeys.length > 0 &&
                    searchKeys.map((keySearch, index) => (_jsx("div", { onClick: () => handleRemove(keySearch), children: _jsx(Chip, { name: keySearch }) }, index))) })] }));
}
export default UserListHead;
