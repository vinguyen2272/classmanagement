import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { AddIcon, VisibilityIcon, VisibilityOffIcon, } from '../../../../assets/svg/Action/Action';
import style from './PermissionControl.module.css';
import { GradeIcon } from '../../../../assets/svg/Indicator/Indicator';
import { CreateIcon } from '../../../../assets/svg/DocumentManage/DocumentManage';
const PermissionControl = ({ dataRoleControl, }) => {
    const renderIcon = (value) => {
        switch (value) {
            case 'Full Access':
                return _jsx(GradeIcon, {});
            case 'Create':
                return _jsx(AddIcon, {});
            case 'View':
                return _jsx(VisibilityIcon, {});
            case 'Access denied':
                return _jsx(VisibilityOffIcon, {});
            case 'Modify':
                return _jsx(CreateIcon, {});
            default:
                return null;
        }
    };
    const renderPermissionColumn = (field) => (rowData) => (_jsxs("div", { className: style.renderColumn, children: [renderIcon(rowData.permission[field]), rowData.permission[field]] }));
    return (_jsx("div", { className: style.perControl, children: _jsxs(DataTable, { value: dataRoleControl, className: style.tablePer, children: [_jsx(Column, { field: 'role', header: 'Role Name' }), _jsx(Column, { field: 'syllabus', header: 'Syllabus', body: renderPermissionColumn('syllabus') }), _jsx(Column, { field: 'training', header: 'Training Program', body: renderPermissionColumn('training') }), _jsx(Column, { field: 'class', header: 'Class', body: renderPermissionColumn('class') }), _jsx(Column, { field: 'learningMaterial', header: 'Learning Material', body: renderPermissionColumn('learningMaterial') }), _jsx(Column, { field: 'user', header: 'User', body: renderPermissionColumn('user') })] }) }));
};
export default PermissionControl;
