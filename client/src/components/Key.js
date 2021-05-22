import React from "react";

function Key(props) {


    return (
        <>
        <button onClick={props.addUserInput} >
            <p>{props.value}</p>
            <p>{props.letters}</p>
        </button>
        </>
    )
}

export default Key;