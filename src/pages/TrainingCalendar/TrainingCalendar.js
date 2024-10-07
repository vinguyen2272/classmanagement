import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { IconField } from 'primereact/iconfield';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { useEffect, useRef, useState } from 'react';
import FilteringTool from '../../components/FilteringTool/FilteringTool';
import { getBlurClassNames, getEventClassNames, } from './components/Types/Type';
import Tooltip from './components/Tooltip';
import './Custom-calendar.css';
import Style from './calendar.module.css';
//data source
const simpleEvents = [
    {
        title: 'Meeting',
        start: '2024-07-13T09:00:00',
        end: '2024-07-13T11:00:00',
        description: 'Discussion about project milestones',
        location: 'Boston Room',
        trainer: 'John Doe',
        admin: 'Jane Smith',
        type: 'intern',
        domain: 'Ho Chi Minh',
    },
    {
        title: 'Training',
        start: '2024-07-10T09:00:00',
        end: '2024-07-10T11:00:00',
        description: 'Discussion about project milestones',
        location: 'DMS Room',
        trainer: 'Di Di',
        admin: 'Husky',
        type: 'fresher',
        domain: 'Ho Chi Minh',
    },
    {
        title: 'Workshop',
        start: '2024-07-15T13:00:00',
        end: '2024-07-15T15:00:00',
        description: 'Hands-on workshop on new tools',
        location: 'Tech Lab',
        trainer: 'Alice Brown',
        admin: 'Tom Clark',
        type: 'onFresher',
        domain: 'Da Nang',
    },
    {
        title: 'Seminar',
        start: '2024-07-18T10:00:00',
        end: '2024-07-18T12:00:00',
        description: 'Seminar on market trends',
        location: 'Conference Hall',
        trainer: 'Robert Green',
        admin: 'Samantha White',
        type: 'offFresher',
        domain: 'Da Nang',
    },
    {
        title: 'Conference',
        start: '2024-07-20T08:00:00',
        end: '2024-07-20T17:00:00',
        description: 'Annual conference on technology advancements',
        location: 'Grand Ballroom',
        trainer: 'Emily Johnson',
        admin: 'Michael Scott',
        type: 'intern',
        domain: 'Ha Noi',
    },
    {
        title: 'Review Meeting',
        start: '2024-07-22T14:00:00',
        end: '2024-07-22T16:00:00',
        description: 'Review meeting for project progress',
        location: 'Boardroom',
        trainer: 'Nancy Wilson',
        admin: 'Karen Adams',
        type: 'fresher',
        domain: 'Ha Noi',
    },
    {
        title: 'Team Building',
        start: '2024-07-25T09:00:00',
        end: '2024-07-25T12:00:00',
        description: 'Team building activities and exercises',
        location: 'Outdoor Park',
        trainer: 'Chris Evans',
        admin: 'Laura King',
        type: 'fresher',
        domain: 'Ha Noi',
    },
];
//call the event calendar anđ set colors for the types
const getClassNamesForEvents = (events) => events.map(event => ({
    ...event,
    classNames: [getEventClassNames(event.type)],
}));
const TrainingCalendar = () => {
    const [date, setDate] = useState(new Date());
    const calendarRef = useRef(null);
    const [tooltipInfo, setTooltipInfo] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTerms, setSearchTerms] = useState([]);
    const [updateData, setUpdateData] = useState(getClassNamesForEvents(simpleEvents));
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
    const [tooltipWidth, setTooltipWidth] = useState(0);
    const [blurClass, setBlurClass] = useState('');
    //search when enter
    const handleSearch = (event) => {
        if (event.key === 'Enter' && searchTerm.trim() !== '') {
            const newSearchTerms = [...searchTerms, searchTerm];
            setSearchTerms(newSearchTerms);
            updateEventData(newSearchTerms);
            setSearchTerm('');
        }
    };
    const updateEventData = (terms) => {
        if (terms.length === 0) {
            setUpdateData(getClassNamesForEvents(simpleEvents));
        }
        else {
            const filteredEvents = simpleEvents.filter(event => terms.some(term => {
                const lowerCaseTermChars = term.toLowerCase().split('');
                const domainChars = event.domain.toLowerCase().split('');
                const isIncluded = lowerCaseTermChars.every(char => domainChars.includes(char));
                return isIncluded;
            }));
            console.log('Filtered events:', filteredEvents);
            setUpdateData(getClassNamesForEvents(filteredEvents));
        }
    };
    const removeSearchTerm = (term) => {
        const newSearchTerms = searchTerms.filter(t => t !== term);
        setSearchTerms(newSearchTerms);
        updateEventData(newSearchTerms);
    };
    useEffect(() => {
        handleViewChange();
    }, [updateData]);
    //change the date
    const handleChangeDate = (e) => {
        setDate(e.value);
    };
    //synchronized calendar and fullcalendar
    useEffect(() => {
        if (calendarRef.current) {
            const calendarApi = calendarRef.current.getApi();
            calendarApi.gotoDate(date);
        }
    }, [date]);
    //mouse enter event
    const handleEventMouseEnter = (info) => {
        const event = info.event;
        const cell = info.el.getBoundingClientRect();
        const eventType = event.extendedProps?.type;
        setTooltipInfo(event.extendedProps);
        setTooltipPosition({ top: cell.bottom, left: cell.left });
        setTooltipWidth(cell.width);
        const blurClass = getBlurClassNames(eventType);
        setBlurClass(blurClass);
    };
    //mouse leave event
    const handleEventMouseLeave = () => {
        setTooltipInfo(null);
        setBlurClass('');
    };
    //set width when value in tab day
    const handleViewChange = () => {
        if (calendarRef.current) {
            const calendarApi = calendarRef.current.getApi();
            const newView = calendarApi.view.type;
            const eventHarnessElements = document.querySelectorAll('.fc-timegrid-event-harness');
            eventHarnessElements.forEach(element => {
                if (newView === 'timeGridDay') {
                    element.classList.add('fc-timegrid-event-harness-inset-small');
                }
                else {
                    element.classList.remove('fc-timegrid-event-harness-inset-small');
                }
            });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("h1", { className: Style.title, children: "Training Calendar" }), _jsxs("div", { className: Style.wrapContainer, children: [_jsxs("div", { className: Style.search, children: [_jsx(IconField, { iconPosition: "left", children: _jsx(InputText, { value: searchTerm, onChange: e => setSearchTerm(e.target.value), onKeyDown: handleSearch, placeholder: "Search by..." }) }), _jsx(FilteringTool, {})] }), _jsx("div", { className: Style.filterTags, children: searchTerms.map((term, index) => (_jsxs("button", { className: Style.searchTerm, onClick: () => removeSearchTerm(term), children: [term, _jsx("i", { className: `pi pi-times ${Style.iconTimes}` })] }, index))) }), _jsx("div", { className: Style.calendar, children: _jsx(Calendar, { value: date, onChange: handleChangeDate, inline: true, showOtherMonths: false, style: { width: '100%' } }) }), _jsxs("div", { className: Style.fullCalender, children: [_jsx(Fullcalendar, { plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin], initialView: "timeGridDay", headerToolbar: {
                                    start: 'timeGridDay,timeGridWeek',
                                    end: '',
                                }, height: "auto", slotLabelFormat: {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false,
                                    meridiem: false,
                                }, allDaySlot: false, slotMinTime: "08:00:00", slotMaxTime: "22:30:00", slotDuration: "00:30:00", slotLabelInterval: "00:30:00", events: updateData, ref: calendarRef, eventMouseEnter: handleEventMouseEnter, eventMouseLeave: handleEventMouseLeave, datesSet: handleViewChange }), _jsx(Tooltip, { info: tooltipInfo, position: tooltipPosition, width: tooltipWidth, blurClass: blurClass })] })] })] }));
};
export default TrainingCalendar;
