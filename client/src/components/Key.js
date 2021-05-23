import React from "react";

function Key(props) {


    return (
        <>
        <button disabled={props.disabled} onClick={props.addUserInput} >
            <p>{props.value}</p>
            <p>{props.letters}</p>
        </button>
        </>
    )
}

export default Key;