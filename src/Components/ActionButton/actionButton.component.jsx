import React from 'react';
import './actionButton.styles.scss';


const ActionButton = ({ children }) => {
    return (
        <button className='action-btn' >{children}</button>
    )
};


export default ActionButton;