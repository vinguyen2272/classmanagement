import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import ButtonContained from '../../../components/Button/ButtonContained';
import Header from '../components/Header/Header';
import styles from './ClassCreate.module.css';
import ClassModal from '../components/ClassModal/ClassModal';
import TrainingDetail from '../components/TrainingDetail/TrainingDetail';
import TrainingEdit from '../../../components/TrainingEdit/TrainingEdit';
import ButtonUnderlined from '../../../components/Button/ButtonUnderlined';
import SyllabusCardWithAvatar from '../../../components/SyllabusCardWithAvatar/SyllabusCardWithAvatar';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { syllabusDataNoImage } from './data';
import EditTrainingAccordion from './EditTrainingAccordion';
import GeneralInput from '../components/Accordion/General/GeneralInput';
import TimeFrameInput from '../components/Accordion/TimeFrame/TimeFrameInput';
import AttendeeInput from '../components/Accordion/Attendee/AttendeeInput';
export default function ClassCreate() {
    const [inputValue, setInputValue] = useState('');
    const [className, setClassName] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditMode, setEditMode] = useState(false);
    const [isEditTrainingMode, setEditTrainingMode] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [syllabusData, setSyllabusData] = useState(() => {
        const data = localStorage.getItem('syllabusData');
        const updatedData = data
            ? JSON.parse(data).map((item) => ({
                ...item,
                isBtnDeleteProp: false,
            }))
            : [];
        localStorage.setItem('syllabusData', JSON.stringify(updatedData));
        return data
            ? JSON.parse(data).length !== 0
                ? JSON.parse(data)
                : syllabusDataNoImage
            : syllabusDataNoImage;
    });
    const [searchResult, setSearchResult] = useState(syllabusData);
    const handleInputClick = () => {
        setClassName(inputValue);
    };
    const handleEditMode = () => {
        const updatedData = syllabusData.map((item) => ({
            ...item,
            isBtnDeleteProp: !isEditMode,
        }));
        localStorage.setItem('syllabusData', JSON.stringify(updatedData));
        setSearchResult(updatedData);
        setSyllabusData(updatedData);
        setEditMode(!isEditMode);
    };
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            const data = syllabusData.filter((i) => i.courseNameProp
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase()));
            setSearchValue('');
            setSearchResult(data);
        }
    };
    const handleCancel = () => {
        setSelectedItem(null);
        setEditMode(false);
        setClassName('');
        setInputValue('');
        const updatedData = syllabusData.map((item) => ({
            ...item,
            isBtnDeleteProp: false,
        }));
        localStorage.setItem('syllabusData', JSON.stringify(updatedData));
        setSearchResult(updatedData);
        setSyllabusData(updatedData);
    };
    const handleDelete = (index) => {
        const updatedData = syllabusData.filter((_, i) => i !== index);
        localStorage.setItem('syllabusData', JSON.stringify(updatedData));
        setSyllabusData(updatedData);
        setSearchResult(updatedData);
    };
    const addSyllabusItem = (data) => {
        const days = Math.floor(data.hours / 24);
        const hours = data.hours % 24;
        const newSyllabusItem = {
            avatar1Prop: '',
            avatar2Prop: '',
            avatar3Prop: '',
            courseNameProp: data.syllabus,
            activeProp: 'Active',
            isBtnDeleteProp: false,
            versionProp: 'LIN v2.0',
            durationProp: `${days} days (${hours} hours)`,
            modifiedDateProp: data.date,
            modifiedAuthorProp: 'Johny Deep',
        };
        const updatedData = [...syllabusData, newSyllabusItem];
        localStorage.setItem('syllabusData', JSON.stringify(updatedData));
        setSyllabusData(updatedData);
        setSearchResult(updatedData);
    };
    useEffect(() => {
        localStorage.setItem('syllabusData', JSON.stringify(syllabusData));
    }, [syllabusData]);
    if (className === '') {
        return (_jsxs("div", { className: styles.classCreateNoInput, children: [_jsx(Header, { classOnly: true }), _jsxs("div", { className: styles.classInput, children: [_jsx("h3", { children: "Class name" }), _jsxs("div", { children: [_jsx("input", { type: "text", className: styles.inputField, placeholder: "Name the class", value: inputValue, onChange: e => setInputValue(e.target.value) }), _jsx(ButtonContained, { onHandleClick: handleInputClick, children: "Create" })] })] })] }));
    }
    else if (isEditMode) {
        return (_jsxs("div", { className: styles.classCreate, children: [_jsx(Header, { editHeader: isEditMode, classTitle: `Training program of ${className}`, title: selectedItem?.value, date: selectedItem?.modifiedDate, name: selectedItem?.modifiedAuthor, button: _jsx(ButtonContained, { color: "secondary", children: "Inactive" }) }), _jsxs("div", { className: styles.listCourse, children: [_jsx("h3", { children: "Content" }), searchResult.map((syllabus, index) => (_jsx(SyllabusCardWithAvatar, { isBtnDeleteClick: () => handleDelete(index), ...syllabus }, index)))] }), _jsxs("div", { className: styles.actionSyllabus, children: [_jsx("div", { children: _jsx(ClassModal, { addSyllabusItem: addSyllabusItem }) }), _jsx("h3", { children: "or" }), _jsx("div", { className: styles.search, children: _jsxs(IconField, { iconPosition: "left", children: [_jsx(InputIcon, { className: "pi pi-search" }), _jsx(InputText, { value: searchValue, onKeyDown: handleSearch, onChange: (e) => {
                                            setSearchValue(e.target.value);
                                        }, placeholder: "select" })] }) })] }), _jsxs("div", { className: !selectedItem ? styles.actionNoBack : styles.action, children: [_jsx(ButtonContained, { onHandleClick: handleEditMode, children: "Back" }), _jsxs("div", { children: [_jsx(ButtonUnderlined, { onHandleClick: handleCancel, children: "Cancel" }), _jsx(ButtonContained, { onHandleClick: () => {
                                        setEditTrainingMode(true);
                                        setEditMode(false);
                                    }, children: "Save" })] })] })] }));
    }
    else if (isEditTrainingMode) {
        return (_jsxs("div", { className: styles.classCreate, children: [_jsx(Header, { editHeader: isEditTrainingMode, classTitle: `Training program of ${className}`, title: selectedItem?.value, date: selectedItem?.modifiedDate, name: selectedItem?.modifiedAuthor, button: _jsx(ButtonContained, { color: "secondary", children: "Inactive" }) }), _jsx(EditTrainingAccordion, {}), _jsxs("div", { className: !selectedItem ? styles.actionNoBack : styles.action, children: [_jsx(ButtonContained, { onHandleClick: () => {
                                setEditTrainingMode(false);
                                setEditMode(true);
                            }, children: "Back" }), _jsxs("div", { children: [_jsx(ButtonUnderlined, { onHandleClick: handleCancel, children: "Cancel" }), _jsx(ButtonContained, { onHandleClick: () => {
                                        setEditTrainingMode(true);
                                        setEditMode(false);
                                    }, children: "Save" })] })] })] }));
    }
    return (_jsxs("div", { className: styles.classCreate, children: [_jsx(Header, { editHeader: isEditMode, classTitle: "Fresher Develop Operation", title: className, button: _jsx(ButtonContained, { color: "secondary", children: "Planning" }) }), _jsx("div", { className: styles.classCreateContent, children: _jsxs("div", { className: styles.classInfoWrapper, children: [_jsxs("div", { style: { display: 'flex', gap: '20px', flexDirection: 'column' }, children: [_jsx(GeneralInput, { isShow: selectedItem ? 0 : 1, disabled: selectedItem ? false : true }), _jsx(AttendeeInput, { isShow: selectedItem ? 0 : 1, disabled: selectedItem ? false : true })] }), _jsx("div", { children: _jsx(TimeFrameInput, { commenceDate: '', completionDate: '', isShow: selectedItem ? 0 : 1, disabled: selectedItem ? false : true }) })] }) }), _jsx("div", { className: styles.training, children: selectedItem ? (_jsx(TrainingDetail, { programNameProp: selectedItem.value, programDurationProp: selectedItem.duration, programModifiedDateProp: selectedItem.modifiedDate, programModifiedAuthorProp: selectedItem.modifiedAuthor, programIsBtnEditProp: true, syllabusData: syllabusData })) : (_jsx("div", { className: styles.trainingEdit, children: _jsx(TrainingEdit, { setItem: setSelectedItem }) })) }), _jsxs("div", { className: !selectedItem ? styles.actionNoBack : styles.action, children: [selectedItem && (_jsx(ButtonContained, { onHandleClick: () => setSelectedItem(null), children: "Back" })), _jsxs("div", { children: [_jsx(ButtonUnderlined, { onHandleClick: handleCancel, children: "Cancel" }), _jsx(ButtonContained, { children: "Save as draft" }), _jsx(ButtonContained, { onHandleClick: () => {
                                    selectedItem && handleEditMode();
                                }, children: "Next" })] })] })] }));
}
