import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import styles from './TimePicker.module.css';
const TimePicker = ({ value, onChange }) => {
    const [time, setTime] = useState('--:--');
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [inputHours, setInputHours] = useState(0);
    const [inputMinutes, setInputMinutes] = useState(0);
    const scrollRefHours = useRef(null);
    const scrollRefMinutes = useRef(null);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);
    useEffect(() => {
        // Initialize time, hours, and minutes based on value prop
        if (value) {
            const [hoursPart, minutesPart] = value.split(':').map(Number);
            if (!isNaN(hoursPart) && !isNaN(minutesPart)) {
                setHours(hoursPart);
                setMinutes(minutesPart);
                setInputHours(hoursPart);
                setInputMinutes(minutesPart);
                setTime(value);
            }
        }
    }, [value]);
    useEffect(() => {
        const scrollToSelected = (ref, value) => {
            if (ref.current) {
                const items = ref.current.children;
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    if (parseInt(item.innerText, 10) === value) {
                        ref.current.scrollTop =
                            item.offsetTop -
                                ref.current.clientHeight / 2 +
                                item.clientHeight / 2;
                        break;
                    }
                }
            }
        };
        scrollToSelected(scrollRefHours, hours);
        scrollToSelected(scrollRefMinutes, minutes);
    }, [hours, minutes]);
    const handleTimeChange = (newHours, newMinutes) => {
        const newTime = `${newHours < 10 ? '0' : ''}${newHours}:${newMinutes < 10 ? '0' : ''}${newMinutes}`;
        setTime(newTime);
        onChange(newTime); // Update the parent with the new time
    };
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
        if (inputRef.current)
            inputRef.current.focus();
    };
    const handleHoursChange = (delta) => {
        const newHours = (hours + delta + 24) % 24;
        setHours(newHours);
        handleTimeChange(newHours, minutes);
    };
    const handleMinutesChange = (delta) => {
        const newMinutes = (minutes + delta + 60) % 60;
        setMinutes(newMinutes);
        handleTimeChange(hours, newMinutes);
    };
    const handleNumberClick = (value, isHours) => {
        if (isHours) {
            setHours(value);
            setInputHours(value); // Update inputHours
            handleTimeChange(value, minutes);
        }
        else {
            setMinutes(value);
            setInputMinutes(value); // Update inputMinutes
            handleTimeChange(hours, value);
        }
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const numberValue = parseInt(value, 10);
        if (name === 'hours') {
            if (!isNaN(numberValue)) {
                const newHours = Math.max(0, Math.min(23, numberValue));
                setInputHours(newHours);
                setHours(newHours);
                handleTimeChange(newHours, minutes);
            }
        }
        else if (name === 'minutes') {
            if (!isNaN(numberValue)) {
                const newMinutes = Math.max(0, Math.min(59, numberValue));
                setInputMinutes(newMinutes);
                setMinutes(newMinutes);
                handleTimeChange(hours, newMinutes);
            }
        }
    };
    const getVisibleHours = () => Array.from({ length: 24 }, (_, i) => i);
    const getVisibleMinutes = () => Array.from({ length: 60 }, (_, i) => i);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };
        if (isDropdownVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownVisible]);
    return (_jsxs("div", { className: styles.timePicker, ref: dropdownRef, children: [_jsx("button", { className: styles.timePickerButton, onClick: toggleDropdown, children: time }), _jsxs("div", { className: `${styles.dropdown} ${isDropdownVisible ? styles.show : ''}`, children: [_jsxs("div", { className: styles.select, children: [_jsxs("div", { className: styles.selectWrapper, children: [_jsx("div", { className: styles.arrowButton, onClick: () => handleHoursChange(-1), children: _jsx("i", { className: `pi pi-angle-up ${styles.icon}` }) }), _jsx("div", { ref: scrollRefHours, className: styles.scrollContainer, children: getVisibleHours().map(hour => (_jsx("div", { className: `${styles.number} ${hour === hours ? styles.selected : ''}`, onClick: () => handleNumberClick(hour, true), children: hour < 10 ? `0${hour}` : hour }, hour))) }), _jsx("div", { className: styles.arrowButton, onClick: () => handleHoursChange(1), children: _jsx("i", { className: `pi pi-angle-down ${styles.icon}` }) })] }), _jsx("span", { className: styles.colon, children: ":" }), _jsxs("div", { className: styles.selectWrapper, children: [_jsx("div", { className: styles.arrowButton, onClick: () => handleMinutesChange(-1), children: _jsx("i", { className: `pi pi-angle-up ${styles.icon}` }) }), _jsx("div", { ref: scrollRefMinutes, className: styles.scrollContainer, children: getVisibleMinutes().map(minute => (_jsx("div", { className: `${styles.number} ${minute === minutes ? styles.selected : ''}`, onClick: () => handleNumberClick(minute, false), children: minute < 10 ? `0${minute}` : minute }, minute))) }), _jsx("div", { className: styles.arrowButton, onClick: () => handleMinutesChange(1), children: _jsx("i", { className: `pi pi-angle-down ${styles.icon}` }) })] })] }), _jsxs("div", { className: styles.input, children: [_jsx("input", { type: "text", name: "hours", value: inputHours < 10 ? `0${inputHours}` : inputHours, onChange: handleInputChange, className: styles.inputField }), _jsx("span", { className: styles.colon, children: ":" }), _jsx("input", { type: "text", name: "minutes", value: inputMinutes < 10 ? `0${inputMinutes}` : inputMinutes, onChange: handleInputChange, className: styles.inputField })] })] })] }));
};
export default TimePicker;
