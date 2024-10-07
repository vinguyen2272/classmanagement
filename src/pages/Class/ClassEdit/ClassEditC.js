import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Header from '../components/Header/Header';
import styles from './ClassEditC.module.css';
import ClassModal from '../components/ClassModal/ClassModal';
import ButtonContained from '../../../components/Button/ButtonContained';
import SyllabusCardWithAvatar from '../../../components/SyllabusCardWithAvatar/SyllabusCardWithAvatar';
export default function ClassEditC() {
    const syllabusDataNoImage = [
        {
            id: 1,
            // avatar1Prop: avatar_cat,
            // avatar2Prop: avatar_kid,
            // avatar3Prop: avatar_sky,
            courseNameProp: 'Linux',
            activeProp: 'Active',
            isBtnDeleteProp: true,
            versionProp: 'LIN v2.0',
            durationProp: '4 days (12 hours)',
            modifiedDateProp: '23/07/2022',
            modifiedAuthorProp: 'Johny Deep',
        },
        {
            id: 2,
            // avatar1Prop: avatar_cat,
            // avatar2Prop: avatar_kid,
            // avatar3Prop: avatar_sky,
            courseNameProp: 'AWS Basic',
            activeProp: 'Active',
            isBtnDeleteProp: true,
            versionProp: 'AWB v1.0',
            durationProp: '7 days (21 hours)',
            modifiedDateProp: '23/07/2022',
            modifiedAuthorProp: 'Johny Deep'
        },
        {
            // avatar1Prop: avatar_kid,
            // avatar2Prop: avatar_people,
            courseNameProp: 'Docker',
            activeProp: 'Active',
            isBtnDeleteProp: true,
            versionProp: 'DOC v1.5',
            durationProp: '3 days (12 hours)',
            modifiedDateProp: '23/07/2022',
            modifiedAuthorProp: 'Johny Deep'
        },
        {
            // avatar1Prop: avatar_kid,
            // avatar2Prop: avatar_people,
            courseNameProp: 'Kubernetes',
            activeProp: 'Active',
            isBtnDeleteProp: true,
            versionProp: 'KUB v1.5',
            durationProp: '6 days (18 hours)',
            modifiedDateProp: '23/07/2022',
            modifiedAuthorProp: 'Johny Deep'
        },
        {
            // avatar1Prop: avatar_cat,
            courseNameProp: 'Devops_CICD',
            activeProp: 'Active',
            isBtnDeleteProp: true,
            versionProp: 'DEC v2',
            durationProp: '8 days (24 hours)',
            modifiedDateProp: '23/07/2022',
            modifiedAuthorProp: 'Johny Deep'
        },
        {
            // avatar1Prop: avatar_cat,
            // avatar2Prop: avatar_people,
            courseNameProp: 'Mock Project',
            activeProp: 'Inactive',
            isBtnDeleteProp: true,
            versionProp: 'MOC v2.5',
            durationProp: '3 days (12 hours)',
            modifiedDateProp: '23/07/2022',
            modifiedAuthorProp: 'Johny Deep'
        },
        {
            // avatar1Prop: avatar_people,
            courseNameProp: 'Field Trip',
            activeProp: 'Inactive',
            isBtnDeleteProp: true,
            versionProp: "DEC v2",
            durationProp: '3 days (12 hours)',
            modifiedDateProp: '23/07/2022',
            modifiedAuthorProp: 'Johny Deep'
        },
        {
            // avatar1Prop: avatar_people,
            courseNameProp: 'Docker 2',
            activeProp: 'Active',
            isBtnDeleteProp: true,
            versionProp: "DOC v1.5",
            durationProp: '3 days (12 hours)',
            modifiedDateProp: '23/07/2022',
            modifiedAuthorProp: 'Johny Deep'
        },
    ];
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSyllabus, setFilteredSyllabus] = useState(syllabusDataNoImage);
    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query === '') {
            setFilteredSyllabus(syllabusList);
        }
        else {
            setFilteredSyllabus(syllabusList.filter(syllabus => syllabus.courseNameProp.toLowerCase().includes(query.toLowerCase()) ||
                syllabus.activeProp.toLowerCase().includes(query.toLowerCase()) ||
                syllabus.durationProp.toLowerCase().includes(query.toLowerCase()) ||
                syllabus.modifiedDateProp.toLowerCase().includes(query.toLowerCase()) ||
                syllabus.modifiedAuthorProp.toLowerCase().includes(query.toLowerCase())));
        }
    };
    const [syllabusList, setSyllabusList] = useState(syllabusDataNoImage);
    const handleDelete = (index) => {
        const updatedSyllabusList = syllabusList.filter((_, i) => i !== index);
        setSyllabusList(updatedSyllabusList);
        setFilteredSyllabus(updatedSyllabusList.filter(syllabus => syllabus.courseNameProp.toLowerCase().includes(searchQuery.toLowerCase()) ||
            syllabus.activeProp.toLowerCase().includes(searchQuery.toLowerCase()) ||
            syllabus.durationProp.toLowerCase().includes(searchQuery.toLowerCase()) ||
            syllabus.modifiedDateProp.toLowerCase().includes(searchQuery.toLowerCase()) ||
            syllabus.modifiedAuthorProp.toLowerCase().includes(searchQuery.toLowerCase())));
    };
    return (_jsxs("div", { className: styles.container, children: [_jsx(Header, { editHeader: true, classTitle: 'Training program of Fresher Develop Operation', title: 'DevOps Foundation', button: _jsx(ButtonContained, { color: "secondary", children: "Inactive" }) }), _jsxs("div", { className: styles.content, children: [_jsx("p", { className: styles.txtContentTitle, children: "Content" }), _jsx("div", { className: styles.listCourse, children: filteredSyllabus.length > 0 ? (filteredSyllabus.map((syllabus, index) => (_jsx(SyllabusCardWithAvatar, { ...syllabus, isBtnDeleteProp: true, isBtnDeleteClick: () => handleDelete(index) }, index)))) : (_jsx("div", { className: styles.suitable, children: "There is no suitable syllabus" })) }), _jsxs("div", { className: styles.addAndSearch, children: [_jsx(ClassModal, {}), _jsx("span", { className: styles.txtOr, children: " or " }), _jsxs("div", { className: styles.inputSearch, children: [_jsx("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z", fill: "#2D3748" }) }), _jsx("input", { type: "text", placeholder: "Select", onChange: (e) => handleSearch(e.target.value) })] })] })] })] }));
}
