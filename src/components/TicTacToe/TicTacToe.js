import { useState } from "react";
import "./TicTacToe.css";

function Square({ value, onClick }) {
  return (
    <button
      className="square"
      onClick={() => {
        onClick();
      }}
      disabled={value ? true : false}
    >
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  console.log(squares);

  function handleClickSquare(currentSquare) {
    let copySquares = [...squares];
    copySquares[currentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    // console.log(copySquares);

    setSquares(copySquares);
    console.log(squares);
  }

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
    </div>
  );
}
