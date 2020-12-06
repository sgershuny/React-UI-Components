import React from 'react';
import './Button.css';
import ActionButton from './ActionButton.js';

const ActionsTop= props => {
    const symbols = ['clear','%']
    return(
        <div className = "ActionsTop">
            {symbols.map(symbol => {
                return <ActionButton name = {symbol} className = {`symbol${symbol}`}/>
            })}
        </div>
    )
}

export default ActionsTop;