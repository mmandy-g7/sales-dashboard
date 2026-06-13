import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Registration } from './pages'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Leads from './pages/Leads'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leads" element={<Leads />} />
      </Routes>
    </Router>
  )
}

export default App
