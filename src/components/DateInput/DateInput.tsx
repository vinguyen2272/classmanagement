
import React, { forwardRef, useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";
import styles from './DateInput.module.css'
import { CalendarIcon } from "../../assets/svg/NavigationMenu/NavigationMenu";
interface DateInputProps {
    onChange?: (e: any) => void;
    value: any;
}

const DateInput = forwardRef((props: DateInputProps, ref:any)=> {

    return (
        
        <div className={`${styles.canlendarContainer} card flex justify-content-center`}>
            <CalendarIcon/>
            <Calendar placeholder="Select Date" readOnlyInput  className ={styles.calendaGroup} variant="filled" value={props.value} onChange={props.onChange}  ref={ref}/>
        </div>
        
    )
})
export default DateInput
        