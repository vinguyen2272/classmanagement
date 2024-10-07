import styles from './Header.module.css'
import { PrimeReactProvider } from 'primereact/api'
import { Menubar } from 'primereact/menubar'
import { NavLink } from 'react-router-dom'
import { Button } from 'primereact/button'
import logoPng from '../../../../assets/DucNH83/logoVi.png'
import logo2Png from '../../../../assets/DucNH83/logo-2.png'

function Header() {
  const start: JSX.Element = (
    <NavLink to="/">
      <img
      width={200}
        style={{ padding: '10px' }}
        className={styles.mainLogo}
        src={logoPng}
        alt=""
      />
    </NavLink>
  )

  const end: JSX.Element = (
    <div className={styles.endContainer}>
      <NavLink to="/">
        <div id={styles['endLogoContainer']}>
          <img className={styles.uniGayLogo} src={logo2Png} alt="" />
          <span>uniGate</span>
        </div>
      </NavLink>
      <div className={styles.accountContainer}>
        <div className={styles.avatarWrapper}>
          <img
            src="https://s3-alpha-sig.figma.com/img/d1b4/292d/1d049740ed416330e848f7addcf002e1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PinITVVOerAVOdv~6DOLu1lG5GToz3zqJe~GHd9eSWVb8XEIuuMH8U0RVWRMAiLz3OLJFpklPQp9pzOXbY0OaJh8Gr7hFMv306ODEbWJsKEHf3rJPEgOh5JjpAa-FKRgeFRNiuP10ke7yZYJ~uZmQoVzMFj6bkQZ~fnJGJQ38w~jw2ikhEyEPd2dZXKr0nQ9phFiEgVDgHZknwSbhJSvAXHFM4-T6FhLnRJi5wQsxLMsbfP-yJW6WtXS~JIYUulOjGI3R0Ml-yO505tKlf1lJM-4a97jsgM~XLsetSXJbqsBC7cWgeo65ugPuOGn3PO8KaHowaXtk86I6ZyqsLMf3A__"
            alt=""
          />
        </div>
        <div className={styles.namePlaceholder}>
          <p style={{ color: 'white', margin: '0', fontWeight: '600' }}>
            Warrior Tran
          </p>
          <Button
            style={{ padding: '0', textAlign: 'left', color: 'white' }}
            link
            label="Log out"
          ></Button>
        </div>
      </div>
    </div>
  )
  return (
    <PrimeReactProvider>
      <header className={styles.container}>
        <Menubar
          style={{width:"100%", boxSizing:"border-box", backgroundColor: 'rgb(45, 55, 72)' }}
          start={start}
          end={end}
          model={undefined}
        />
   
      </header>
    </PrimeReactProvider>
  )
}

export default Header
