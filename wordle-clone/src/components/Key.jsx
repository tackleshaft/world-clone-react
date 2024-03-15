import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({keyVal, bigKey}) {
    const { board, setBoard, currAttempt, setCurrentAttempt } = useContext(AppContext);

    const selectLetter = (row, col) => {
        const newBoard = [...board]
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
        setBoard(newBoard);
        setCurrentAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})
    }

    return(
        <div className="key" id={bigKey && "big" } onClick={selectLetter}>
            {keyVal}
        </div>
    )
}

export default Key;