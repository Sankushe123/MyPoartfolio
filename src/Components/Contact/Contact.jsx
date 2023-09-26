import React,{useEffect,useRef} from 'react'
import './Contact.css'
import AOS from 'aos'
import emailjs from '@emailjs/browser';
import '../../Responsive.css'
const Contact = () => {
  const form = useRef();
  useEffect(()=>{
    AOS.init({duration:1000});
  })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3bqu4pi', 'template_wzkcr2q', form.current, 'y5yhVpAx6ochsa587')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent Sucessfully.')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact'>
        <div className="contactcont">
            
            <div className="projectright" >
              <form ref={form} onSubmit={sendEmail}>
                <h3>Get In Touch</h3>
                <div className="name relative">
                  <input type="text" name="user_name" className='textbox' placeholder='' required autoComplete='off'/>
                  <label for="" className='lable'>Name</label>
                </div>
                <div className="name relative">
                  <input type="email" name="user_email" className='textbox' placeholder='' required autoComplete='off'/>
                  <label for="" className='lable'>Email</label>
                </div>
                <div className="name relative">
                  <textarea name="message" className='textbox' placeholder='' required rows={4}/>
                  <label for="" className='lable'>Message</label>
                </div>
                <div className="btn">
                  <button type="submit"><input type="submit" value="Send" /></button>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact