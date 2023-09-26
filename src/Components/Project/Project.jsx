import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import './Project.css'
import nobroker from './../../assets/nobroker.png'
import cryptoProject from './../../assets/cryptoProject.png'
import {AiOutlineGithub} from 'react-icons/ai'
import '../../Responsive.css'
import AOS from 'aos'
const Project = () => {
  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".tiltcard",{
      max:25,
      speed:400,
      glare:true,
      'max-glare':0.50
    }))
  })

  useEffect(()=>{
    AOS.init({duration:1000});
  })
  const projectdetails = [
    {image:nobroker,heading:"Property Renting Webapp",subh:'MERN Stack Project',gitlink:'#',previewlink:'#',info:'Reactjs, Nodejs, Expressjs, MongoDB, Redux Toolkit, Cloudinary, RestAPI'},
    {image:cryptoProject,heading:"Crypto Currency Analyzer",subh:'React Project',gitlink:'https://github.com/Sankushe123/Crypto-world.git',previewlink:'https://cryptoworld13.netlify.app/',info:'Reactjs, React Hook, Chakra UI, Deployed using netlify, RestAPI'},
   
  ]
  return (
    <div>
        <div className="projectCont ">
            <div className='pb' data-aos="fade-right"><h2><span>P</span>rojects</h2></div>
            <div className="projectbox flex justify-center flex-wrap h-auto">
            {  projectdetails.map((item)=>{
                return(
                <div className="tiltcard relative" 
                >
                  <img src={item.image} alt="nobroker"/>
                  <a href={item.gitlink} className='absolute top-5 right-5 cursor-pointer '><AiOutlineGithub size={'5vh'}/></a>
                  <h2>{item.heading}</h2>
                  <h3>{item.subh}</h3>
                  <p>{item.info}</p>
                  <div className="btn">
                    <a href={item.previewlink}>Preview</a>
                  </div>
                </div>
                )
              })
            }
            </div>
        </div>
    </div>
  )
}

export default Project