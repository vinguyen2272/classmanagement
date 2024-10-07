import { useAppSelector } from '../../app/hooks'
import { selectCollapsed } from '../../features/sidebar/sidebarSlice'
import styles from './Home.module.css'

export default function Home() {
  const collapsed = useAppSelector(selectCollapsed)
  return (
    <>
      <div className={`app-header  ${collapsed ? 'collapsed' : ''}`}>
        <div className={styles.header}>
          <h1>Welcome to the Home Page</h1>
        </div>
      </div>
      <div className={`app-content  ${collapsed ? 'collapsed' : ''}`}>
        <div className={styles.content}>
          <p>This is the default Home page.</p>
          <p className={styles.tsa}></p>
        </div>
      </div>
    </>
  )
}
