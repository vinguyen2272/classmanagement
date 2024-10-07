import { Accordion, AccordionTab } from 'primereact/accordion'
import 'primeicons/primeicons.css'
import { Button } from 'primereact/button'
import TagContained from '../../../../components/Tag/TagContained'
import styles from './ProgramDetailContent.module.css'
import TagOutlined from '../../../../components/Tag/TagOutlined'
import type { Schedule } from '../../../../context/Interface/CourseSchedule'

interface ProgramDetailContentProps {
  schedule: Schedule[]
  setSchedule: React.Dispatch<React.SetStateAction<Schedule[]>>
}

export default function ProgramDetailContent({
  schedule,
  setSchedule,
}: ProgramDetailContentProps) {
  const handleRemoveDay = (index: number) => {
    const newSchedule = [...schedule]
    newSchedule.splice(index, 1)
    newSchedule.map((schedule, index) => (schedule.day = `Day ${index + 1}`))
    setSchedule(newSchedule)
  }

  return (
    <div className={`${styles.content}`}>
      {schedule.length > 0 ? (
        schedule.map((day, index) => (
          <Accordion key={day.day}>
            <AccordionTab
              header={
                <p className="text-white flex items-center gap-[10px]">
                  {day.day}
                  <i
                    className="text-[20px] pi pi-minus-circle text-red-500"
                    onClick={() => {
                      handleRemoveDay(index)
                    }}
                  ></i>
                </p>
              }
              className="bg-primary shadow-lg mb-2 overflow-hidden"
            >
              <Accordion className="mb-0.5">
                {day.units.length === 0 ? (
                  <AccordionTab
                    header={
                      <div className="flex gap-10 items-center">
                        <p className="text-[18px] font-bold">Unit 1</p>
                        <div className="flex gap-[20px] items-center">
                          <input
                            type="text"
                            className={styles.unitCreateInput}
                            placeholder="Unit name"
                          />
                          <div
                            className={`${styles.addBtn}  ${styles.addDayBtn}`}
                          >
                            {' '}
                            <Button label="Create" />
                          </div>
                        </div>
                        <div className="ml-auto">
                          <i className="pi pi-chevron-circle-down"></i>
                        </div>
                      </div>
                    }
                    className="border-b-[1px]"
                  ></AccordionTab>
                ) : (
                  day.units.map((unit, index) => (
                    <AccordionTab
                      header={
                        <div className="flex gap-10">
                          <p className="text-[18px] font-bold">
                            Unit {index + 1}
                          </p>
                          <div>
                            <h5>
                              <p className="font-bold mb-2">{unit.unitName}</p>
                              <p>6 hrs</p>
                            </h5>
                          </div>
                          <div className="ml-auto">
                            <i className="pi pi-chevron-circle-down"></i>
                          </div>
                        </div>
                      }
                      key={unit.unitName}
                      className="border-b-[1px]"
                    >
                      <div className="flex gap-16">
                        <div className="flex-1">
                          {unit.miniUnits.map((miniUnit, index) => (
                            <div
                              key={index}
                              className="bg-gray px-[20px] py-2 rounded-[10px] mb-1"
                            >
                              <div className="flex items-center">
                                <div className="flex-1">
                                  <h6 className="font-bold">
                                    {miniUnit.miniUnitName}
                                  </h6>
                                </div>
                                <div className="flex gap-10 items-center">
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
                          <i className="py-2 text-[20px] pi pi-plus-circle text-primary-500"></i>
                        </div>
                      </div>
                      <div className={`${styles.addBtn}  ${styles.addUnitBtn}`}>
                        <Button label="Add unit" icon="pi pi-plus-circle" />
                      </div>
                    </AccordionTab>
                  ))
                )}
              </Accordion>
            </AccordionTab>
          </Accordion>
        ))
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  )
}
