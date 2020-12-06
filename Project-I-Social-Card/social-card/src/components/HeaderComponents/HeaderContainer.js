import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = props =>{
    return (
        <div className = "headerContainer">
            <ImageThumbnail />
            <HeaderContent />   
        </div>
    );
}

export default HeaderContainer;