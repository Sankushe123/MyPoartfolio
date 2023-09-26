import React,{useEffect} from 'react'
import './Ctcard.css'
import AOS from 'aos'
import microsoft1 from './../../assets/mcertification.png'
const Ctcard = () => {
    useEffect(()=>{
        AOS.init({duration:1000});
      })
    const certifications = [
        {image:microsoft1,name:'Azure Fundamentels (AZ-900)',Org:'Microsoft',desc:'The Azure Fundamentals AZ-900 certification equipped me with essential skills in cloud computing, including understanding Azure services, deployment models, and basic cloud concepts. I gained proficiency in navigating the Azure portal, managing resources, and comprehending Azure pricing and SLA. This certification laid a strong foundation for cloud proficiency and Azure usage.'},
   ]
  return (
    <div>
        
        <div className="certi">
            {
                certifications.map((item)=>{
                    return(
                        <div className='CertiCard mb-10'>
                            <div className="leftct" data-aos="fade-right">
                                <img src={item.image} alt="img" className='ctimg w-1/4'/>
                            </div>
                            <div className="rightct mt-7" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                                <h2>{item.name}</h2>
                                <h3>Organization : {item.Org}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Ctcard