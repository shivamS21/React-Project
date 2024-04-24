import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [name, setName] = useState('shivam');
    const [email, setEmail] = useState('abc@gmail.com');
    const [text, setText] = useState('Happy With my progress');
    const onSubmitForm = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

        console.log({
            name, email, text
        });
    }
  return (
    <div className='contact-form'>
        <div className='contact-button'>
            <button>💬 VIA SUPPORT CHAT</button>
            <button>🤙🏻 VIA CALL</button>
        </div>
        <button className='email'>📩 VIA EMAIL FORM</button>
        <form onSubmit={onSubmitForm}>
            <div className="form-control">
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                /> 
            </div>
            <div className="form-control">
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                /> 
            </div>
            
            <div className="form-control">
                <label htmlFor='text'>Text</label>
                <textarea name='text' rows='7' /> {/* to set the height of the text area */}
            </div>
            <button className='submit-button'>Submit</button>
        </form>
    </div>
  )
}

export default Form