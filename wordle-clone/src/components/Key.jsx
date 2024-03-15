import React from "react";

function Key({keyVal, bigKey}) {
    const selectLetter = () => {

    }

    return(
        <div className="key" id={bigKey && "big" } onClick={selectLetter}>
            {keyVal}
        </div>
    )
}

export default Key;