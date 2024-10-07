import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from 'react';
import { CopyIcon, CreateIcon, DeleteForeverIcon, } from '../../../assets/svg/DocumentManage/DocumentManage';
function ActionTable({ data, onHandleVisible, onHandleDuplicateProgram, onHandleSelectProgram, }) {
    const op = useRef(null);
    return (_jsxs("div", { children: [_jsx(Button, { type: "button", icon: "pi pi-ellipsis-h", rounded: true, onClick: e => op.current?.toggle(e) }), _jsxs(OverlayPanel, { ref: op, children: [_jsxs("div", { className: "flex items-center gap-1 cursor-pointer", children: [_jsx(CreateIcon, {}), _jsx("p", { children: "Edit program" })] }), _jsxs("div", { className: "flex items-center gap-1 my-4 cursor-pointer", onClick: e => {
                            onHandleDuplicateProgram(data);
                            op.current?.toggle(e);
                        }, children: [_jsx(CopyIcon, {}), _jsx("p", { children: "Duplicate program" })] }), _jsxs("div", { className: "flex items-center gap-1 cursor-pointer ", onClick: () => {
                            onHandleSelectProgram(data.courseId);
                            onHandleVisible(true);
                        }, children: [_jsx(DeleteForeverIcon, {}), _jsx("p", { children: "Delete program" })] })] })] }));
}
export default ActionTable;
