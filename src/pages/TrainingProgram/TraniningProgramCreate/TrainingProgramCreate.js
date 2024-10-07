import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Tag } from 'primereact/tag';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import ButtonContained from '../../../components/Button/ButtonContained';
import { programActions, selectProgramStep, } from '../../../features/program/trainingProgramSlice';
import Title from '../components/Title';
import { TrainingProgramAddSyllabus } from '../TrainingProgramAddSyllabus/TrainingProgramAddSyllabus';
import style from './TrainingProgramCreate.module.css';
export const TrainingProgramCreate = () => {
    const dispatch = useAppDispatch();
    const currentStep = useAppSelector(selectProgramStep);
    return (_jsx("div", { className: style.classCreateNoInput, children: currentStep === 'create training program' ? (_jsxs(_Fragment, { children: [_jsx(Title, { children: "New Training program" }), _jsxs("div", { className: style.classInput, children: [_jsx("h3", { children: "Program name" }), _jsx("input", { type: "text", className: style.inputField, placeholder: "Name the program name", value: "", onChange: () => { } }), _jsx(ButtonContained, { onHandleClick: () => {
                                dispatch(programActions.setSelectProgramStep('add syllabus'));
                            }, children: "Create" })] })] })) : (_jsxs(_Fragment, { children: [_jsxs(Title, { children: [_jsx("p", { children: " Training Program " }), _jsxs("div", { className: "font-bold flex items-center ", children: [_jsxs("h2", { style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                    }, children: [_jsx("span", { className: " text-[40px] ", children: "DevOps Foundation" }), _jsx(Tag, { style: {
                                                backgroundColor: 'transparent',
                                                border: '1px solid #fff',
                                                borderRadius: '40px',
                                                letterSpacing: 0,
                                            }, children: "Inactive" })] }), _jsx("i", { className: "pi pi-ellipsis-h ml-auto", style: {
                                        fontSize: '30px',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                    } })] })] }), _jsx(TrainingProgramAddSyllabus, {})] })) }));
};
