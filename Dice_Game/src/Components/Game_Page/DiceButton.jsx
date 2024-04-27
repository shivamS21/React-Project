// DiceButton.jsx
import React from 'react';
import './DiceButton.css';

const DiceButton = ({ value, isClicked, onClick }) => {
    return (
        <button 
            className='dice-button' 
            style={{
                backgroundColor: isClicked ? 'black' : 'white',
                color: isClicked ? 'white' : 'black'
            }}
            onClick={() => onClick(value)}>
            {value}
        </button>
    );
};

export default DiceButton;
