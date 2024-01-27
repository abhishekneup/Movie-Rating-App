import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css'

function App() {


  return (
    <div>

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<h1>HOME</h1>}></Route>
        <Route path="/auth" element={<h1>AUTH</h1>}></Route>
        <Route path="/rated" element={<h1>RATED</h1>}></Route>
      </Routes>
    </Router>

    </div>
  )
}

export default App
