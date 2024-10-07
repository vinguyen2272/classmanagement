import React, { useState } from 'react'
import TrainingDetail from '../../Class/components/TrainingDetail/TrainingDetail'
import avatar_cat from '../../../assets/khang_img/avatar_cat.png'
import avatar_kid from '../../../assets/khang_img/avatar_kid.png'
import avatar_sky from '../../../assets/khang_img/avatar_sky.png'
import avatar_people from '../../../assets/khang_img/avatar_people.png'
import styles from './ClassEdit.module.css'
import ClassEditA from './ClassEditA'
import ClassEditB from './ClassEditB'
import ClassEditC from './ClassEditC'

export const syllabusDataHasImage = [
  { 
    avatar1Prop: avatar_cat,
    avatar2Prop: avatar_kid,
    avatar3Prop: avatar_sky,
    courseNameProp: 'Linux',
    activeProp: 'Active',
    // isBtnDeleteProp: true,
    versionProp: 'LIN v2.0',
    durationProp: '4 days (12 hours)',
    modifiedDateProp: '23/07/2022',
    modifiedAuthorProp: 'Johny Deep',
  },
  {
    avatar1Prop: avatar_cat,
    avatar2Prop: avatar_kid,
    avatar3Prop: avatar_sky,
    courseNameProp: 'AWS Basic',
    activeProp: 'Active',
    // isBtnDeleteProp: true,
    versionProp: 'AWB v1.0',
    durationProp: '7 days (21 hours)',
    modifiedDateProp: '23/07/2022',
    modifiedAuthorProp: 'Warrior Tran',
  },
  {
    avatar1Prop: avatar_kid,
    avatar2Prop: avatar_people,
    courseNameProp: 'Docker',
    activeProp: 'Active',
    // isBtnDeleteProp: true,
    versionProp: 'DOC v1.5',
    durationProp: '3 days (12 hours)',
    modifiedDateProp: '23/07/2022',
    modifiedAuthorProp: 'Warrior Tran',
  },
  {
    avatar1Prop: avatar_kid,
    avatar2Prop: avatar_people,
    courseNameProp: 'Kubernetes',
    activeProp: 'Active',
    // isBtnDeleteProp: true,
    versionProp: 'KUB v1.5',
    durationProp: '6 days (18 hours)',
    modifiedDateProp: '23/07/2022',
    modifiedAuthorProp: 'Ba Chu Heo',
  },
  {
    avatar1Prop: avatar_cat,
    courseNameProp: 'Devops_CICD',
    activeProp: 'Active',
    // isBtnDeleteProp: true,
    versionProp: 'DEC v2',
    durationProp: '8 days (24 hours)',
    modifiedDateProp: '23/07/2022',
    modifiedAuthorProp: 'Ba Chu Heo',
  },
  {
    avatar1Prop: avatar_cat,
    avatar2Prop: avatar_people,
    courseNameProp: 'Mock Project',
    activeProp: 'Inactive',
    // isBtnDeleteProp: true,
    versionProp: 'MOC v2.5',
    durationProp: '3 days (12 hours)',
    modifiedDateProp: '23/07/2022',
    modifiedAuthorProp: 'Ba Chu Heo',
  },
  {
    avatar1Prop: avatar_people,
    courseNameProp: 'Field Trip',
    activeProp: 'Active',
    // isBtnDeleteProp: true,
    // versionProp: "MOC v2.5",
    durationProp: '1 days (5 hours)',
    modifiedDateProp: '23/07/2022',
    modifiedAuthorProp: 'Ba Chu Heo',
  },
]

export default function ClassEdit() {


  const syllabusDataNoImage = [
    {
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
      // avatar1Prop: avatar_cat,
      // avatar2Prop: avatar_kid,
      // avatar3Prop: avatar_sky,
      courseNameProp: 'AWS Basic',
      activeProp: 'Active',
      isBtnDeleteProp: true,
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
      isBtnDeleteProp: true,
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
      isBtnDeleteProp: true,
      versionProp: 'KUB v1.5',
      durationProp: '6 days (18 hours)',
      modifiedDateProp: '23/07/2022',
      modifiedAuthorProp: 'Ba Chu Heo',
    },
    {
      // avatar1Prop: avatar_cat,
      courseNameProp: 'Devops_CICD',
      activeProp: 'Active',
      isBtnDeleteProp: true,
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
      isBtnDeleteProp: true,
      versionProp: 'MOC v2.5',
      durationProp: '3 days (12 hours)',
      modifiedDateProp: '23/07/2022',
      modifiedAuthorProp: 'Ba Chu Heo',
    },
    {
      // avatar1Prop: avatar_people,
      courseNameProp: 'Field Trip',
      activeProp: 'Active',
      isBtnDeleteProp: true,
      // versionProp: "MOC v2.5",
      durationProp: '1 days (5 hours)',
      modifiedDateProp: '23/07/2022',
      modifiedAuthorProp: 'Ba Chu Heo',
    },
  ]

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [submit, setSubmit] = useState(() => () => { });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);
  const cancel = () => {
    setStep(1);
    setFormData({});
  };

  return (
    <div className={styles.container}>
      {/* <TrainingDetail
        programNameProp="DevOps Foundation"
        programDurationProp="31 days (97 hours)"
        programModifiedDateProp="23/07/2022"
        programModifiedAuthorProp="Warrior Tran"
        // programIsBtnEditProp
        syllabusData={syllabusDataHasImage}
      />

      <TrainingDetail
        programNameProp="DevOps Foundation"
        programDurationProp="31 days (97 hours)"
        programModifiedDateProp="23/07/2022"
        programModifiedAuthorProp="Warrior Tran"
        programIsBtnEditProp
        syllabusData={syllabusDataNoImage}
      /> */}

        {step === 1 && <ClassEditA
        // data={formData} 
        // setData={setFormData} 
        // setSubmit={setSubmit} 
        />}
        {step === 2 && <ClassEditB
        // data={formData} 
        // setData={setFormData} 
        // setSubmit={setSubmit} 
        />}
        {step === 3 && <ClassEditC
        // data={formData} 
        // setData={setFormData} 
        // setSubmit={setSubmit} 
        />}

        <div className={styles.navigationBtn}>
          <div>
            {/* {step > 1 && <button onClick={prevStep} className={styles.backBtn}>Back</button>} */}
            <button onClick={prevStep} className={styles.backBtn}>Back</button>
          </div>

          <div className={styles.cancelSubmitNext}>
            <button onClick={cancel} className={styles.cancelBtn}>Cancel</button>
            {/* <button onClick={submit} className={styles.submitBtn}>Save as draft</button> */}
            <button onClick={submit} className={styles.submitBtn} style={step === 3 ? { background: '#2D3748' } : {}}>
              {step === 3 ? 'Save' : 'Save as draft'}
            </button>
            {step < 3 && <button onClick={nextStep} className={styles.nextBtn}>Next</button>}
          </div>
        </div>

    </div>
  )
}
