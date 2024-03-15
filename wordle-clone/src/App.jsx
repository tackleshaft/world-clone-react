import React, {useState} from 'react';
import './App.css';
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

function App () {
  const boardDefault = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];


  const [board, setBoard] = useState(boardDefault)

  return (
    <div className="App">
        <nav>
          <h1>Wordle</h1>
        </nav>
        <Board board={board}/>
        <Keyboard />
    </div>
  )
}

export default App
