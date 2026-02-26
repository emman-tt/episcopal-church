import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
import LenisProvider from './components/LenisProvider'
const Aboutpage = lazy(() => import('./Pages/Aboutpage'))
const Versespage = lazy(() => import('./Pages/Versespage'))
const Artpage = lazy(() => import('./Pages/Artpage'))
const Homepage = lazy(() => import('./Pages/Homepage'))
import { NavigationProvider } from './App/context/navigation'
import Loader from './components/Loader'

function App () {
  return (
    <LenisProvider>
      <BrowserRouter>
        <NavigationProvider>
          <Suspense
            fallback={
              <section>
                <Loader />
              </section>
            }
          >
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/verses' element={<Versespage />} />
              <Route path='/about' element={<Aboutpage />} />
              <Route path='/arts' element={<Artpage />} />
            </Routes>
          </Suspense>
        </NavigationProvider>
      </BrowserRouter>
    </LenisProvider>
  )
}

export default App
