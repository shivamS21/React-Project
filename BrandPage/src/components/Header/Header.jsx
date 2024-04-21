import React from 'react'

function Header() {
  return (
    <nav className='container'>
        <div className="logo"> 
            <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
            <li href="#">MENU</li>
            <li href="#">LOCATION</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTACT</li>
            
        </ul>
        <button className="login-button">Login</button>

      </nav>
  )
}

export default Header