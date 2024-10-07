import React, { useEffect, useRef, useState } from "react";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
import Permission from "../ComponentOnly/SelectPermission/Permission";
import PermissionControl from "../ComponentOnly/PermissionControl/PermissionControl";
import styles from './UserPermission.module.css';
import { useSelector } from "react-redux";
import { useAppDispatch} from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { fetchData, updatePermissions } from "../../../features/user/UserPermissionSlice";
import { Toast } from "primereact/toast";

interface Permission {
    syllabus: string;
    training: string;
    class: string;
    learningMaterial: string;
    user: string;
}

interface RoleControl {
    id: string;
    role: string;
    permission: Permission;
}
const UsePermission: React.FC = () => {
    const [updateType, setUpdateType] = useState(true);
    const permissionList = useSelector((state:RootState)=>state.userPermissions.permissions);
    const dispatch = useAppDispatch();
    const toast = useRef<Toast>(null); 
    useEffect(()=>{
        dispatch(fetchData())
        
    },[dispatch]);

    const [dataRoleControl, setDataRoleControl] = useState<RoleControl[]>(permissionList);
    useEffect(()=>{
        setDataRoleControl(permissionList);
    },[permissionList]);

    const [updatedData, setUpdatedData] = useState<RoleControl[]>(dataRoleControl);
    useEffect(() => {
        setUpdatedData(dataRoleControl);
    }, [dataRoleControl]);
    const renderPermissionDropdown = (field: keyof Permission) => (rowData: RoleControl) => {
        const onChange = (newValue: string) => {
            setUpdatedData(prevData =>
                prevData.map(item =>
                    item.id === rowData.id ? { ...item, permission:{ ...item.permission,[field]: newValue}  } : item
                )
            );
        };

        return <Permission defaultValue={rowData.permission[field]} onChange={onChange} />;
    };

    const handleSave = () => {        
        dispatch(updatePermissions(updatedData));
        setDataRoleControl(updatedData);
        setUpdateType(true);
        if (toast.current) {
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Permissions updated successfully', life: 2000 });
        }
    };

    return (
        <div className={styles.permissionContainer}>
             <Toast ref={toast} position="bottom-right"/>
            <h4 className={styles.contentPer}>User Permission</h4>
            <div className={styles.buttonUpdate}>
                <button
                    className={updateType ? styles.updateButton : styles.updateButtonDnone}
                    onClick={() => setUpdateType(false)}
                >
                    Update permission
                </button>
            </div>
            {updateType ? (
                
                    <PermissionControl dataRoleControl={updatedData} />
             
            ) : (
                <div>
                    <DataTable value={updatedData} className={styles.tablePer}>
                        <Column field='role' header='Role Name' />
                        <Column field='syllabus' header='Syllabus' body={renderPermissionDropdown('syllabus')} />
                        <Column field='training' header='Training Program'  body={renderPermissionDropdown('training')} />
                        <Column field='class' header='Class' body={renderPermissionDropdown('class')} />
                        <Column field='learningMaterial' header='Learning Material' body={renderPermissionDropdown('learningMaterial')} />
                        <Column field='user' header='User' body={renderPermissionDropdown('user')} />
                    </DataTable>
                    <div className={styles.submitButton}>
                        <Button label="Cancel" className={`${styles.cancelButton} p-button-text`} onClick={() => setUpdateType(true)} />
                        <Button className={`${styles.saveButton}`} label="Save" onClick={handleSave} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsePermission;
