import React from 'react'
import { SiLinktree } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

function Contact() {
  return (
    <div className='contact-me'>
    <h1>Contact Me</h1>

    <div className='icons'>
    
    <a href='https://linktr.ee/tejiendoredes.psintegral' target="_blank"><SiLinktree /></a>
    
    <a href='https://www.instagram.com/tejiendoredes.psintegral/?hl=en' target="_blank"><BsInstagram /></a>
    
    <a href='mailto:tejiendoredes.psintegral@gmail.com' target="_blank"><AiOutlineMail /></a>
    
    <a href='https://www.linkedin.com/in/maria-belen-dominguez-vazquez/' target="_blank"><FaLinkedin /></a>
    </div>

    </div>
  )
}

export default Contact