import React from 'react'
import { SiLinktree } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

function Contact() {
  return (
    
    <div className='contact-me'>
    <h1>Contact Me</h1>

<form target='_blank'
action='https://formsubmit.co/your@email.com'
method='POST'>
<div className='form-group'>
<div className='form-row'>
  <div className='col'>
    <input type='text' name='name' className='form-control' placeholder='Full Name' required />
  </div>
  <div className='col'>
  <input type='email' name='email' className='form-control' placeholder='Email Address' required />
  </div>
  </div>
</div>
<div className='form-group'>
  <textarea placeholder='Tu Mensaje' className='form-control' name='mensaje' rows={10} required></textarea>
</div>
<button type='submit' className='submit-button'>Enviar</button>

</form>






    <div className='icons'>
    
    <a href='https://linktr.ee/tejiendoredes.psintegral' target="_blank" className='icon'><SiLinktree /></a>
    
    <a href='https://www.instagram.com/tejiendoredes.psintegral/?hl=en' target="_blank" className='icon'><BsInstagram /></a>
    
    <a href='mailto:tejiendoredes.psintegral@gmail.com' target="_blank" className='icon'><AiOutlineMail /></a>
    
    <a href='https://www.linkedin.com/in/maria-belen-dominguez-vazquez/' target="_blank" className='icon'><FaLinkedin /></a>
    </div>

    </div>

    
  )
}

export default Contact