import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import './App.css'
import LenisProvider from './components/LenisProvider'
function App () {
  return (
    <LenisProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </LenisProvider>
  )
}

export default App
