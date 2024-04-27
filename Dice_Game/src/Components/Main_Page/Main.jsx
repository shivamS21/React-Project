import React from 'react';
import './Main.css';

const Main = ({ toggle }) => {
  return (
    <div className='main'>
        <div>
            <img src='/images/dices.png' alt='dice picture' />
        </div>
        <div className="main-content">
            <h1>DICE GAME</h1>
            <button
            onClick={toggle}>
                Play Now
            </button>
        </div>
    </div>
  )
}

export default Main