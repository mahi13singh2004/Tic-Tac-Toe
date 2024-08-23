import React, { useState } from "react";
import Box from "./Box";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [xturn, setXturn] = useState(true);

  const checkWinner = () => {
    const winnerPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winnerPatterns) {
      const [a, b, c] = pattern;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a]; // Return the winner ('X' or 'O')
      }
    }

    if (!state.includes(null)) {
      return 'Game Draw';
    }

    return null; // No winner
  };

  const winner = checkWinner();

  const handleClick = (index) => {
    if (state[index] || winner) return; 

    const copy = [...state];
    copy[index] = xturn ? 'X' : 'O';
    setState(copy);
    setXturn(!xturn);
  };

  const reset = () => {
    setState(Array(9).fill(null));
    setXturn(true); // Optionally reset the turn to X
  };

  return (
    <div className="container">
      {winner ? (
        <div>
          <span>{winner} won the game</span>
          <button className="right" onClick={reset}>Play Again</button>
        </div>
      ) : (
        <>
          <h4>Player {xturn ? 'X' : 'O'} - It's your turn</h4>
          <div className="row">
            <Box value={state[0]} onClick={() => handleClick(0)} />
            <Box value={state[1]} onClick={() => handleClick(1)} />
            <Box value={state[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="row">
            <Box value={state[3]} onClick={() => handleClick(3)} />
            <Box value={state[4]} onClick={() => handleClick(4)} />
            <Box value={state[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="row">
            <Box value={state[6]} onClick={() => handleClick(6)} />
            <Box value={state[7]} onClick={() => handleClick(7)} />
            <Box value={state[8]} onClick={() => handleClick(8)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
