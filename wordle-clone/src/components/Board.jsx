import React, { useState } from "react";
import { boardDefault } from "./Words";
import Letter from "./Letter";

function Board ({board}) {

    return (
        <div className="board">
            {board.map((row, rowIndex) => (
                <div className="row" key={rowIndex}> 
                    {row.map((letter,colIndex) => (
                        <Letter letterPos={colIndex} attemptVal={letter} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Board;