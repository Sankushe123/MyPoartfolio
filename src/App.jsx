import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'

import Home from './Components/Home/Home'
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Header/Nav'
import Contactbox from './Components/Contact/Contactbox'
import './Responsive.css'
const App = () => {
  return (
    <div className='app flex flex-col'>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/contact' element={<Contactbox/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App