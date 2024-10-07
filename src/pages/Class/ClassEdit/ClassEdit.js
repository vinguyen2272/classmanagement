import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import avatar_cat from '../../../assets/khang_img/avatar_cat.png';
import avatar_kid from '../../../assets/khang_img/avatar_kid.png';
import avatar_sky from '../../../assets/khang_img/avatar_sky.png';
import avatar_people from '../../../assets/khang_img/avatar_people.png';
import styles from './ClassEdit.module.css';
import ClassEditA from './ClassEditA';
import ClassEditB from './ClassEditB';
import ClassEditC from './ClassEditC';
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
];
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
    ];
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [submit, setSubmit] = useState(() => () => { });
    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const prevStep = () => setStep((prevStep) => prevStep - 1);
    const cancel = () => {
        setStep(1);
        setFormData({});
    };
    return (_jsxs("div", { className: styles.container, children: [step === 1 && _jsx(ClassEditA
            // data={formData} 
            // setData={setFormData} 
            // setSubmit={setSubmit} 
            , {}), step === 2 && _jsx(ClassEditB
            // data={formData} 
            // setData={setFormData} 
            // setSubmit={setSubmit} 
            , {}), step === 3 && _jsx(ClassEditC
            // data={formData} 
            // setData={setFormData} 
            // setSubmit={setSubmit} 
            , {}), _jsxs("div", { className: styles.navigationBtn, children: [_jsx("div", { children: _jsx("button", { onClick: prevStep, className: styles.backBtn, children: "Back" }) }), _jsxs("div", { className: styles.cancelSubmitNext, children: [_jsx("button", { onClick: cancel, className: styles.cancelBtn, children: "Cancel" }), _jsx("button", { onClick: submit, className: styles.submitBtn, style: step === 3 ? { background: '#2D3748' } : {}, children: step === 3 ? 'Save' : 'Save as draft' }), step < 3 && _jsx("button", { onClick: nextStep, className: styles.nextBtn, children: "Next" })] })] })] }));
}
