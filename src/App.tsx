import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Registration } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<>HOME</>} />
        <Route path="/profile" element={<>PERFIL</>} />
        <Route path="/leads" element={<>LEADS</>} />
      </Routes>
    </Router>
  )
}

export default App
