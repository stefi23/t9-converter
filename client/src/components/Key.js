import React from "react";
import PropTypes from 'prop-types';

Key.propTypes = {
    value: PropTypes.string.isRequired,
    letters: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    addUserInput: PropTypes.func,
    deleteUserInput: PropTypes.func,
}

function Key({value, letters, addUserInput, deleteUserInput, disabled }) {
    return (
        <>
        <button className="phone-button" disabled={disabled} onClick={value=== "#" ? deleteUserInput : addUserInput} >
            <p>{value}</p>
            <p>{letters}</p>
        </button>
        </>
    )
}

export default Key;