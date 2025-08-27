import { useEffect, useState } from "react";
import "./TicTacToe.css";

function Square({ value, onClick }) {
  return (
    <button
      className="square"
      onClick={() => {
        onClick();
      }}
    >
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleClickSquare(currentSquare) {
    let copySquares = [...squares];

    if (getWinner(copySquares) || copySquares[currentSquare]) return;

    copySquares[currentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    // console.log(copySquares);

    setSquares(copySquares);
    // console.log(squares);
  }

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a draw ! Please restart the game.");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}, restart the game`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="tictactoe-container">
      <h1>TIC TAC TOE GAME</h1>
      <div className="row">
        <Square
          value={squares[0]}
          onClick={() => {
            handleClickSquare(0);
          }}
        />
        <Square
          value={squares[1]}
          onClick={() => {
            handleClickSquare(1);
          }}
        />
        <Square
          value={squares[2]}
          onClick={() => {
            handleClickSquare(2);
          }}
        />
      </div>
      <div className="row">
        <Square
          value={squares[3]}
          onClick={() => {
            handleClickSquare(3);
          }}
        />
        <Square
          value={squares[4]}
          onClick={() => {
            handleClickSquare(4);
          }}
        />
        <Square
          value={squares[5]}
          onClick={() => {
            handleClickSquare(5);
          }}
        />
      </div>
      <div className="row">
        <Square
          value={squares[6]}
          onClick={() => {
            handleClickSquare(6);
          }}
        />
        <Square
          value={squares[7]}
          onClick={() => {
            handleClickSquare(7);
          }}
        />
        <Square
          value={squares[8]}
          onClick={() => {
            handleClickSquare(8);
          }}
        />
      </div>
      <div className="result">
        <p>{status}</p>
        <button
          className="restart"
          onClick={() => {
            handleRestart();
          }}
        >
          Restart the game
        </button>
      </div>
    </div>
  );
}
