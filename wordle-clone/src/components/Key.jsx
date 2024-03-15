import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({keyVal, bigKey}) {
    const { onDelete, onSelectLetter, onEnter } = useContext(AppContext);

    const selectLetter = (row, col) => {
        if (keyVal === 'Enter') {
            onEnter();
        } else if (keyVal === 'Delete') {
            onDelete();
        } else {
            onSelectLetter(keyVal);
        }
    }

    return(
        <div className="key" id={bigKey && "big" } onClick={selectLetter}>
            {keyVal}
        </div>
    )
}

export default Key;