import './App.css'
import { Route, HashRouter  as Router, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from './routes'
import { Fragment, useEffect } from 'react'
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout'

const App = () => {
  useEffect(() => {
    console.log = () => {}
    console.error = () => {}
    console.warn = () => {}
  }, [])
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout =
              route.layout === null ? Fragment : route.layout || DefaultLayout
            const Page = route.component
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
          {privateRoutes.map((route, index) => {
            const Layout =
              route.layout === null ? Fragment : route.layout || DefaultLayout
            const Page = route.component
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
