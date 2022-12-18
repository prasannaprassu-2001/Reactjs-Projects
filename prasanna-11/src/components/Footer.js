import './FooterStyles.css'

import React from 'react'
import {FaHome,
        FaPhone,
        FaMailBulk, 
        FaFacebook, 
        FaTwitter, 
        FaLinkedin} from 'react-icons/fa'
 const Footer = () =>{
return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'> 
            <div className='location'>
                <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                <div>
                    <p>123 Housing Society.</p>
                    <p>Bengaluru.</p>
                </div>
                </div>
                <div className='phone'>
                   <h4> <FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/>91-9490598882</h4>
                </div>
                <div className='email'>
                   <h4> <FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/>Info@gmail.com</h4>
                </div>
                </div>
                <div className='right'>
                 <h4>About the Company</h4>
                 <p>This is me Reddeppa,CEO & Founder of Tech.I enjoy discussing new projects and design challenges.</p>
                 <div className='social'>
                    <FaFacebook size={20} style={{color:'#fff', marginRight:'1rem'}}/>
                 
                    <FaTwitter size={20} style={{color:'#fff', marginRight:'1rem'}}/>
                
                    <FaLinkedin size={20} style={{color:'#fff', marginRight:'1rem'}}/>
                 </div>

               
            </div>
        </div>
    </div>
)
 }
 export default Footer