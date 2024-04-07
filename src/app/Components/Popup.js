import React from 'react';

const Popup = ({ onNewGame, message, motPerdu }) => {
  const handleNewGameClick = () => {
    onNewGame();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{message}</h2>
        {motPerdu && <p>Le mot était : {motPerdu}</p>}
        <button onClick={handleNewGameClick}>Nouvelle partie</button>
      </div>
    </div>
  );
};

export default Popup;
