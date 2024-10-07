import React from 'react'
import styles from './SyllabusCard.module.css'
import { Tag } from 'primereact/tag';
import { PrimeReactProvider } from 'primereact/api';

interface SyllabusCardProps {
  courseNameProp?: string;
  activeProp?: string;
  isBtnDeleteProp?: boolean;
  versionProp?: string;
  durationProp?: string;
  modifiedDateProp?: string;
  modifiedAuthorProp?: string;
}

export default function SyllabusCard({ courseNameProp, activeProp, isBtnDeleteProp, versionProp, durationProp, modifiedDateProp, modifiedAuthorProp  }: SyllabusCardProps) {
  return (
    <PrimeReactProvider>
      <div className={styles.container}>
        <div className={styles.cardContent}>
          <div className={styles.rightSide} style={{ opacity: activeProp === "Inactive" ? 0.7 : 1 }}>
            <div className={styles.group}>
              <h5>
                <span className={styles.courseName}>
                  {courseNameProp || "Linux"}
                </span>
                <Tag value={activeProp || "Active"} rounded />
              </h5>
              {isBtnDeleteProp &&
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM13.59 5L10 8.59L6.41 5L5 6.41L8.59 10L5 13.59L6.41 15L10 11.41L13.59 15L15 13.59L11.41 10L15 6.41L13.59 5Z" fill="#2D3748" />
                </svg>
              }
            </div>

            <div className={styles.courseInfo}>
              <span>
                {versionProp || 'LIN v2.0'}
              </span>
              <span>&nbsp; | &nbsp;</span>
              <span>
                {durationProp || '4 days (12 hours)' }
              </span>
              <span>&nbsp; | &nbsp;</span>
              <span>
                Modified on
                {modifiedDateProp  || ' 23/07/2022 '}
                by {modifiedAuthorProp || 'Johny Deep'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </PrimeReactProvider>
  )
}
