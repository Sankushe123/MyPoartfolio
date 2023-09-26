import React from 'react'
import address from './../../assets/worldwide.gif'
import phone from './../../assets/calling.gif'
import email from './../../assets/message.gif'
import './Continfo.css'
const Continfo = () => {
  return (
    <div className='ci'>
      <div className="leftbox">
        <div className="left flex">
          <img src={address} alt="address" />
          <div className="info">
            <h2>Address</h2>
            <span>Dighi / Pune / Maharashtra</span>
          </div>
        </div>
        <div className="left flex">
          <img src={email} alt="email" />
          <div className="info">
            <h2>Email</h2>
            <span>Shubhamankushe93@gmail.com</span>
          </div>
        </div>
        <div className="left flex">
          <img src={phone} alt="phone" />
          <div className="info">
            <h2>Phone No</h2>
            <span>+91- 8530552942</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Continfo