import React from 'react';
import './GamePage.css';

const GamePage = () => {
  return (
    <div className="game-page">
      <h2 className="game-title">Start a New Game</h2>
      <div className="game-buttons">
        <button className="organize-button">Organize Game</button>
        <button className="participate-button">Participate</button>
      </div>
    </div>
  );
};

export default GamePage;
