import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import './App.css'


const Home = () => <h1 className='text-2xl font-bold'>Home</h1>
const Settings = () => <h1 className='text-2xl font-bold'>Settings</h1>
const About = () => <h1 className='text-2xl font-bold'>About</h1>


function App() {

  return (
    <div className='xl:container xl:mx-auto mt-8 px-4'>

      <Router>
        <header className='flex items-center justify-between'>
          <Link to='/'>Logo</Link>
          <nav>
            <ul className='flex gap-3'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/settings'>Settings</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </nav>
        </header>
        <main className='pt-10'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
