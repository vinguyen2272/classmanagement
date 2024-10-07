import  { useRef, useState } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { MenuItem } from 'primereact/menuitem';
import { CreateIcon, DeleteForeverIcon } from '../../../../assets/svg/DocumentManage/DocumentManage';
import { RoleIcon } from '../../../../assets/svg/Other/Other';
import { MoreHorizontalIcon, VisibilityOffIcon } from '../../../../assets/svg/Action/Action';
import styles from './S_CustomTieredMenu.module.css'
import { PrimeReactProvider } from 'primereact/api';
import Modal from '../../../../components/Modal/Modal';
import ModalEdit from '../ModalEdit/ModalEdit';
import { Toast } from 'primereact/toast';

interface S_CustomTieredMenuProps {
    userId:string,
}
export default function S_CustomTieredMenu({userId}:S_CustomTieredMenuProps) {
    const [activeModal, setActiveModal] = useState(false);
    const handleEditUser = ()=>{
        setActiveModal(true);
    }
    const handleEventToParent = ()=>{
        setActiveModal(false)
    }
    const menu = useRef<TieredMenu>(null);
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Edit user',
            icon: <CreateIcon/>,
            command: handleEditUser
        },
        {
            label: 'Change role',
            icon: <RoleIcon/>,
            items: [
                {
                    label: 'Supper Admin',
                },
                {
                    label: 'Class Admin',
                  
                },
                {
                    label: 'Trainer',

                }
            ]
        },
        {
            label: 'De-activate user',
            icon: <VisibilityOffIcon/>,
           
        },
        {
            label: 'Delete user',
            icon: <DeleteForeverIcon/>,
            // className:styles.deleteUser
        }
       
       
    ];

    return (
        // "card flex justify-content-center"
        <PrimeReactProvider value={{unstyled:false}}>
        <div className={styles.tieredMenuContainer}>
            <Toast ref={toast} position="bottom-right" />
            <TieredMenu model={items} popup ref={menu} breakpoint="767px" className={styles.S_tieredMenu}/>
            <button  
            onClick={(e) => {
                if (menu.current) {
                    menu.current.toggle(e);
                }}}
            > <MoreHorizontalIcon/></button>
           {activeModal && <ModalEdit toast={toast} visible={activeModal} userID = {userId} onClose={handleEventToParent} />}

        </div>
        
        </PrimeReactProvider>
    )
}