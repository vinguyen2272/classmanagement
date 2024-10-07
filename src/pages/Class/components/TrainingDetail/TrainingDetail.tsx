import React, { useState } from 'react'
import styles from './TrainingDetail.module.css'

import { TabPanel, TabView } from 'primereact/tabview'
import { Card } from 'primereact/card'

import SyllabusCardWithAvatar from '../../../../components/SyllabusCardWithAvatar/SyllabusCardWithAvatar'
import { PrimeReactProvider } from 'primereact/api'

interface TrainingDetailProps {
  programNameProp?: string
  programDurationProp?: string
  programModifiedDateProp?: string
  programModifiedAuthorProp?: string
  programIsBtnEditProp?: boolean
  syllabusData: {
    avatar1Prop?: string
    avatar2Prop?: string
    avatar3Prop?: string
    courseNameProp?: string
    activeProp?: string
    isBtnDeleteProp?: boolean
    versionProp?: string
    durationProp?: string
    modifiedDateProp?: string
    modifiedAuthorProp?: string
  }[]
}

export default function TrainingDetail({
  programNameProp = 'DevOps Foundation',
  programDurationProp,
  programModifiedDateProp,
  programModifiedAuthorProp,
  programIsBtnEditProp,
  syllabusData,
}: TrainingDetailProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleTabChange = (e: any) => {
    setActiveIndex(e.index)
  }

  return (
    <PrimeReactProvider>
      <div className={styles.container}>
        <TabView onTabChange={handleTabChange}>
          <TabPanel
            header="Training Program"
            headerClassName={activeIndex !== 0 ? styles.inactive : ''}
          >
            <Card
              // title={programNameProp || "DevOps Foundation"}
              className={styles.devops}
            >
              <div className={styles.title}>
                <p>{programNameProp}</p>
                {programIsBtnEditProp && (
                  <svg
                    width="44"
                    height="30"
                    viewBox="0 0 44 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="30" rx="10" fill="#F1F1F1" />
                    <g clipPath="url(#clip0_68_9518)">
                      <path
                        d="M13 20.25V24H16.75L27.81 12.94L24.06 9.19L13 20.25ZM15.92 22H15V21.08L24.06 12.02L24.98 12.94L15.92 22ZM30.71 8.63L28.37 6.29C28.17 6.09 27.92 6 27.66 6C27.4 6 27.15 6.1 26.96 6.29L25.13 8.12L28.88 11.87L30.71 10.04C31.1 9.65 31.1 9.02 30.71 8.63Z"
                        fill="#285D9A"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_68_9518">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(10 3)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>

              <div className={styles.detail}>
                <span>{programDurationProp || '31 days (97 hours)'}</span>
                <span>&nbsp; | &nbsp;</span>
                <span>
                  Modified on {programModifiedDateProp || '23/07/2022'} by{' '}
                  <b>{programModifiedAuthorProp || 'Warrior Tran'}</b>
                </span>
              </div>
            </Card>

            <div className={styles.listCourse}>
              {syllabusData.map((syllabus, index) => (
                <SyllabusCardWithAvatar key={index} {...syllabus} />
              ))}
            </div>

            <div className={styles.bottomDevops}></div>
          </TabPanel>

          <TabPanel
            header="Attendee list"
            headerClassName={activeIndex !== 1 ? styles.inactive : ''}
          ></TabPanel>
          <TabPanel
            header="Budget"
            headerClassName={activeIndex !== 2 ? styles.inactive : ''}
          ></TabPanel>
          <TabPanel
            header="Others"
            headerClassName={activeIndex !== 3 ? styles.inactive : ''}
          ></TabPanel>
        </TabView>
      </div>
    </PrimeReactProvider>
  )
}
