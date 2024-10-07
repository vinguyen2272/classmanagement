import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import styles from './FilteringTool.module.css';
import { Button } from 'primereact/button';
import stashDownIconAsset from '../../assets/DucNH83/stackdownicon.png';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import { addLocale, PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { useForm } from 'react-hook-form';
import vietnamProvincesList from '../../assets/DucNH83/vietnam_provinces.json';
import { MultiSelect } from 'primereact/multiselect';
import axios from 'axios';
import { Calendar } from 'primereact/calendar';
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["female"] = "female";
    GenderEnum["male"] = "male";
    GenderEnum["other"] = "other";
})(GenderEnum || (GenderEnum = {}));
addLocale('en', {
    firstDayOfWeek: 1,
    dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ],
    dayNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    monthNamesShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ],
    today: 'Today',
    clear: 'Clear',
    //...
});
const FilteringTool = () => {
    const [selectedCities, setSelectedCities] = useState('');
    const [filterFromTime, setFilterFromTime] = useState(new Date(null));
    const [filterToTime, setFilterToTime] = useState(new Date(null));
    const [selectedFSU, setSelectedFSU] = useState('');
    const [selectedTrainer, setSelectedTrainer] = useState('');
    const [trainerList, setTrainerList] = useState([]);
    const [filteredClassTime, setFilteredClassTime] = useState([]);
    const [filteredClassStatus, setFilteredClassStatus] = useState([]);
    const [filteredAttendee, setFilteredAttendee] = useState([]);
    const stashDownIcon = _jsx("img", { src: stashDownIconAsset });
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const toggleFilterTool = () => {
        const filterToolContainer = document.getElementById(styles['filteringToolContainer']);
        filterToolContainer.classList.toggle(styles.show);
    };
    const classTime = ['Morning', 'Noon', 'Night', 'Online'];
    const status = ['Planning', 'Opening', 'Closed'];
    let filteringObject = {};
    const attendee = [
        'Intern',
        'Fresher',
        'Online-fee-fresher',
        'Offline-fee-fresher',
    ];
    const FSU = [];
    const fetchTrainer = async () => {
        await axios
            .get('https://6698b84c2069c438cd6faaf9.mockapi.io/api/v1/studentList')
            .then(response => {
            let cachedList = [];
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].isTrainer === true) {
                    cachedList.push(response.data[i].name);
                }
            }
            setTrainerList(cachedList);
        })
            .catch(err => console.log(err));
    };
    const handleClearForm = (e) => {
        e.preventDefault();
        const selectValues = document.querySelectorAll('.' + styles.filteringToolContainer + ' select');
        selectValues.forEach(item => (item.value = ''));
        setFilterFromTime(new Date('--/--/----'));
        setFilterToTime(new Date('--/--/----'));
        setSelectedCities('');
        setSelectedTrainer('');
    };
    const handleSelectInput = async (filteredTarget, target) => {
        switch (true) {
            case filteredTarget === filteredClassTime:
                if (!filteredTarget.some(item => item === target)) {
                    await setFilteredClassTime([...filteredClassTime, target]);
                }
                else {
                    await setFilteredClassTime(prevState => prevState.filter(item => item !== target));
                }
                break;
            case filteredTarget === filteredClassStatus:
                if (!filteredTarget.some(item => item === target)) {
                    await setFilteredClassStatus([...filteredClassStatus, target]);
                }
                else {
                    await setFilteredClassStatus(prevState => prevState.filter(item => item !== target));
                }
                break;
            case filteredTarget === filteredAttendee:
                if (!filteredTarget.some(item => item === target)) {
                    await setFilteredAttendee([...filteredAttendee, target]);
                }
                else {
                    await setFilteredAttendee(prevState => prevState.filter(item => item !== target));
                }
                break;
            default:
                console.log('Unknown filter target');
        }
    };
    const handleSearchConfirm = () => {
        filteringObject = {
            classTime: filteredClassTime,
            classStatus: filteredClassStatus,
            attendee: filteredAttendee,
            trainer: selectedTrainer,
            city: selectedCities,
            fromTime: filterFromTime,
            toTime: filterToTime,
            FSU: selectedFSU,
        };
        //Send the filtering object to your API endpoint or store it in a Redux store for further use.
    };
    useEffect(() => {
        fetchTrainer();
    }, []);
    return (_jsx(_Fragment, { children: _jsx(PrimeReactProvider, { children: _jsxs("div", { className: styles.container, children: [_jsx(Button, { onClick: () => {
                            toggleFilterTool();
                        }, style: {
                            backgroundColor: 'rgb(45, 55, 72)',
                            color: 'white',
                            padding: '4px 10px',
                            gap: '6px',
                            fontWeight: 'bold',
                        }, label: "Filter", icon: stashDownIcon, severity: "success" }), _jsxs("div", { id: styles['filteringToolContainer'], className: styles.filteringToolContainer, children: [_jsxs("div", { className: styles.filterRow1, children: [_jsxs("div", { className: styles.wrapper, children: [_jsx("label", { htmlFor: "", children: "Class Location" }), _jsx(MultiSelect, { style: { width: '100%', border: '1px solid gray' }, value: selectedCities, onChange: e => setSelectedCities(e.value), options: vietnamProvincesList, optionLabel: "name", placeholder: "Select Cities", maxSelectedLabels: 3, display: "chip", className: "w-full md:w-20rem" })] }), _jsxs("div", { className: styles.wrapper, children: [_jsx("label", { htmlFor: "", children: "Class time frame" }), _jsxs("div", { children: [_jsxs("div", { children: [_jsx("span", { children: "from:" }), _jsx(Calendar, { locale: "en", dateFormat: "dd/mm/yy", value: filterFromTime, onChange: e => {
                                                                    if (e.value !== null) {
                                                                        setFilterFromTime(e.value);
                                                                    }
                                                                } })] }), _jsxs("div", { children: [_jsx("span", { children: "to:" }), _jsx(Calendar, { maskSlotChar: "--/--/----", value: filterToTime, onChange: e => {
                                                                    if (e.value !== null) {
                                                                        setFilterToTime(e.value);
                                                                    }
                                                                } })] })] })] })] }), _jsxs("div", { className: styles.filterRow2, children: [_jsxs("div", { id: styles['classTimeId'], className: styles.classTime, children: [_jsx("span", { children: "Class time" }), _jsx("div", { className: styles.selectGroup, children: classTime.map((time, index) => {
                                                    return (_jsxs("div", { children: [_jsx("input", { onChange: () => handleSelectInput(filteredClassTime, time), type: "checkbox", id: styles[`${'classTime' + time}`] }), _jsx("label", { htmlFor: styles[`${'classTime' + time}`], children: time })] }, index));
                                                }) })] }), _jsxs("div", { className: styles.classStatus, children: [_jsx("span", { children: "Status" }), _jsx("div", { className: styles.selectGroup, children: status.map((item, index) => {
                                                    return (_jsxs("div", { children: [_jsx("input", { onChange: () => handleSelectInput(filteredClassStatus, item), type: "checkbox", id: styles[`${'status' + item}`] }), _jsx("label", { htmlFor: styles[`${'status' + item}`], children: item })] }, index));
                                                }) })] }), _jsxs("div", { className: styles.attendee, children: [_jsx("span", { children: "Attendee" }), _jsx("div", { className: styles.selectGroup, children: attendee.map((type, index) => {
                                                    return (_jsxs("div", { children: [_jsx("input", { onChange: () => handleSelectInput(filteredAttendee, type), type: "checkbox", id: styles['attendee' + type] }), _jsx("label", { htmlFor: styles['attendee' + type], children: type })] }, index));
                                                }) })] })] }), _jsxs("div", { className: styles.filterRow3, children: [_jsxs("div", { children: [_jsx("label", { htmlFor: styles['FSUSelector'], children: "FSU" }), _jsx(Dropdown, { id: styles['FSUSelector'], value: selectedFSU, onChange: e => setSelectedFSU(e.value), options: FSU, optionLabel: "name", placeholder: "Select an FSU", className: "w-full md:w-14rem" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: styles.TrainerSelector, children: "Trainer" }), _jsx(Dropdown, { id: styles.TrainerSelector, value: selectedTrainer, onChange: e => setSelectedTrainer(e.value), options: trainerList, optionLabel: "name", placeholder: "Select a Trainer", className: "w-full md:w-14rem" })] })] }), _jsxs("div", { className: styles.functioningBtn, children: [_jsx(Button, { style: {
                                            backgroundColor: 'rgb(45, 55, 72)',
                                            color: 'white',
                                            padding: '4px 10px',
                                            gap: '6px',
                                            fontWeight: 'bold',
                                        }, onClick: () => handleClearForm(event), severity: "success", label: "Clear" }), _jsx(Button, { style: {
                                            backgroundColor: 'rgb(45, 55, 72)',
                                            color: 'white',
                                            padding: '4px 10px',
                                            gap: '6px',
                                            fontWeight: 'bold',
                                        }, onClick: () => handleSearchConfirm(), severity: "success", label: "Search" })] })] })] }) }) }));
};
export default FilteringTool;
