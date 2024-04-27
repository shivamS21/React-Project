import React, { useState, useEffect } from 'react';
import DiceButton from './DiceButton';
import './GamePage.css';
import DiceInterface from './DiceInterface';

const GamePage = () => {
    const [score, setScore] = useState(0);
    const [isGuessSelected, setIsGuessSelected] = useState(0);
    const [isWarningIssued, setIsWarningIssued] = useState(false);
    const [clicked, setClicked] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
    });

    const handleButtonClick = (value) => {
        setClicked((prevClicked) => {
            const newState = {};
            for (let key in prevClicked) {
                newState[key] = false;
            }
            newState[value] = true;
            return newState;
        });
        setIsGuessSelected(value);
        setIsWarningIssued(false);
    };

    const handleDiceClick = (value) => {
        if (isGuessSelected !== value) {
            setScore((prevScore) => prevScore - 2);
        } else {
            setScore((prevScore) => prevScore + value);
        }
    }

    useEffect(() => {
        console.log({ score });
    }, [score]); // Log the updated score whenever it changes

    const toggleGameReset = () => {
        setScore(0);
        setIsGuessSelected(0);
        setClicked((prevClicked) => {
            const newState = {};
            for (let key in prevClicked) {
                newState[key] = false;
            }
            return newState;
        });
    }

    const toggleWarning = (value) => {
        setIsWarningIssued(value);
    }

    return (
        <div className='game-page'>
            {isWarningIssued?<div className='game-warning'>You have not selected any number</div> : ''}
            <div className="score-header" style={{'margin-top':isWarningIssued?'0':'36px'}}>
                <div className="score">
                    <div className="total-score">{score}</div>
                    <div className="text-score">Total Score</div>
                </div>
                <div className="dice-values">
                    <div className="buttons">
                        <DiceButton value={1} isClicked={clicked[1]} onClick={() => handleButtonClick(1)} />
                        <DiceButton value={2} isClicked={clicked[2]} onClick={() => handleButtonClick(2)} />
                        <DiceButton value={3} isClicked={clicked[3]} onClick={() => handleButtonClick(3)} />
                        <DiceButton value={4} isClicked={clicked[4]} onClick={() => handleButtonClick(4)} />
                        <DiceButton value={5} isClicked={clicked[5]} onClick={() => handleButtonClick(5)} />
                        <DiceButton value={6} isClicked={clicked[6]} onClick={() => handleButtonClick(6)} />
                    </div>
                    <div className="dice-text">Select Number</div>
                </div>
            </div>
            <DiceInterface changeScore={toggleGameReset} warning={toggleWarning} guess={isGuessSelected} handleDiceClick={handleDiceClick}/>
        </div>
    );
};

export default GamePage;
