import { Accordion, AccordionTab } from 'primereact/accordion'
import styles from './Template.module.css'
import 'primeicons/primeicons.css'
// import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'

import { PrimeReactProvider } from 'primereact/api'
import { Action } from '../../../../../assets/svg'
import type React from 'react'

interface Props {
  icon: React.ReactNode
  header: string
  subheader?: string | React.ReactNode
  children: React.ReactNode
  disabled?: boolean
  isShow?: number
}

export default function Template({
  icon,
  header,
  subheader,
  children,
  disabled,
  isShow = 0,
}: Props) {
  return (
    <PrimeReactProvider>
      <div className={styles.card}>
        <Accordion
          activeIndex={isShow}
          className={styles.accordionWrapper}
          expandIcon={
            <div data-pc-section="headericon">
              <Action.ArrowDropDownIcon color="white" />
            </div>
          }
          collapseIcon={
            <div data-pc-section="headericon">
              <Action.ArrowDropDownIcon color="white" />
            </div>
          }
        >
          <AccordionTab
            header={
              <div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {icon} {header}
                </div>
                <div className={styles.subheader}>{subheader}</div>
              </div>
            }
            className={styles.accordionContent}
            disabled={disabled}
          >
            {children}
          </AccordionTab>
        </Accordion>
      </div>
    </PrimeReactProvider>
  )
}
