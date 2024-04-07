import React from 'react';

const Popup = ({ onNewGame, message }) => {
  const handleNewGameClick = () => {
    onNewGame();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{message}</h2>
        <button onClick={handleNewGameClick}>Nouvelle partie</button>
      </div>
    </div>
  );
};

export default Popup;
