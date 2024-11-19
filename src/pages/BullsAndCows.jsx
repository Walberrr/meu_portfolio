import React, { useState } from "react";
import "./BullsAndCows.css";

function BullsAndCows() {

  const [combination, setCombination] = useState(generateCombination());
  const [attempt, setAttempt] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [bulls, setBulls] = useState(0);
  const [cows, setCows] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function generateCombination() {

    let digits = [];
    while (digits.length < 4) {
      const digit = Math.floor(Math.random() * 10);
      if (!digits.includes(digit)) {
        digits.push(digit);
      }
    }
    return digits.join("");
  }

  function evaluateGuess(guess) {
    
    let bullsCount = 0;
    let cowsCount = 0;
    const guessArr = guess.split("");

    for (let i = 0; i < 4; i++) {
      if (guessArr[i] === combination[i]) {
        bullsCount++;
      }
    }

    for (let i = 0; i < 4; i++) {
      if (guessArr[i] !== combination[i] && combination.includes(guessArr[i])) {
        cowsCount++;
      }
    }

    setBulls(bullsCount);
    setCows(cowsCount);
    return { bullsCount, cowsCount };
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (attempt.length !== 4 || isNaN(attempt)) {
      alert("A senha deve conter exatamente 4 números.");
      return;
    }

    const { bullsCount, cowsCount } = evaluateGuess(attempt);
    setAttempts([{ attempt, bulls: bullsCount, cows: cowsCount }, ...attempts]);
    setAttempt("");

    if (bullsCount === 4) {
      setGameOver(true);
    }
  }

  function showCombination() {
    alert(`A combinação correta é: ${combination}`);
  }

  return (
    <div className="bulls-cows">
      <h2 style={{ color: "black" }}>Jogo Senha (Bulls and Cows)</h2>
      <p style={{ color: "black" }}>Advinhe a combinação de 4 números!</p>

      {gameOver ? (
        <h3 style={{ color: "black" }}>Parabéns, você acertou!</h3>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={attempt}
              onChange={(e) => setAttempt(e.target.value)}
              maxLength={4}
              placeholder="Digite sua tentativa"
            />
            <button type="submit">Submeter</button>
          </form>

          <div className="resultados">
            <h3 style={{ color: "black" }}>Tentativas anteriores:</h3>
            <ul>
              {attempts.map((item, index) => (
                <li style={{ color: "black" }}key={index}>
                  {item.attempt} - Bulls: {item.bulls}, Cows: {item.cows}
                </li>
              ))}
            </ul>
          </div>
          <button onClick={showCombination}>Revelar combinação</button>
        </>
      )}
    </div>
  );
}

export default BullsAndCows;

  