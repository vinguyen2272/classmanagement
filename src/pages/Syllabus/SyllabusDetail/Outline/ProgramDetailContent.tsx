import { Accordion, AccordionTab } from 'primereact/accordion';
import TagContained from '../../../../components/Tag/TagContained';
import styles from './ProgramDetailContent.module.css';
import TagOutlined from '../../../../components/Tag/TagOutlined';
import type { Schedule } from '../../../../context/Interface/CourseSchedule';

interface ProgramDetailContentProps {
  schedule: Schedule[];
}

export default function ProgramDetailContent({ schedule }: ProgramDetailContentProps) {
  return (
    <div className={`${styles.content} px-[30px]`}>
      {schedule.length > 0 ? (
        schedule.map(day => (
          <Accordion key={day.day}>
            <AccordionTab header={<p className="text-white">{day.day}</p>} className="bg-primary shadow-lg mb-2 overflow-hidden">
              <Accordion className="mb-0.5">
                {day.units.map((unit, index) => (
                  <AccordionTab
                    header={
                      <div className="flex gap-10">
                        <p className="text-[18px] font-bold">Unit {index + 1}</p>
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
                      <p className="invisible">Test</p>
                      <div className="flex-1">
                        {unit.miniUnits.map((miniUnit, index) => (
                          <div key={index} className="bg-gray px-[20px] py-2 rounded-[10px] mb-1">
                            <div className="flex items-center">
                              <div className="flex-1">
                                <h6 className="font-bold">{miniUnit.miniUnitName}</h6>
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
                      </div>
                    </div>
                  </AccordionTab>
                ))}
              </Accordion>
            </AccordionTab>
          </Accordion>
        ))
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  );
}
