import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard.jsx";

const App = () => {
  const [winnerPlayer, setWinnerPlayer] = useState("X");

  const [boardValues, setBoardValues] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  });

  const [winLineCells, setWinLineCells] = useState([]);

  const [hasWinner, setHasWinner] = useState(false);

  const [cellsAvailableForPlay, setCellsAvailableForPlay] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);

  const restartGame = () => {
    setBoardValues({
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
    });

    setCellsAvailableForPlay([0, 1, 2, 3, 4, 5, 6, 7, 8]);

    setWinLineCells([]);

    setHasWinner(false);
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center relative">
      {/* Inform winner */}
      {hasWinner && (
        <h1 className="absolute top-10 text-green-500 font-bold text-4xl">
          PLAYER <span className="text-5xl">{winnerPlayer}</span> HAS WON
        </h1>
      )}

      <GameBoard
        boardValues={boardValues}
        setBoardValues={setBoardValues}
        cellsAvailableForPlay={cellsAvailableForPlay}
        setCellsAvailableForPlay={setCellsAvailableForPlay}
        winLineCells={winLineCells}
        setWinLineCells={setWinLineCells}
        hasWinner={hasWinner}
        setHasWinner={setHasWinner}
        setWinnerPlayer={setWinnerPlayer}
      />

      {/* Reset Button */}
      <button
        className="bg-blue-300 p-2 px-4 center mt-10 font-semibold"
        onClick={restartGame}
      >
        Restart ?
      </button>
    </div>
  );
};

export default App;
