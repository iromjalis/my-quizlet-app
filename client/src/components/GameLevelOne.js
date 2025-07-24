import React, { useEffect, useState } from "react";
import words from "../data/words.json";
import "../styles/GameLevelOne.css"; // создадим стили отдельно

function GameLevelOne() {
  const [currentCard, setCurrentCard] = useState(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    getRandomCard();
  }, []);

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentCard(words[randomIndex]);
    setFlipped(false);
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  if (!currentCard) return null;

  return (
    <div className="flashcard-container">
      <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
        <div className="front">{currentCard.ru}</div>
        <div className="back">{currentCard.fi}</div>
      </div>
      <button onClick={getRandomCard}>Следующее слово</button>
    </div>
  );
}

export default GameLevelOne;
