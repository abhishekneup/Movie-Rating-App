import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css'
import Auth from './pages/auth'
import { Home } from './pages/home'

function App() {


  return (
    <div>

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/auth" element={<Auth></Auth>}></Route>
        <Route path="/rated" element={<h1>RATED</h1>}></Route>
      </Routes>
    </Router>

    </div>
  )
}

export default App
