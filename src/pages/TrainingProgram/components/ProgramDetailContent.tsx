import { Accordion, AccordionTab } from 'primereact/accordion'
import type React from 'react'
import TagContained from '../../../components/Tag/TagContained'
import styles from './ProgramDetailContent.module.css'
import TagOutlined from '../../../components/Tag/TagOutlined'
import type { CourseModel } from '../../../context/Interface/CourseModel'
import type { CourseSchedule } from '../../../context/Interface/CourseSchedule'

interface ProgramDetailContentProps {
  course: CourseModel
  calculateDuration: (start: string, end: string) => React.ReactNode
  formatDate: (date: string) => React.ReactNode
  admin: string | undefined
  courseSchedule: CourseSchedule[]
}

export default function ProgramDetailContent({
  course,
  calculateDuration,
  formatDate,
  admin,
  courseSchedule,
}: ProgramDetailContentProps) {
  console.log(courseSchedule)
  const Header = (
    <div>
      <div className="flex mb-2 items-center justify-between ">
        <div className="flex  items-center gap-10  ">
          <h4> {course.courseName} </h4>

          <TagContained value={course.status} />
        </div>

        <div>
          <TagContained icon="pi pi-arrow-right" />
        </div>
      </div>

      <div className="flex gap-4  text-sm  ">
        <p> {course.courseAlias} </p>

        <p>|</p>

        <p>
          {calculateDuration(course.startTime, course.endTime)} days (12 hours)
        </p>

        <p>|</p>

        <p>
          Modified on {formatDate(course.creationDate)} by {admin}{' '}
        </p>
      </div>
    </div>
  )

  return (
    <div className={`${styles.content} px-[30px]`}>
      <h3 className=" font-bold text-[24px] ">Content</h3>

      {courseSchedule &&
        courseSchedule.map((course, index) => {
          return (
            <Accordion
              className="shadow-xl w-[100%] px-[20px] py-[14px] rounded-sm "
              key={index}
            >
              <AccordionTab header={Header}>
                <Accordion className="mb-0.5 mt-2 ">
                  {course.schedule.map(day => (
                    <AccordionTab
                      header={<p className="text-white  "> {day.day} </p>}
                      className="bg-primary shadow-lg mb-2 overflow-hidden  "
                      key={day.day}
                    >
                      <Accordion className="mb-0.5 ">
                        {day.units.map((unit, index) => {
                          return (
                            <AccordionTab
                              header={
                                <div className="">
                                  <div className="flex  gap-10 ">
                                    <p className=" text-[18px] font-bold ">
                                      Unit {index + 1}
                                    </p>

                                    <div>
                                      <h5>
                                        <p className="font-bold mb-2">
                                          {unit.unitName}
                                        </p>

                                        <p>6 hrs</p>
                                      </h5>
                                    </div>

                                    <div className="ml-auto">
                                      <i className="pi pi-chevron-circle-down"></i>
                                    </div>
                                  </div>
                                </div>
                              }
                              key={unit.unitName}
                              className="border-b-[1px]"
                            >
                              <div className="flex gap-16  ">
                                <p className=" invisible ">Test</p>

                                <div className="flex-1">
                                  {unit.miniUnits.map(miniUnit => (
                                    <div className=" bg-gray px-[20px] py-2 rounded-[10px] mb-1">
                                      <div className="flex items-center">
                                        <div className="flex-1 ">
                                          <h6 className="font-bold">
                                            {miniUnit.miniUnitName}
                                          </h6>
                                        </div>

                                        <div className="flex gap-10 items-center ">
                                          <TagContained value="K65D" />

                                          <p>10 mins</p>

                                          {miniUnit.isOnline ? (
                                            <TagOutlined value="online" />
                                          ) : (
                                            <TagContained value="offline" />
                                          )}

                                          <i className="pi pi-user"></i>

                                          <i className="pi pi-folder"></i>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </AccordionTab>
                          )
                        })}
                      </Accordion>
                    </AccordionTab>
                  ))}
                </Accordion>
              </AccordionTab>
            </Accordion>
          )
        })}

      {!courseSchedule && <p>Not Data Found</p>}
    </div>
  )
}
