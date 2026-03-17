import React, { useState, useEffect } from 'react';
import { getRandomWord } from './api';
import { DrawHangman } from './components/DrawHangman';
import { Word } from './components/Word';
import { Keyboard } from './components/Keyboard';
import './App.css';

export const App = () => {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = async () => {
    const newWord = await getRandomWord();
    if (newWord) {
      setWord(newWord);
      setGuessedLetters([]);
      setError(null);
    } else {
      setError("Impossible de charger le mot.");
    }
  };

  const incorrectLetters = guessedLetters.filter(letter => !word.includes(letter));
  const isWinner = word && word.split('').every(letter => guessedLetters.includes(letter));
  const isLoser = incorrectLetters.length >= 6;

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter) && !isWinner && !isLoser) {
      setGuessedLetters(prev => [...prev, letter]);
    }
  };

  useEffect(() => {

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase()

      if (isWinner || isLoser) return

      if (key >= "a" && key <= "z") {
        handleGuess(key)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }

  }, [guessedLetters, word, isWinner, isLoser])

  return (
    <div className="game-container">
      <div className='windows'>
        <h1>Pendu </h1>
        <span>✕</span>
      </div>
      {error && <p className="error">{error}</p>}

      <DrawHangman errors={incorrectLetters.length} />

      <Word
        word={word}
        guessedLetters={guessedLetters}
      />

      <Keyboard
        word={word}
        guessedLetters={guessedLetters}
        handleGuess={handleGuess}
        disabled={isWinner || isLoser}
      />

      {(isWinner || isLoser) && (
        <div className="overlay">
          <div className="popup">
            {isWinner ? (
              <p>🎉 Gagné !</p>
            ) : (
              <p>💀 Perdu ! Le mot était : {word}</p>
            )}
            <button onClick={resetGame}>Rejouer</button>
          </div>
        </div>
      )}
    </div>
  );
}