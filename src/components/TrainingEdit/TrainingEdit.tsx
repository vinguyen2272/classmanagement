import React, { useState } from 'react'
import styles from './TrainingEdit.module.css'

import { TabPanel, TabView } from 'primereact/tabview'
import { Card } from 'primereact/card'
import { PrimeReactProvider } from 'primereact/api'
import icon_find from '../../assets/khang_img/icon_find.png'
import { AutoComplete } from 'primereact/autocomplete'

interface Item {
  label: string
  value: string
  duration: string
  modifiedDate: string
  modifiedAuthor: string
}

export default function TrainingEdit({ setItem }: { setItem?: any }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleTabChange = (e: any) => {
    setActiveIndex(e.index)
  }

  const [filteredItems, setFilteredItems] = useState<Item[]>([])
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  const items: Item[] = [
    {
      label: 'DevOps Foundation',
      value: 'DevOps Foundation',
      duration: '31 days (97hrs)',
      modifiedDate: '23/07/2022',
      modifiedAuthor: 'Warrior Tran',
    },
    {
      label: 'DevOps Beginer',
      value: 'DevOps Beginer',
      duration: '20 days (69hrs)',
      modifiedDate: '31/01/2022',
      modifiedAuthor: 'King Jeans',
    },
    {
      label: 'DevOps Advanced',
      value: 'DevOps Advanced',
      duration: '41 days (109hrs)',
      modifiedDate: '01/01/2022',
      modifiedAuthor: 'Ba Chu Heo',
    },
  ]

  const searchItems = (event: { query: string }) => {
    setFilteredItems(
      items.filter(item =>
        item.label.toLowerCase().includes(event.query.toLowerCase())
      )
    )
  }

  const itemTemplate = (item: Item) => {
    return (
      <div className={styles.suggest}>
        <strong>{item.label}</strong>
        <div className={styles.infor}>
          <p>{item.duration}</p>
          <div>
            <span>{item.modifiedDate}</span>
            <span> by </span>
            <strong>{item.modifiedAuthor}</strong>
          </div>
        </div>
      </div>
    )
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
              // title="DevOps Foundation"
              className={styles.devops}
            >
              <div className={styles.trainingGroup}>
                <p>Training Program name</p>
                <div className={styles.inputContainer}>
                  <img
                    src={icon_find}
                    alt="icon"
                    className={styles.inputIcon}
                  />
                  <AutoComplete
                    value={selectedItem}
                    suggestions={filteredItems}
                    completeMethod={searchItems}
                    field="label"
                    itemTemplate={itemTemplate}
                    onChange={(e: any) => setSelectedItem(e.value)}
                    onSelect={(e: any) => setItem(e.value)}
                    placeholder="Search for a name"
                  />
                </div>
              </div>
            </Card>

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
