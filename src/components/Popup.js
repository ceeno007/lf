import React from 'react';
import '../style/popup.css'; // Ensure the path is correct

const Popup = ({ message, type }) => {
    return (
        <div className={`popup ${type}`}>
            <p>{message}</p>
        </div>
    );
};

export default Popup;
