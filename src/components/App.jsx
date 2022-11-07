// import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Teams from './Teams'
import Players from './Players'
import Home from './Home'
import Navbar from './Navbar'

function App() {

  return (
    <Router>
      <Navbar />
      <main className="xl:container xl:mx-auto mt-8 px-4"><Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/teams' element={<Teams />}></Route>
        <Route path='/players' element={<Players />}></Route>
      </Routes></main>

    </Router>
  )
}

export default App
