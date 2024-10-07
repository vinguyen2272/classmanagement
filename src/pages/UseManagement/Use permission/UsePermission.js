import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
import Permission from "../ComponentOnly/SelectPermission/Permission";
import PermissionControl from "../ComponentOnly/PermissionControl/PermissionControl";
import styles from './UserPermission.module.css';
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import { fetchData, updatePermissions } from "../../../features/user/UserPermissionSlice";
import { Toast } from "primereact/toast";
const UsePermission = () => {
    const [updateType, setUpdateType] = useState(true);
    const permissionList = useSelector((state) => state.userPermissions.permissions);
    const dispatch = useAppDispatch();
    const toast = useRef(null);
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    const [dataRoleControl, setDataRoleControl] = useState(permissionList);
    useEffect(() => {
        setDataRoleControl(permissionList);
    }, [permissionList]);
    const [updatedData, setUpdatedData] = useState(dataRoleControl);
    useEffect(() => {
        setUpdatedData(dataRoleControl);
    }, [dataRoleControl]);
    const renderPermissionDropdown = (field) => (rowData) => {
        const onChange = (newValue) => {
            setUpdatedData(prevData => prevData.map(item => item.id === rowData.id ? { ...item, permission: { ...item.permission, [field]: newValue } } : item));
        };
        return _jsx(Permission, { defaultValue: rowData.permission[field], onChange: onChange });
    };
    const handleSave = () => {
        dispatch(updatePermissions(updatedData));
        setDataRoleControl(updatedData);
        setUpdateType(true);
        if (toast.current) {
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Permissions updated successfully', life: 2000 });
        }
    };
    return (_jsxs("div", { className: styles.permissionContainer, children: [_jsx(Toast, { ref: toast, position: "bottom-right" }), _jsx("h4", { className: styles.contentPer, children: "User Permission" }), _jsx("div", { className: styles.buttonUpdate, children: _jsx("button", { className: updateType ? styles.updateButton : styles.updateButtonDnone, onClick: () => setUpdateType(false), children: "Update permission" }) }), updateType ? (_jsx(PermissionControl, { dataRoleControl: updatedData })) : (_jsxs("div", { children: [_jsxs(DataTable, { value: updatedData, className: styles.tablePer, children: [_jsx(Column, { field: 'role', header: 'Role Name' }), _jsx(Column, { field: 'syllabus', header: 'Syllabus', body: renderPermissionDropdown('syllabus') }), _jsx(Column, { field: 'training', header: 'Training Program', body: renderPermissionDropdown('training') }), _jsx(Column, { field: 'class', header: 'Class', body: renderPermissionDropdown('class') }), _jsx(Column, { field: 'learningMaterial', header: 'Learning Material', body: renderPermissionDropdown('learningMaterial') }), _jsx(Column, { field: 'user', header: 'User', body: renderPermissionDropdown('user') })] }), _jsxs("div", { className: styles.submitButton, children: [_jsx(Button, { label: "Cancel", className: `${styles.cancelButton} p-button-text`, onClick: () => setUpdateType(true) }), _jsx(Button, { className: `${styles.saveButton}`, label: "Save", onClick: handleSave })] })] }))] }));
};
export default UsePermission;
