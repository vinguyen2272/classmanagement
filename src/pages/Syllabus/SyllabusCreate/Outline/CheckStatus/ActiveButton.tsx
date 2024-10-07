import React, { forwardRef, useState } from "react";
import styles from './ActiveButton.module.css';  // Import CSS module
interface ActiveStatus {
    value: boolean;
    onChange: (e: any) => void;
    onBlur: () => void;
    name: string;
    ref: React.RefCallback<HTMLInputElement>;
    disabled?: boolean;
}
const ActiveButton = forwardRef((props :ActiveStatus, ref:any)=> {
    const {onChange} = props;
    const [checked, setChecked] = useState<boolean>(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(!checked);
        onChange(e);
    }

    return (
        <div className={styles.switchButton}>
            <label className={`${styles.switch} ${checked ? styles.orange : ''}`}>
                <input 
                    type="checkbox" 
                    checked={checked} 
                    onChange={handleChange} 
                />
                <span className={styles.slider}></span>
            </label>
            <div className={checked? styles.contentActive:styles.contentDisabled}>Active</div>

        </div>
    );
})
export default ActiveButton
