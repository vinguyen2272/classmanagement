import React from 'react'
import ClassDetail from '../ClassDetail/ClassDetail'
import TrainingDetail from '../components/TrainingDetail/TrainingDetail'
import ClassCreate from '../ClassCreate/ClassCreate'
import Header from '../components/Header/Header'
import styles from './ClassEditA.module.css'
import General from '../components/Accordion/General/General'
import TimeFrame from '../components/Accordion/TimeFrame/TimeFrame'
import Attendee from '../components/Accordion/Attendee/Attendee'
import AttendeeInput from '../components/Accordion/Attendee/AttendeeInput'
import GeneralInput from '../components/Accordion/General/GeneralInput'
import TimeFrameInput from '../components/Accordion/TimeFrame/TimeFrameInput'

export default function ClassEditA() {
    const syllabusDataNoImage = [
        {
            // avatar1Prop: avatar_cat,
            // avatar2Prop: avatar_kid,
            // avatar3Prop: avatar_sky,
            courseNameProp: 'Linux',
            activeProp: 'Active',
            //   isBtnDeleteProp: true,
            versionProp: 'LIN v2.0',
            durationProp: '4 days (12 hours)',
            modifiedDateProp: '23/07/2022',
            modifiedAuthorProp: 'Johny Deep',
        },
        {
            // avatar1Prop: avatar_cat,
            // avatar2Prop: avatar_kid,
            // avatar3Prop: avatar_sky,
            courseNameProp: 'AWS Basic',
            activeProp: 'Active',
            //   isBtnDeleteProp: true,
            versionProp: 'AWB v1.0',
            durationProp: '7 days (21 hours)',
            modifiedDateProp: '23/07/2022',
            modifiedAuthorProp: 'Warrior Tran',
        },
        {
            // avatar1Prop: avatar_kid,
            // avatar2Prop: avatar_people,
            courseNameProp: 'Docker',
            activeProp: 'Active',
            //   isBtnDeleteProp: true,
            versionProp: 'DOC v1.5',
            durationProp: '3 days (12 hours)',
            modifiedDateProp: '23/07/2022',
            modifiedAuthorProp: 'Warrior Tran',
        },
        {
            // avatar1Prop: avatar_kid,
            // avatar2Prop: avatar_people,
            courseNameProp: 'Kubernetes',
            activeProp: 'Active',
            //   isBtnDeleteProp: true,
            versionProp: 'KUB v1.5',
            durationProp: '6 days (18 hours)',
            modifiedDateProp: '23/07/2022',
            modifiedAuthorProp: 'Ba Chu Heo',
        },
        {
            // avatar1Prop: avatar_cat,
            courseNameProp: 'Devops_CICD',
            activeProp: 'Active',
            //   isBtnDeleteProp: true,
            versionProp: 'DEC v2',
            durationProp: '8 days (24 hours)',
            modifiedDateProp: '23/07/2022',
            modifiedAuthorProp: 'Ba Chu Heo',
        },
        {
            // avatar1Prop: avatar_cat,
            // avatar2Prop: avatar_people,
            courseNameProp: 'Mock Project',
            activeProp: 'Inactive',
            //   isBtnDeleteProp: true,
            versionProp: 'MOC v2.5',
            durationProp: '3 days (12 hours)',
            modifiedDateProp: '23/07/2022',
            modifiedAuthorProp: 'Ba Chu Heo',
        },
        // {
        //   // avatar1Prop: avatar_people,
        //   courseNameProp: 'Field Trip',
        //   activeProp: 'Active',
        //   // isBtnDeleteProp: true,
        //   // versionProp: "MOC v2.5",
        //   durationProp: '1 days (5 hours)',
        //   modifiedDateProp: '23/07/2022',
        //   modifiedAuthorProp: 'Ba Chu Heo',
        // },
    ]

    return (
        <div className={styles.container}>
            <Header
                classTitle=""
            ></Header>

            <div className={styles.content}>
                <div className={styles.time0}>
                    <div className={styles.time1}>
                        <GeneralInput/>
                        <TimeFrameInput commenceDate={''} completionDate={''}/>
                    </div>

                    <div className={styles.time2}>
                        <AttendeeInput></AttendeeInput>
                    </div>
                </div>

                <TrainingDetail
                    programNameProp="DevOps Foundation"
                    programDurationProp="31 days (97 hours)"
                    programModifiedDateProp="23/07/2022"
                    programModifiedAuthorProp="Warrior Tran"
                    programIsBtnEditProp
                    syllabusData={syllabusDataNoImage}
                />
            </div>

        </div>
    )
}
