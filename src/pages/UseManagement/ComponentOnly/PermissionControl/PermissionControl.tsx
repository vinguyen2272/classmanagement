import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import {
  AddIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from '../../../../assets/svg/Action/Action'
import style from './PermissionControl.module.css'
import { GradeIcon } from '../../../../assets/svg/Indicator/Indicator'
import { Editor } from 'primereact/editor'
import { CreateIcon } from '../../../../assets/svg/DocumentManage/DocumentManage'

interface RoleControl {
    id: string;
    role: string;
    permission:Permission;
}
interface Permission{
    syllabus: string;
    training: string;
    class: string;
    learningMaterial: string;
    user: string;
}
interface PermissionControlProps {
  dataRoleControl: RoleControl[]
}

const PermissionControl: React.FC<PermissionControlProps> = ({
  dataRoleControl,
}) => {
  const renderIcon = (value: string) => {
    switch (value) {
      case 'Full Access':
        return <GradeIcon />
      case 'Create':
        return <AddIcon />
      case 'View':
        return <VisibilityIcon />
      case 'Access denied':
        return <VisibilityOffIcon />
      case 'Modify':
        return <CreateIcon />
      default:
        return null
    }
  }

    const renderPermissionColumn = (field: keyof Permission) => (rowData: RoleControl) => (
        <div className={style.renderColumn}>
            {renderIcon(rowData.permission[field])}
            {rowData.permission[field]}
        </div>
    );

    return (
        <div className={style.perControl}>
            <DataTable value={dataRoleControl} className={style.tablePer}>
                <Column field='role' header='Role Name' ></Column>
                <Column field='syllabus' header='Syllabus' body={renderPermissionColumn('syllabus')}></Column>
                <Column field='training' header='Training Program' body={renderPermissionColumn('training')}></Column>
                <Column field='class' header='Class' body={renderPermissionColumn('class')}></Column>
                <Column field='learningMaterial' header='Learning Material' body={renderPermissionColumn('learningMaterial')}></Column>
                <Column field='user' header='User' body={renderPermissionColumn('user')}></Column>
            </DataTable>
        </div>
    );
};

export default PermissionControl
