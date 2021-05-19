import React from "react";

function Key(props) {

    const getKey = (e) => {
        console.log(e.code)
    }
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