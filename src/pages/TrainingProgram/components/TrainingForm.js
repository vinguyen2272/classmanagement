import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import ButtonContained from '../../../components/Button/ButtonContained';
import TagContained from '../../../components/Tag/TagContained';
import FilteringTool from '../../../components/FilteringTool/FilteringTool';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { programActions, selectInputSearch, } from '../../../features/program/trainingProgramSlice';
export default function TrainingForm() {
    const [inputSearch, setInputSearch] = useState('');
    const dispatch = useAppDispatch();
    const inputSearched = useAppSelector(selectInputSearch);
    const dispatchInputSearch = () => {
        if (inputSearch.trim() === '')
            return;
        dispatch(programActions.addInputSearch(inputSearch));
        setInputSearch('');
    };
    const handleDeleteInputSearch = (inputSearch) => {
        dispatch(programActions.deleteInputSearch(inputSearch));
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "my-[20px] flex flex-row items-center justify-between px-[30px] ", children: [_jsxs("div", { className: "flex gap-3 ", children: [_jsxs(IconField, { iconPosition: "left", className: " flex  rounded-[10px] w-[300px]  ", children: [_jsx(InputIcon, { className: "pi pi-search size-xs " }), _jsx(InputText, { "v-model": "value1", placeholder: "Search", className: " w-[100%] focus:outline-none border border-1 border-primary ps-8", value: inputSearch, onChange: e => setInputSearch(e.target.value), onKeyDown: e => {
                                            if (e.key === 'Enter') {
                                                dispatchInputSearch();
                                            }
                                        } })] }), _jsx(FilteringTool, {})] }), _jsxs("div", { className: "flex gap-1", children: [_jsx(ButtonContained, { icon: "pi pi-file-arrow-up", color: "orange", children: "Import" }), _jsx(ButtonContained, { icon: "pi pi-plus-circle", children: "Add now" })] })] }), _jsx("div", { className: "flex gap-3 px-[30px]", children: inputSearched &&
                    inputSearched.map((item, index) => (_jsx(TagContained, { color: "brown", value: item, icon: "pi pi-times", onHandleClick: e => handleDeleteInputSearch(item) }, index))) })] }));
}
