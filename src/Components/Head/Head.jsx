import React,{useEffect,useRef} from 'react'
import './Head.css'
import gif from '../../assets/Lovepik_com-401373103-programmer-knocking-code-work-icon-free-vector-illustration-mate.png'
import instagram from '../../assets/instagram.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import whatsapp from '../../assets/whatsapp.png'
import AOS from 'aos'
import {Link} from 'react-router-dom'
const Head = () => {
    useEffect(()=>{
        AOS.init({duration:1000});
      })
  return (
    <div className='cont flex' id='home'>
        <div className="left  mt-28">
            <div className="lcont flex">
                <div className="timel flex flex-col ml-28">
                    <div className="tl w-4 h-4 bg-[#8760E3] rounded-full"></div>
                    <div className='line w-1 ml-1.5 sm:h-60 h-40 '></div>
                </div>
                <div className="info" data-aos="fade-down-right">
                    <span className='fsh p-1 w-4 bg-[#4b4a4a] text-[white]'>Fresher</span>
                    <h3 className=''>Hi, I'm <span className='headspan'>Shubham</span></h3>
                    <p className='mt-3 text-[#D1CDE1] text-sm '>I'm a full-stack developer with a passion for crafting innovative web solutions. With expertise in both front-end and back-end technologies.</p>
                    <div className="btns mt-4 ">
                        <button>Download Resume</button>
                        <button>Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="righthead">
            <div className="container" data-aos="fade-left" >
                <img src={gif} alt="gif"/>
            </div>
            <div className="social absolute right-10 bottom-10 " >
                <a href="#"><img src={linkedin} alt="linkedin" className='w-8 m-1'/></a>
                <a href='#'><img src={github} alt="github" className='w-8 m-1'/></a>
                <a href="#"><img src={whatsapp} alt="whatsapp" className='w-8 m-1'/></a>
                <a href="#1"><img src={instagram} alt="insta" className='w-8 m-1'/></a>
            </div>
        </div>
        <div className="qbtnCont relative">
            <div className="qbtn">

            </div>
        </div>
    </div>
  )
}

export default Head