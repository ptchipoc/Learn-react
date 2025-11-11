import { HomePage } from './pages/HomePage'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<div>Testing checout element</div>}  />
    </Routes>
  )
}

export default App
