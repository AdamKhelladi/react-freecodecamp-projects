import { useState } from "react";
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
  console.log(squares);

  function handleClickSquare(index) {
    
  }

  return (
    <div className="tictactoe-container">
      <h1>TIC TAC TOE GAME</h1>
      <div className="row">
        <Square
          onClick={() => {
            handleClickSquare(0);
          }}
        />
        <Square
          onClick={() => {
            handleClickSquare(1);
          }}
        />
        <Square
          onClick={() => {
            handleClickSquare(2);
          }}
        />
      </div>
      <div className="row">
        <Square
          onClick={() => {
            handleClickSquare(3);
          }}
        />
        <Square
          onClick={() => {
            handleClickSquare(4);
          }}
        />
        <Square
          onClick={() => {
            handleClickSquare(5);
          }}
        />
      </div>
      <div className="row">
        <Square
          onClick={() => {
            handleClickSquare(6);
          }}
        />
        <Square
          onClick={() => {
            handleClickSquare(7);
          }}
        />
        <Square
          onClick={() => {
            handleClickSquare(8);
          }}
        />
      </div>
    </div>
  );
}
