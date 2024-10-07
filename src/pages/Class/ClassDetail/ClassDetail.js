import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import General from '../components/Accordion/General/General';
import Attendee from '../components/Accordion/Attendee/Attendee';
import TimeFrame from '../components/Accordion/TimeFrame/TimeFrame';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
import styles from './ClassDetail.module.css';
import Header from '../components/Header/Header';
import TrainingDetail from '../components/TrainingDetail/TrainingDetail';
import { syllabusDataHasImage } from '../ClassEdit/ClassEdit';
export default function ClassDetail() {
    // const timeFrameRef = useRef<HTMLDivElement>(null)
    return (_jsx(_Fragment, { children: _jsxs(PrimeReactProvider, { children: [_jsx("div", { className: styles.headerWrapper, children: _jsx(Header, {}) }), _jsxs("div", { className: styles.classInfoWrapper, children: [_jsxs("div", { style: { display: 'flex', gap: '20px', flexDirection: 'column' }, children: [_jsx(General, {}), _jsx(Attendee, { planned: 10, accepted: 10, actual: 10 })] }), _jsx("div", { children: _jsx(TimeFrame, { commenceDate: '2022-04-22', completionDate: '2022-05-22' }) })] }), _jsx("div", { className: styles.trainingDetail, children: _jsx(TrainingDetail, { syllabusData: syllabusDataHasImage }) })] }) }));
}
