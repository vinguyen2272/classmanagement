import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { CreateIcon, DeleteForeverIcon } from '../../../../assets/svg/DocumentManage/DocumentManage';
import { RoleIcon } from '../../../../assets/svg/Other/Other';
import { MoreHorizontalIcon, VisibilityOffIcon } from '../../../../assets/svg/Action/Action';
import styles from './S_CustomTieredMenu.module.css';
import { PrimeReactProvider } from 'primereact/api';
import ModalEdit from '../ModalEdit/ModalEdit';
import { Toast } from 'primereact/toast';
export default function S_CustomTieredMenu({ userId }) {
    const [activeModal, setActiveModal] = useState(false);
    const handleEditUser = () => {
        setActiveModal(true);
    };
    const handleEventToParent = () => {
        setActiveModal(false);
    };
    const menu = useRef(null);
    const toast = useRef(null);
    const items = [
        {
            label: 'Edit user',
            icon: _jsx(CreateIcon, {}),
            command: handleEditUser
        },
        {
            label: 'Change role',
            icon: _jsx(RoleIcon, {}),
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
            icon: _jsx(VisibilityOffIcon, {}),
        },
        {
            label: 'Delete user',
            icon: _jsx(DeleteForeverIcon, {}),
            // className:styles.deleteUser
        }
    ];
    return (
    // "card flex justify-content-center"
    _jsx(PrimeReactProvider, { value: { unstyled: false }, children: _jsxs("div", { className: styles.tieredMenuContainer, children: [_jsx(Toast, { ref: toast, position: "bottom-right" }), _jsx(TieredMenu, { model: items, popup: true, ref: menu, breakpoint: "767px", className: styles.S_tieredMenu }), _jsxs("button", { onClick: (e) => {
                        if (menu.current) {
                            menu.current.toggle(e);
                        }
                    }, children: [" ", _jsx(MoreHorizontalIcon, {})] }), activeModal && _jsx(ModalEdit, { toast: toast, visible: activeModal, userID: userId, onClose: handleEventToParent })] }) }));
}
