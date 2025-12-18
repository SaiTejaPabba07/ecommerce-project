import { Route, Routes } from 'react-router'
import { HomePage } from './Pages/HomePage'
import './App.css'

function App() {

  return (
    <Routes>
        <Route index element={<HomePage />}/>
        <Route path="/checkout" element={<p>Checkout Page</p>}/>

    </Routes>
  )
}

export default App
