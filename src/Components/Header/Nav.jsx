import React,{useEffect, useState} from 'react'
import logo from '../../assets/web-developer-logo-4.png';
import './Nav.css';
import {FaHome} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaTasks} from 'react-icons/fa'
import {BsTelephoneFill} from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import './../../Responsive.css'
const Nav = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  })
  
  return (
    <div className='nav flex justify-between'>
        <div className="logo w-32 mt-2" data-aos="fade-down">
            <img src={logo} alt="logo" />
        </div>
        <div className="workbtn" data-aos="fade-down">
          <span>Open To Work</span>
        </div>
        <div className="rutelink fixed left-1/2 bottom-10 flex">
          {/* <a><Link to='home' spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu}><FaHome size={'3vh'}/></Link></a>
          <a><Link to='about' spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu}><BsFillPersonFill size={'3vh'}/></Link></a>
          <a><Link to='/project' spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu}><FaTasks size={'3vh'}/></Link></a>
          <a><Link to='/project' spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu}><BsTelephoneFill size={'3vh'}/></Link></a>
          */}
          <Link to="/" ><FaHome size={'3vh'}/></Link> 
          <Link to="/about"><BsFillPersonFill size={'3vh'}/></Link>
          <Link to="/project"><FaTasks size={'3vh'}/></Link>
          <Link to="/contact"><BsTelephoneFill size={'3vh'}/></Link>
        </div>
    </div>
  )
}

export default Nav