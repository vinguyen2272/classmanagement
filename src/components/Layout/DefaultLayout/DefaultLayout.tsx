import Header from './Header/Header'
import Sidebar from './Sidebar/SidebarMenu'
import Footer from './Footer/Footer'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'

function DefaultLayout({ children }: { children: React.ReactNode }) {



  return (
    <div className="app-container">
      <Header />
    

      <div className={`app-main `}>
        <Sidebar />
        <div
          className={`app-main-container`}
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
