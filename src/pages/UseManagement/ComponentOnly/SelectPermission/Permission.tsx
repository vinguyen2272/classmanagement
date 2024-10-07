import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import style from './Permission.module.css';
import { PrimeReactProvider } from 'primereact/api';
import { AddIcon, VisibilityIcon, VisibilityOffIcon } from '../../../../assets/svg/Action/Action';
import { CreateIcon } from '../../../../assets/svg/DocumentManage/DocumentManage';
import { GradeIcon } from '../../../../assets/svg/Indicator/Indicator';

interface PermissionProps {
    defaultValue: string;
    onChange: (value: string) => void;
}

interface Option {
    label: string;
    value: string;
    icon: JSX.Element;
}

const Permission: React.FC<PermissionProps> = ({ defaultValue, onChange }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    useEffect(() => {
        setSelectedOption(defaultValue);
    }, [defaultValue]);

    const options: Option[] = [
        { label: 'Access denied', value: 'Access denied', icon: <div className={style.iconSVG}><VisibilityOffIcon /></div> },
        { label: 'View', value: 'View', icon: <div className={style.iconSVG}><VisibilityIcon /></div> },
        { label: 'Modify', value: 'Modify', icon: <div className={style.iconSVG}><CreateIcon /></div> },
        { label: 'Create', value: 'Create', icon: <div className={style.iconSVG}><AddIcon /></div> },
        { label: 'Full access', value: 'Full Access', icon: <div className={style.iconSVG}><GradeIcon /></div> }
    ];

    const handleChange = (e: any) => {
        setSelectedOption(e.value);
        onChange(e.value);
    };

    const itemTemplate = (option: Option) => {
        return (
            <div className={style.dropDown}>
                <span>{option.icon}</span>
                <span>{option.label}</span>
            </div>
        );
    };

    const valueTemplate = (option: Option) => {
        if (option) {
            return (
                <div className={style.dropDown}>
                    <span>{option.icon}</span>
                    <span>{option.label}</span>
                </div>
            );
        }
        return <span>Permission</span>;
    };

    return (
        <PrimeReactProvider value={{ unstyled: false }}>
            <div className={selectedOption ? style.selectContainerSpec : style.selectContainer}>
                <Dropdown
                    style={{ width: '100%', padding: '0px 10px', paddingRight: '0px' }}
                    value={selectedOption}
                    itemTemplate={itemTemplate}
                    valueTemplate={valueTemplate}
                    options={options}
                    onChange={handleChange}
                    placeholder="Permission"
                    className={style.customDropdown}
                />
            </div>
        </PrimeReactProvider>
    );
};

export default Permission;
