import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch } from 'react-redux';
import styles from './SyllabusDetail.module.css';
import Outline from './Outline/Outline';
import { getSyllabusById, getSyllabuses, } from '../../../features/syllabus/syllabusFetchSlice';
import ActionButtons from '../components/ActionButton_Details/ActionButton';
import { useAppSelector } from '../../../app/hooks';
import { getAdmin } from '../../../features/admin/adminSlice';
import SyllabusTabsOption from '../../../components/SyllabusTabsOption/SyllabusTabsOption';
import General from './General/General';
import TrainingMaterial from './TrainingMaterial/TrainingMaterial';
const SyllabusDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const syllabus = useSelector((state: RootState) =>
    //   id ? selectSyllabusById(state, id) : null
    // )
    const syllabus = useAppSelector(state => state.syllabus.syllabuses.find(s => s.syllabusId === id));
    const confirm = (data) => {
        // setSelectedSyllabus(data)
    };
    const admin = useAppSelector(state => state.admin.adminState);
    const onHandleDeactivate = (data) => { };
    const onHandleDuplicateSyllabus = (data) => {
        const _data = { ...data, id: Date.now() };
        // handle duplication logic
    };
    const adminSelected = admin.filter((item, index) => Number(item.adminId) === syllabus?.createdBy);
    useEffect(() => {
        if (id) {
            dispatch(getSyllabuses());
            dispatch(getAdmin());
            dispatch(getSyllabusById(parseInt(id, 10)));
        }
    }, [dispatch, id]);
    const statusSyllabuses = {
        active: styles.active,
        inactive: styles.inactive,
        draft: styles.draft,
    };
    const tabsName = ['General', 'Outline', 'Training material'];
    const tabsElement = [_jsx(General, {}), _jsx(Outline, {}), _jsx(TrainingMaterial, {})];
    return (_jsxs("div", { className: styles.container, children: [_jsx("div", { className: `${styles.h1}`, children: "Syllabus" }), syllabus ? (_jsxs("div", { children: [_jsxs("div", { className: `${styles.titleActions}`, children: [_jsxs("div", { className: `${styles.title}`, children: [_jsx("div", { className: `${styles.h1} ${styles.h1bigger}`, children: syllabus.name }), _jsx("div", { children: _jsx("button", { className: `${statusSyllabuses[syllabus.status]} ${styles.standardButton}`, children: syllabus.status.charAt(0).toUpperCase() +
                                                syllabus.status.slice(1) }) })] }), _jsx("div", { className: styles.actions, children: _jsx(ActionButtons, { onHandleDelete: () => confirm(syllabus), onHandleDuplicate: () => {
                                        onHandleDuplicateSyllabus(syllabus);
                                    }, onHandleDeactivate: () => {
                                        onHandleDeactivate(syllabus);
                                    } }) })] }), _jsxs("div", { className: styles.code, children: [syllabus.code, " v4.0"] }), _jsx("hr", {}), _jsxs("div", { className: styles.duration, children: [_jsx("span", { className: styles.h1, children: syllabus.duration }), " days", ' ', _jsxs("i", { children: ["(", syllabus.duration * 24, " hours)"] })] }), _jsxs("div", { className: styles.modified, children: ["Modified on ", syllabus.creationDate, " by", ' ', _jsxs("b", { children: [" ", adminSelected[0]?.name] })] }), _jsx("section", { className: styles.syllabusCreate, children: _jsx("div", { className: styles.tabsControl, children: _jsx(SyllabusTabsOption, { tabsName: tabsName, tabsElement: tabsElement }) }) })] })) : (_jsx("p", { children: "Loading..." }))] }));
};
export default SyllabusDetail;
