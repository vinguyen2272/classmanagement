//import React from 'react'
import styles from './SyllabusDetail.module.css'
import { Tag } from 'primereact/tag';
import { PrimeReactProvider } from 'primereact/api';

interface SyllabusDetailProps {
    introductionProp?: string;
    versionProp?: string;
    durationProp?: string;
    statusProp?: string;
}

export default function SyllabusDetail({introductionProp, versionProp, durationProp, statusProp}: SyllabusDetailProps) {
    return (
        <PrimeReactProvider>
            <div className={styles.container}>
                <div className={styles.cardContent}>
                    <div className={styles.cardInfo}>
                        <p className={styles.title}>
                            {introductionProp || '.NET Introduction'}
                        </p>

                        <div className={styles.infor}>
                            <Tag 
                                value={versionProp || "H4SD"} 
                                rounded 
                                className={styles.standard} 
                            />
                            
                            <span>
                                {durationProp || '30mins'}
                            </span>

                            <Tag 
                                value={statusProp || "Online"} 
                                rounded 
                                className={styles.status} 
                            />

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_184_17183)">
                                    <path d="M9 13C11.21 13 13 11.21 13 9C13 6.79 11.21 5 9 5C6.79 5 5 6.79 5 9C5 11.21 6.79 13 9 13ZM9 7C10.1 7 11 7.9 11 9C11 10.1 10.1 11 9 11C7.9 11 7 10.1 7 9C7 7.9 7.9 7 9 7ZM9 15C6.33 15 1 16.34 1 19V21H17V19C17 16.34 11.67 15 9 15ZM3 19C3.22 18.28 6.31 17 9 17C11.7 17 14.8 18.29 15 19H3ZM15.08 7.05C15.92 8.23 15.92 9.76 15.08 10.94L16.76 12.63C18.78 10.61 18.78 7.56 16.76 5.36L15.08 7.05ZM20.07 2L18.44 3.63C21.21 6.65 21.21 11.19 18.44 14.37L20.07 16C23.97 12.11 23.98 6.05 20.07 2Z" fill="#2D3748" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_184_17183">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_184_17184)">
                                    <path d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM17.5 12.12V15.5H14.5V10.5H15.88L17.5 12.12ZM13 9V17H19V11.5L16.5 9H13Z" fill="#2D3748" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_184_17184">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>

                    </div>
                </div>
            </div>
        </PrimeReactProvider>
    )
}
