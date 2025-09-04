import './App.css'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Project from './components/Project'
import Agence from './components/Agence'
import Navbar from './components/Navbar'
import FullScreenNav from './components/FullScreenNav'
// import Stairs from './components/Stairs'

function App() {

  return (
    <div className='text-white '>
    <FullScreenNav></FullScreenNav>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/agence" element={<Agence />} />
         <Route path="/menu" element={<FullScreenNav />} />  
      </Routes>
    </div>
  )
}

export default App
