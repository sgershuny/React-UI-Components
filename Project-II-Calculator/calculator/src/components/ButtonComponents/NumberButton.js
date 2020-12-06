import React from 'react';
import './Button.css';

const NumberButton = props => {
    return(
        <div className = {props.className}>
            <button>
                {props.name}
            </button>
        </div>
    )
}

export default NumberButton;