import React, { useState } from 'react'
import TrainingDetail from '../components/TrainingDetail/TrainingDetail'
import Header from '../components/Header/Header'
import styles from './ClassEditC.module.css'
import ClassModal from '../components/ClassModal/ClassModal'
import ButtonContained from '../../../components/Button/ButtonContained'
import SyllabusCardWithAvatar from '../../../components/SyllabusCardWithAvatar/SyllabusCardWithAvatar'

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
    ]

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSyllabus, setFilteredSyllabus] = useState(syllabusDataNoImage);

    const handleSearch = (query: any) => {
        setSearchQuery(query);
        if (query === '') {
            setFilteredSyllabus(syllabusList);
        } else {
            setFilteredSyllabus(
                syllabusList.filter(syllabus =>
                    syllabus.courseNameProp.toLowerCase().includes(query.toLowerCase()) ||
                    syllabus.activeProp.toLowerCase().includes(query.toLowerCase()) ||
                    syllabus.durationProp.toLowerCase().includes(query.toLowerCase()) ||
                    syllabus.modifiedDateProp.toLowerCase().includes(query.toLowerCase()) ||
                    syllabus.modifiedAuthorProp.toLowerCase().includes(query.toLowerCase())
                )
            );
        }
    };
    const [syllabusList, setSyllabusList] = useState(syllabusDataNoImage)

    const handleDelete = (index: number) => {
        const updatedSyllabusList = syllabusList.filter((_, i) => i !== index);
        setSyllabusList(updatedSyllabusList);
        setFilteredSyllabus(updatedSyllabusList.filter(syllabus =>
            syllabus.courseNameProp.toLowerCase().includes(searchQuery.toLowerCase()) ||
            syllabus.activeProp.toLowerCase().includes(searchQuery.toLowerCase()) ||
            syllabus.durationProp.toLowerCase().includes(searchQuery.toLowerCase()) ||
            syllabus.modifiedDateProp.toLowerCase().includes(searchQuery.toLowerCase()) ||
            syllabus.modifiedAuthorProp.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    };

    return (
        <div className={styles.container}>
            <Header
                editHeader
                classTitle='Training program of Fresher Develop Operation'
                title='DevOps Foundation'
                button={<ButtonContained color="secondary">Inactive</ButtonContained>}
            >
            </Header>

            <div className={styles.content}>
                <p className={styles.txtContentTitle}>Content</p>

                <div className={styles.listCourse}>
                    {filteredSyllabus.length > 0 ? (
                        filteredSyllabus.map((syllabus, index) => (
                            <SyllabusCardWithAvatar
                                key={index}
                                {...syllabus}
                                isBtnDeleteProp={true}
                                isBtnDeleteClick={() => handleDelete(index)}
                            />
                        ))
                    ) : (
                        <div className={styles.suitable}>There is no suitable syllabus</div>
                    )}
                </div>

                <div className={styles.addAndSearch}>
                    <ClassModal></ClassModal>

                    <span className={styles.txtOr}> or </span>

                    <div className={styles.inputSearch}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#2D3748" />
                        </svg>

                        <input type="text" placeholder="Select" onChange={(e) => handleSearch(e.target.value)} />
                    </div>
                </div>
            </div>

        </div>
    )
}
