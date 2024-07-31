import React from 'react';
import './AlertScreen.css';

const AlertScreen = ({ message, onClose, showAlert }) => {
    if (!showAlert) {
        return null;
    }

    return (
        <div className="alert-overlay">
            <div className="alert-popup">
                <div className="popup_heading">Alert!</div>
                <div className="alert-message">{message}</div>
                <button className="alert-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default AlertScreen;