import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import './App.css'
import LenisProvider from './components/LenisProvider'
import Aboutpage from './Pages/Aboutpage'
import Versespage from './Pages/Versespage'
import Artpage from './Pages/Artpage'
import { NavigationProvider } from './App/context/navigation'
function App () {
  return (
    <LenisProvider>
      <BrowserRouter>
        <NavigationProvider>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/verses' element={<Versespage />} />
            <Route path='/about' element={<Aboutpage />} />
            <Route path='/arts' element={<Artpage />} />
          </Routes>
        </NavigationProvider>
      </BrowserRouter>
    </LenisProvider>
  )
}

export default App
