import React from 'react';
import './DiceInterface.css';
import { useState } from 'react';

const DiceInterface = ({ changeScore, warning, guess, handleDiceClick }) => {
    const [isShowRules, setIsShowRules] = useState(false);
    const [imgSource, setImgSource] = useState('/images/dice_1.png');
    const toggleDiceClick = () => {
        const diceNo = Math.floor(Math.random()*6+1);
        console.log(diceNo);
        if (!guess) {
            warning(true);
            return;
        }
        warning(false);
        handleDiceClick(diceNo);
        setImgSource('/images/dice_'+diceNo+'.png');
    }
    const toggleReset = () => {
        changeScore();
        warning(false);
        setImgSource('/images/dice_1.png');
    }
  return (
    <div className="interface">
        <div className="dice">
            <div className='img-button' onClick={toggleDiceClick}><img src={imgSource}/></div>
            <p className='instruction'>Click on Dice to roll</p>
        </div>
        <div className="play-button">
            <button className='play-button-dim reset-score' onClick={toggleReset}>Reset Score</button>
            <button className='play-button-dim show-rules' onClick={()=>setIsShowRules(!isShowRules)}>Show Rules</button>
        </div>
        {isShowRules ? 
            <div className="rules">
                <h3>How to play dice game</h3>
                <div className="detail-rules">
                    <p>Step-1: Select any number</p>
                    <p>Step-2: Click on dice image</p>
                    <p>After click on the dice, if the selected number is equal to dice number, you will get </p>
                    <p>same point as dice. Else, 2 points will be deducted. </p>
                </div>
            </div>
        : ''}
        
    </div>
  )
}

export default DiceInterface