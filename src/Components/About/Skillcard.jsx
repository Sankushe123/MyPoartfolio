import React,{useEffect} from 'react'
import './Skillcard.css'
import cpp from './../../assets/cpp.png'
import python from './../../assets/python.png'
import react from './../../assets/react.png'
import node from './../../assets/node.png'
import express from './../../assets/express.png'
import mongo from './../../assets/mongo.png'
import tailwindcss from './../../assets/tailwindcss.png'
import bootstrap from './../../assets/bootstrap.png'
import restapi from './../../assets/restapi.png'
import mysql from './../../assets/mysql.png'
import html from './../../assets/html.png'
import css from './../../assets/css.png'
import js from './../../assets/js.png'
import docker from './../../assets/docker.png'
import kubernetes from './../../assets/kubernetes.png'


import AOS from 'aos'
const Skillcard = () => {
    useEffect(()=>{
        AOS.init({duration:1000});
      })
    const skillinfo = [
        {icon:cpp,name:'C++'},
        {icon:python,name:'Python'},
        {icon:html,name:'HTML 5'},
        {icon:css,name:'CSS 3'},
        {icon:js,name:'JavaScript'}, 
        {icon:bootstrap,name:'Bootstrap'},
        {icon:tailwindcss,name:'Tailwindcss'},
        {icon:react,name:'React Js'},
        {icon:node,name:'Node Js'},
        {icon:express,name:'Express Js'},
        {icon:mongo,name:'MongoDB'},
        {icon:mysql,name:'MySQL'},
        {icon:restapi,name:'RastAPI'}, 
        {icon:docker,name:'Docker'},
        {icon:kubernetes,name:'kubernetes'}, 
      ]
  return (
    <div>
        <div className="skillcont">
            {skillinfo.map(item => {
                return (
                    <div className='bx'>
                        <div className='scard'  data-aos="fade-up"
                        data-aos-duration="1000">
                            <div className='imgbox'>
                                <img src={item.icon} alt="icon" />
                            </div>
                            <h4>{item.name}</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skillcard