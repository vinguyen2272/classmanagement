import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo } from 'react';
import { Column } from 'primereact/column';
import styles from './UserList.module.css';
import UserListHead from '../UserListHead/UserListHead';
import { Table } from '../../../../components/Table/Table';
import { GenderIcon } from '../../../../assets/svg/Other/Other';
import S_TypeButton from '../../ComponentOnly/TypeButton/TypeButton';
import S_CustomTieredMenu from '../../ComponentOnly/S_CustomTieredMenu/S_CustomTieredMenu';
import { useSelector } from 'react-redux';
import { fetchUserListData } from '../../../../features/user/UserListSlice';
import { useAppDispatch } from '../../../../app/hooks';
const UserList = () => {
    const studentList = useSelector((state) => state.userList.userList);
    const keySearch = useSelector((state) => state.userList.searchUsers);
    const coverDate = (rowData) => {
        const isoString = rowData.dateOfBirth;
        const date = new Date(isoString);
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1;
        const year = date.getUTCFullYear();
        return `${day}/${month}/${year}`;
    };
    const transformData = studentList.map((item) => ({
        ...item,
        dateOfBirth: coverDate(item)
    }));
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUserListData());
    }, [dispatch, keySearch]);
    const renderData = useMemo(() => {
        // Lọc dữ liệu dựa trên từ khóa hiện tại trong keySearch
        let filteredData = transformData;
        // Tiếp tục lọc dữ liệu với từng từ khóa trong keySearch
        keySearch.forEach(keyword => {
            filteredData = filteredData.filter(user => Object.values(user).some(value => typeof value === 'string' && value.toLowerCase().includes(keyword.toLowerCase())));
        });
        return filteredData;
    }, [transformData, keySearch]);
    const checkGenders = (rowData) => {
        return rowData.gender === 'male' ? (_jsx(GenderIcon, {})) : (_jsx(GenderIcon, { color: '#FF7568' }));
    };
    const checkTypes = (rowData) => {
        return rowData.type === 'Admin' ? (_jsx(S_TypeButton, { color: '#4DB848', children: "Admin" })) : (_jsx(S_TypeButton, { color: '#0B2136', children: "Trainer" }));
    };
    const actions = (rowData) => (_jsx(S_CustomTieredMenu, { userId: rowData.id }));
    return (_jsxs("div", { className: styles.userListContainer, children: [_jsx(UserListHead, {}), _jsx("div", { className: styles.userTable, children: _jsxs(Table, { data: renderData, children: [_jsx(Column, { field: 'id', header: 'ID', sortable: true }), _jsx(Column, { field: 'fullName', header: 'Full Name', sortable: true }), _jsx(Column, { field: 'email', header: 'Email', sortable: true }), _jsx(Column, { field: 'dateOfBirth', header: 'Date of Birth', sortable: true }), _jsx(Column, { field: "gender", header: "Gender", body: checkGenders, sortable: true }), _jsx(Column, { field: "type", header: "Type", sortable: true, body: checkTypes }), _jsx(Column, { body: actions })] }) })] }));
};
export default UserList;
