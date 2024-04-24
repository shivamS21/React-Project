import React from 'react';
import './ContactHeader.css';
import Form from '../Form/Form';
const ContactHeader = () => {
  return (
    <div className='content'>
        <h1>CONTACT US</h1>
        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        <div className='contact'>
            <div className='form'>
                <Form/>
            </div>
            <div className='contact-photo'>
                <img src="/images/service.png" alt="contact-me"/>
            </div>
        </div>
    </div>
  )
}

export default ContactHeader