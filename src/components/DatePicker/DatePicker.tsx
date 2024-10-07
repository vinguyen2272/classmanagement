import { Calendar } from 'primereact/calendar'
import { TabView, TabPanel } from 'primereact/tabview'

import Style from './date.module.css'

interface CalendarProps {
  value: Date | null
  onChange: (e: any) => void
}

interface SyntheticDateProps {
  value: Date[] | null
  onChange: (dates: Date[]) => void
}

export const DatePicker: React.FC<CalendarProps> = ({ value, onChange }) => {
  return (
    <>
      <Calendar value={value} onChange={onChange} inline />
    </>
  )
}

export const FullWidthDate: React.FC<CalendarProps> = ({ value, onChange }) => {
  return (
    <div className={Style.container}>
      <Calendar
        value={value}
        onChange={onChange}
        inline
        style={{ width: '100%' }}
      />
    </div>
  )
}

export const SyntheticDate: React.FC<SyntheticDateProps> = ({
  value,
  onChange,
}) => {
  const handleDateSelect = (e: any) => {
    const newDates = e.value instanceof Array ? e.value : [e.value]
    onChange(newDates)
    if (e.view === 'year') {
      onChange([newDates[0]])
    } else {
      onChange(newDates)
    }
  }
  return (
    <>
      <TabView className={Style.myTab}>
        <TabPanel header="Day">
          <div className={Style.container}>
            <Calendar
              value={value}
              onChange={handleDateSelect}
              selectionMode="multiple"
              inline
              style={{ width: '100%' }}
            />
          </div>
        </TabPanel>
        <TabPanel header="Week">
          <Calendar
            value={value}
            onChange={handleDateSelect}
            selectionMode="multiple"
            inline
            showWeek
            style={{ width: '100%' }}
          />
        </TabPanel>
        <TabPanel header="Month">
          <Calendar
            value={value}
            onChange={handleDateSelect}
            selectionMode="multiple"
            numberOfMonths={2}
            inline
            style={{ width: '100%' }}
          />
        </TabPanel>
        <TabPanel header="Year">
          <Calendar
            value={value ? value[0] : null}
            onChange={handleDateSelect}
            selectionMode="single"
            view="month"
            inline
            style={{ width: '50%' }}
          />
        </TabPanel>
      </TabView>
    </>
  )
}
