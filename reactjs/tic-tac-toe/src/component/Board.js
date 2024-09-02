import Cell from "./Cell";
import react, { useState } from "react";

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [values, setValue] = useState(Array(9).fill(''));

    function cellClicked(i) {
        if(values[i] || findWinner(values))
            return;
        const nextValue = values.slice();
        if (xIsNext)
            nextValue[i] = 'X';
        else
            nextValue[i] = 'O';
        setValue(nextValue);
        setXIsNext(!xIsNext);
    }


    function findWinner(cells)
    {
       let winnerMoves=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
       ];
    
       for(let i=0;i<winnerMoves.length;i++)
       {
        const [a,b,c]=winnerMoves[i];
        
        if(cells[a] && (cells[a]===cells[b] && cells[b]===cells[c]))
        {
            return cells[a];
        }
         
       }
               
       return null;
    }
    let status,statusClass="white";
    let winner=findWinner(values);
    if(winner)
    {
        statusClass="green";
        status = "Winner: " + winner;
    }
    else
    status = "Next player: " + (xIsNext ? "X" : "O");
    return (
        <div className="center">
            <div className={statusClass}><h3>{status}</h3></div>
            <div className="board-row">
                <Cell value={values[0]} onClick={() => cellClicked(0)} />
                <Cell value={values[1]} onClick={() => cellClicked(1)} />
                <Cell value={values[2]} onClick={() => cellClicked(2)} />
            </div>

            <div className="board-row">
                <Cell value={values[3]} onClick={() => cellClicked(3)} />
                <Cell value={values[4]} onClick={() => cellClicked(4)} />
                <Cell value={values[5]} onClick={() => cellClicked(5)} />
            </div>

            <div className="board-row">
                <Cell value={values[6]} onClick={() => cellClicked(6)} />
                <Cell value={values[7]} onClick={() => cellClicked(7)} />
                <Cell value={values[8]} onClick={() => cellClicked(8)} />
            </div>
        </div>
    );
}
