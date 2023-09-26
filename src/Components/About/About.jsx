import React, {useEffect, useState } from 'react'
import './About.css'
import Skillcard from './Skillcard';
import Educationcard from './Educationcard';
import Ctcard from './Ctcard';
import AOS from 'aos'
import './../../Responsive.css'
const About = () => {
  useEffect(()=>{
    AOS.init({duration:1000});
  })
  const [showslide,setShowslide] = useState(1);
  
  return (
    <div className='about' id='about'>
      <div className="aboutCont">
        <div data-aos="fade-right"><h2><span className='spchar'>A</span>bout</h2></div>
        <div className='note'>
          <h3 >Skill - Education - Achievments</h3>
        </div>
        <Skillcard/>
        <Educationcard/>
        <Ctcard/>
      </div>
    </div>
  )
}

export default About