import React, { useState } from 'react'
import Board from './Board'
export default function Game(){
    const [xIsNext, setXIsNext] = useState(true);
    const [history,setHistory]=useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentValues = history[currentMove];

    function onPlay(newValue)
    {
        const nextHistory = [...history.slice(0, currentMove + 1), newValue];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <section>
         <Board values={currentValues} xIsNext={xIsNext} onPlay={onPlay}/>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
    </section>
  )
}
