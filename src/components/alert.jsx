import React from 'react';

const Alert = ({ message, onClose }) => {
  return (
    <div className="alert-modal">
      <div className="alert-modal-overlay" onClick={onClose}></div>
      <div className="alert-modal-content">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Alert;