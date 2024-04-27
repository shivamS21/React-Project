import { useState } from 'react';
import './App.css'
import GamePage from './Components/Game_Page/GamePage';
import Main from './Components/Main_Page/Main';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted(!isGameStarted);
  }

  return (
    <>
      {isGameStarted ? <GamePage /> : <Main toggle={toggleGamePlay}/>}  {/* Condition rendering of component */}
    </>
  )
}

export default App

// Learning
/**
 * When a prop it to be changed in a child component, pass a function made in parent component which is setting that state.
 * margin: 0px auto -> sets the container in center horizontally
 * align-items: center -> sets the elements in center vertically
 * hover effect can be applied to the buttons for nice effect
 * CSS is no more complex. -> MAJOR HIGHLIGHT
 */
