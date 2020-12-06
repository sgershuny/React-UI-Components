import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';

const CardComponents = props =>{
    return(
        <div className = "cardContainer">
            <CardBanner />
            <CardContent />
        </div>
    )
    }


export default CardComponents;