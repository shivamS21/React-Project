import React from 'react';
import './Header.css';


function Header() {
  return (
    <nav className='container'>
        <div>
            <img src='/images/nav.png' alt='coding-game'/>
        </div>
        <label>Coding Game</label>
        <ul>
            <li>Home</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Header