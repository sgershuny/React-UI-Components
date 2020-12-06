import React from 'react';
import './Button.css';
import Numbers from './Numbers';
import ActionsBottom from './ActionsBottom';
import ActionsTop from './ActionsTop';

const Keypad = props => {
    return(
        <div>
            <ActionsTop />
            <div className = "bottomComponents">
                <Numbers numbersPressed = {props.numbersPressed}/>
                <ActionsBottom />
            </div>
        </div>
    )
}

export default Keypad;