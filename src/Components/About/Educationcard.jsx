import React,{useEffect} from 'react'
import './Educard.css'
import '../../Responsive.css'
import AOS from 'aos'
const Educationcard = () => {
    useEffect(()=>{
        AOS.init({duration:1000});
      })
  return (
    <div>
        <div className="educont">
            <ul>
                <li data-aos="fade-right">
                    <div className="div">
                        <span className='circle'></span>
                        <div className='sk1 flex justify-between '>
                            <span>SSC - (10th)</span>
                            <h4>2016-2017</h4>
                        </div>
                        <div>
                            <h5>Board - State Board Of Maharashtra.</h5>
                            <h3>School Name - Chhatrapathi Shivaji High School , Dharashive.</h3>
                        </div>
                    </div>
                </li>
                <li data-aos="fade-left">
                    <div>
                        <span className='circle'></span>
                        <div className='sk1 flex justify-between'>
                            <span>HSC - (12th)</span>
                            <h4>2018-2019</h4>
                        </div>
                        <div>
                            <h5>Board - State Board of Maharashtra.</h5>
                            <h3>School Name - Modern College Of Science, Latue.</h3>
                        </div>
                    </div>
                </li>
                <li data-aos="fade-up-right">
                    <div className="div">
                        <span className='circle'>
                        </span>
                        <div className='sk1 flex justify-between'>
                            <span>Under Graduation(BE-CSE)</span>
                            <h4>2019-2023</h4>
                        </div>
                        <div>
                            <h5>Board - Savitribai Phule Pune Univercity</h5>
                            <h3>School Name - Tssm's Bhivarabai Sawant College Of Engineering And Research , Narhe, Pune.</h3>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        

    </div>
  )
}

export default Educationcard