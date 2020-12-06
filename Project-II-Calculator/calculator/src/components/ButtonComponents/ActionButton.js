import React from 'react';
import './Button.css';

const ActionButton = props => {
    return(
        <div className = {props.className}>
            <button>
                {props.name}
            </button>
        </div>
    )
}

export default ActionButton;