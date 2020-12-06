import React from 'react';
import './Card.css';

const CardContent = props => {

    return (
        <span className = "cardContent" >
            <h1>Get started with React</h1>
            <p className = "cardContents">
                React makes it painless to create Interactive
                UIs. Design simple views for each state in your
                application.
            </p>
            <p className = "link">reactjs.org</p>
        </span>
        
    )
}


export default CardContent;