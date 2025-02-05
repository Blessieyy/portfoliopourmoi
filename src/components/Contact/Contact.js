import '../../components/Contact/Contact.css'
import React from 'react'
import email from '../../assets/contact/emailIcon.png'
import github from '../../assets/contact/githubIcon.png'
import linkedin from '../../assets/contact/linkedinIcon.png'



function Contact() {
  return (
    <footer id='contact' className='contact-container'>
        <div className='contact-text'>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className='contact-links'>
            <li className='contact-link'>
                <img src={email} alt='email'/>   
                <a href='mailto:mogashoablessing676@gmail.com'>mogashoablessing676@gmail.com</a>
            </li>            
            <li className='contact-link'>
                <img src={linkedin} alt='email'/>   
                <a href='https://www.linkedin.com/in/tebatso-blessie-mogashoa-b4b93a22b/'>linked.com</a>
            </li>            
            <li className='contact-link'>
                <img src={github} alt='email'/>   
                <a href='https://github.com/Blessieyy'>github.com</a>
            </li>            
        </ul>
    </footer>
  )
}

export default Contact