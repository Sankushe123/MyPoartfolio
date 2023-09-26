import React from 'react'
import './Footer.css'
import instagram from './../../assets/instagram.png'
import github from './../../assets/github.png'
import linkedin from './../../assets/linkedin.png'
import whatsapp from './../../assets/whatsapp.png'
import './../../Responsive.css'
const Footer = () => {
  return (
    <div className='footer'>
        
        <div className="footercont align-middle">
            <div className="ic flex ml-6">
                <a href="#"><img src={linkedin} alt="linkedin" className='w-8 m-1'/></a>
                <a href="#"><img src={github} alt="github" className='w-8 m-1'/></a>
                <a href="#"><img src={whatsapp} alt="whatsapp" className='w-8 m-1'/></a>
                <a href="#"><img src={instagram} alt="insta" className='w-8 m-1'/></a>
            </div>
            <h3>© 2023 Created by shubham </h3>
            <i class="fi fi-rs-house-chimney"></i>
        </div>
        
    </div>
  )
}

export default Footer