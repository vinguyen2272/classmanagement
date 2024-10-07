import { Accordion, AccordionTab } from 'primereact/accordion'
import styles from './EditTrainingAccordion.module.css'
import {
  Action,
  Delivery,
  NavigationMenu,
  Navigator,
} from '../../../assets/svg'
import { Tag } from 'primereact/tag'
import ButtonContained from '../../../components/Button/ButtonContained'
import avatar_cat from '../../../assets/khang_img/avatar_cat.png'
import avatar from '../../../assets/khang_img/avatar_empty.png'

export default function EditTrainingAccordion() {
  return (
    <div className={styles.listCourse}>
      <h3>Content</h3>

      <Accordion
        expandIcon={
          <div data-pc-section="headericon">
            <Navigator.EastIcon color="black" />
          </div>
        }
        collapseIcon={
          <div data-pc-section="headericon">
            <Navigator.EastIcon color="black" />
          </div>
        }
      >
        <AccordionTab
          header={
            <div className={styles.rightSide}>
              <div className={styles.title}>
                <h5>
                  <span className={styles.courseName}>{'Linux'}</span>
                  <Tag value="Active" rounded />
                </h5>
              </div>

              <div className={styles.courseInfo}>
                <span>LIN v2.0</span>
                <span>&nbsp; | &nbsp;</span>
                <span>{'4 days (12 hours)'}</span>
                <span>&nbsp; | &nbsp;</span>
                <span>
                  on {' 23/07/2022 '} by {'Johny Deep'}
                </span>
              </div>
            </div>
          }
        >
          <div className={styles.course}>
            <Accordion
              expandIcon={<div data-pc-section="headericon"></div>}
              collapseIcon={<div data-pc-section="headericon"></div>}
            >
              <AccordionTab header="Day1">
                <div className={styles.unit}>
                  <Accordion
                    expandIcon={
                      <div data-pc-section="headericon">
                        <Action.ArrowLeftIcon color="black" />
                      </div>
                    }
                    collapseIcon={
                      <div data-pc-section="headericon">
                        <Action.ArrowDropDownIcon color="black" />
                      </div>
                    }
                  >
                    <AccordionTab header="Unit 1">
                      <div className={styles.unitItem}>
                        <div className={styles.unitItemLeft}>
                          <div className={styles.image}>
                            <img src={avatar_cat} alt="" />
                          </div>
                          <span>Ftown3</span>
                        </div>
                        <div className={styles.unitItemRight}>
                          <div className={styles.item}>
                            <div>.NET Introduction</div>
                            <div>
                              <ButtonContained>H4SD</ButtonContained>
                              <span>30mins</span>
                              <ButtonContained color="orange">
                                Online
                              </ButtonContained>
                              <Delivery.ConceptIcon color="black" />
                              <NavigationMenu.FolderIcon color="black" />
                            </div>
                          </div>
                          <div className={styles.item}>
                            <div>Declaration & Assignment</div>
                            <div>
                              <ButtonContained>H4SD</ButtonContained>
                              <span>30mins</span>
                              <ButtonContained>Offline</ButtonContained>
                              <Delivery.ConceptIcon color="black" />
                              <NavigationMenu.FolderIcon color="black" />
                            </div>
                          </div>
                          <div className={styles.item}>
                            <div>Practice Time: Assignment/Mentoring</div>
                            <div>
                              <ButtonContained>H4SD</ButtonContained>
                              <span>30mins</span>
                              <ButtonContained>Offline</ButtonContained>
                              <Delivery.ConceptIcon color="black" />
                              <Delivery.GuideIcon color="black" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionTab>
                    <AccordionTab header="Unit 2">
                      <div className={styles.unitItem}>
                        <div className={styles.unitItemLeft}>
                          <div className={styles.image}>
                            <img src={avatar_cat} alt="" />
                          </div>
                          <span>Ftown3</span>
                        </div>
                        <div className={styles.unitItemRight}>
                          <div className={styles.item}>
                            <div>Operations</div>
                            <div>
                              <ButtonContained>H4SD</ButtonContained>
                              <span>30mins</span>
                              <ButtonContained color="orange">
                                Online
                              </ButtonContained>
                              <Delivery.ConceptIcon color="black" />
                              <NavigationMenu.FolderIcon color="black" />
                            </div>
                          </div>
                          <div className={styles.item}>
                            <div>Comparation</div>
                            <div>
                              <ButtonContained>H4SD</ButtonContained>
                              <span>30mins</span>
                              <ButtonContained>Offline</ButtonContained>
                              <Delivery.ConceptIcon color="black" />
                              <NavigationMenu.FolderIcon color="black" />
                            </div>
                          </div>
                          <div className={styles.item}>
                            <div>Logical operators</div>
                            <div>
                              <ButtonContained>H4SD</ButtonContained>
                              <span>30mins</span>
                              <ButtonContained>Offline</ButtonContained>
                              <Delivery.GuideIcon color="black" />
                              <NavigationMenu.FolderIcon color="black" />
                            </div>
                          </div>
                          <div className={styles.item}>
                            <div>Practice Time: Assignment/Mentoring</div>
                            <div>
                              <ButtonContained>H4SD</ButtonContained>
                              <span>30mins</span>
                              <ButtonContained color="orange">
                                Online
                              </ButtonContained>
                              <Delivery.ConceptIcon color="black" />
                              <NavigationMenu.FolderIcon color="black" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionTab>
                  </Accordion>
                </div>
              </AccordionTab>
              <AccordionTab header="Day2">
                <div className={styles.unit}>
                  <Accordion
                    expandIcon={
                      <div data-pc-section="headericon">
                        <Action.ArrowLeftIcon color="black" />
                      </div>
                    }
                    collapseIcon={
                      <div data-pc-section="headericon">
                        <Action.ArrowDropDownIcon color="black" />
                      </div>
                    }
                  >
                    <AccordionTab header="Unit 3">
                      <div className={styles.unitItem}>
                        <div className={styles.unitItemLeft}>
                          <div className={styles.image}>
                            <img src={avatar} alt="" />
                          </div>
                          <ButtonContained>location</ButtonContained>
                        </div>
                        <div className={styles.unitItemRight}>
                          <div className={styles.item}>
                            <div>Operations</div>
                            <div>
                              <ButtonContained>H4SD</ButtonContained>
                              <span>30mins</span>
                              <ButtonContained color="orange">
                                Online
                              </ButtonContained>
                              <Delivery.ConceptIcon color="black" />
                              <NavigationMenu.FolderIcon color="black" />
                            </div>
                          </div>
                          <div className={styles.item}>
                            <div>Comparation</div>
                            <div>
                              <ButtonContained>H4SD</ButtonContained>
                              <span>30mins</span>
                              <ButtonContained>Offline</ButtonContained>
                              <Delivery.ConceptIcon color="black" />
                              <NavigationMenu.FolderIcon color="black" />
                            </div>
                          </div>
                          <div className={styles.item}>
                            <div>Logical operators</div>
                            <div>
                              <ButtonContained>H4SD</ButtonContained>
                              <span>30mins</span>
                              <ButtonContained>Offline</ButtonContained>
                              <Delivery.GuideIcon color="black" />
                              <NavigationMenu.FolderIcon color="black" />
                            </div>
                          </div>
                          <div className={styles.item}>
                            <div>Practice Time: Assignment/Mentoring</div>
                            <div>
                              <ButtonContained>H4SD</ButtonContained>
                              <span>30mins</span>
                              <ButtonContained color="orange">
                                Online
                              </ButtonContained>
                              <Delivery.ConceptIcon color="black" />
                              <NavigationMenu.FolderIcon color="black" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionTab>
                  </Accordion>
                </div>
              </AccordionTab>
            </Accordion>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  )
}
