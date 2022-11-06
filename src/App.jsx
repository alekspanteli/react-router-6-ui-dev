import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import './App.css'


const Home = () => <h1 className='text-2xl font-bold'>Home</h1>
const Settings = () => <h1 className='text-2xl font-bold'>Settings</h1>
const About = () => <h1 className='text-2xl font-bold'>About</h1>


function App() {

  return (
    <div className='xl:container xl:mx-auto px-4'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
