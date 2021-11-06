import React from 'react';
import './actionButton.styles.scss';


const ActionButton = ({ children }) => {
    const goToSkills = () => {
        window.location.href = '/about'
    }
    return (
        <button className='action-btn' onClick={goToSkills}>{children}</button>
    )
};


export default ActionButton;