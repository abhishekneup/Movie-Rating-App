import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css'
import Auth from './pages/auth'

function App() {


  return (
    <div>

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<h1>HOME</h1>}></Route>
        <Route path="/auth" element={<Auth></Auth>}></Route>
        <Route path="/rated" element={<h1>RATED</h1>}></Route>
      </Routes>
    </Router>

    </div>
  )
}

export default App
