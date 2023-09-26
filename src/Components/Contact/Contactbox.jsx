import React,{useEffect} from 'react'
import Continfo from './Continfo'
import Contact from './Contact'
import Footer from './../Footer/Footer'
import './Contactbox.css'
import AOS from 'aos'
const Contactbox = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  })
  return (
    <div className='cbox'>
      <div data-aos="fade-down-right" className='cheading'><h2><span>C</span>ontact</h2></div>
      <div className="cinfo flex">
        <Continfo/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contactbox