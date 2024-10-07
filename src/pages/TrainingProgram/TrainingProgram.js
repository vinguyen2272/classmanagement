import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import Title from './components/Title';
import TrainingForm from './components/TrainingForm';
import TrainingList from './components/TrainingList';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAllPrograms, selectInputSearch, selectLoading, selectProgram, } from '../../features/program/trainingProgramSlice';
import { getAdmin, selectAdmin } from '../../features/admin/adminSlice';
export default function TrainingProgram() {
    const dispatch = useAppDispatch();
    const programs = useAppSelector(selectProgram);
    const loading = useAppSelector(selectLoading);
    const inputSearched = useAppSelector(selectInputSearch);
    const admins = useAppSelector(selectAdmin);
    const filteredData = inputSearched && inputSearched.length > 0
        ? programs?.filter(item => {
            return inputSearched.every(key => Object.values(item).some(value => value.toString().toLowerCase().includes(key.toLowerCase())));
        })
        : programs;
    useEffect(() => {
        dispatch(getAllPrograms());
        dispatch(getAdmin());
    }, [dispatch]);
    return (_jsxs("div", { children: [_jsx("div", { className: '', children: _jsx(Title, { children: _jsx("h2", { className: "text-xl text-white ", children: "Training program" }) }) }), _jsx(TrainingForm, {}), filteredData && (_jsx(TrainingList, { data: filteredData, loading: loading, admins: admins }))] }));
}
