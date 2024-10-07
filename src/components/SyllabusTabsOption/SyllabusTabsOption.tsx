import { useState } from 'react'
import styles from './SyllabusTabsOption.module.css'
import { TabPanel, TabView } from 'primereact/tabview'
import { PrimeReactProvider } from 'primereact/api'

interface SyllabusTabsOptionProps {
  tabsName: string[]
  tabsElement: React.ReactElement[]
}

export default function SyllabusTabsOption({
  tabsName,
  tabsElement,
}: SyllabusTabsOptionProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleTabChange = (e: any) => {
    setActiveIndex(e.index)
  }

  return (
    <PrimeReactProvider>
      <div className={styles.container}>
        <TabView activeIndex={activeIndex} onTabChange={handleTabChange}>
          {tabsName.map((tabName, index) => (
            <TabPanel
              key={index}
              header={tabName || 'General'}
              headerClassName={activeIndex !== index ? styles.inactive : ''}
            >
              {tabsElement[activeIndex]}
            </TabPanel>
          ))}
        </TabView>
      </div>
    </PrimeReactProvider>
  )
}
