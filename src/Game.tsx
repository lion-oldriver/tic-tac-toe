import React, { useReducer } from 'react';
import './App.css';
import Board from './Board'
import calculateWinner from './calculateWinner'
import reducer, { initialState } from './reducer'

const Game: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClick = (i: number) => {
    dispatch({ type: 'click', value: i })
  }

  const jumpTo = (step: number) => {
    dispatch({ type: 'jump', value: step })
  }
  
  const currentHistory = [...state.history]
  const current = currentHistory[state.stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = currentHistory.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const status = winner ?
    "Winner: " + winner
    :
    "Next player: " + (state.xIsNext ? "X" : "O");

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol start={0}>{moves}</ol>
      </div>
    </div>
  );
}

export default Game
