import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
    const { gameOver, setGameOver, currAttempt, correctWord} = useContext(AppContext)


    return (
        <div className="gameOver">
            <h3>
            {gameOver.guessedWord ? 'You Correctly Guessed' : "You Fucked Up the Word"}
            </h3>
            <h1>The correct word was: {correctWord}</h1>
            {gameOver.guessedWord && (<h3> You guessed in {currAttempt.attempt}</h3>)}
        </div>
    )
}

export default GameOver;