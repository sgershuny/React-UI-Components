import React from 'react';
import './Button.css';
import ActionButton from './ActionButton.js';

const ActionsBottom = props => {
    const symbols = ['X','-','+','=']
    return(
        <div className = "ActionBottom">
            {symbols.map(symbol => {
                return <ActionButton name = {symbol} className = {`symbol${symbol}`}/>
            })}
        </div>
    )
}

export default ActionsBottom;