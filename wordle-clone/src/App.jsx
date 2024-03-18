import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordSet } from './Words';



export const AppContext = createContext(boardDefault);

function App () {
  const [board, setBoard] = useState(boardDefault)
  const [currAttempt, setCurrentAttempt] = useState({attempt: 0, letterPos: 0})
  const [wordSet, setWordSet] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([])

  const correctWord = "RIGHT";

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
    })
  }, [])

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrentAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})
  }
  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board]; 
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = '';
    setBoard(newBoard);
    setCurrentAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1})
  }
  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrentAttempt({attempt: currAttempt.attempt + 1, letterPos: 0})
    } else {
      alert('Word not found')
    }
    
    if (currWord === correctWord) {
      alert('You Won')
    }

  }

  return (
    <div className="App">
        <nav>
          <h1>Wordle</h1>
        </nav>
        <AppContext.Provider 
          value={{board, 
            setBoard, 
            currAttempt, 
            setCurrentAttempt, 
            onSelectLetter, 
            onDelete, 
            onEnter,
            correctWord,
            setDisabledLetters,
            disabledLetters}}
        >
          <div className='game'>
            <Board />
            <Keyboard />
          </div>
        </AppContext.Provider>
    </div>
  )
}

export default App
