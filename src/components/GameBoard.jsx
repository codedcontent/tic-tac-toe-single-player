import React, { useEffect } from "react";
import botPlay from "../utils/botPlay.js";
import SingleCell from "./SingleCell.jsx";

const GameBoard = ({
  boardValues,
  setBoardValues,
  cellsAvailableForPlay,
  setCellsAvailableForPlay,
  winLineCells,
  setWinLineCells,
  hasWinner,
  setHasWinner,
  setWinnerPlayer,
}) => {
  const isClickable = (location) => {
    if (!boardValues[location] && !hasWinner) return true;
    return false;
  };

  const handleClick = (location) => {
    //   Check if clickable
    if (!isClickable(location)) {
      return;
    }

    // Play users turn
    setBoardValues((prev) => ({ ...prev, [location]: "X" }));

    // Update playable cells
    setCellsAvailableForPlay((prev) => {
      const positionsLeft = prev.filter((x) => x !== location);

      // Make the bot play its turn
      const botsPlay = botPlay(positionsLeft);

      setBoardValues((prev) => ({ ...prev, [botsPlay]: "O" }));

      return positionsLeft.filter((y) => y !== botsPlay);
    });
  };

  // UseEffect to check for draw
  useEffect(() => {
    if (cellsAvailableForPlay.length === 0) {
      // alert("DRAW!!!");
    } else {
    }
  }, [cellsAvailableForPlay]);

  // UseEffect for checking for a winner
  useEffect(() => {
    const winningPositions = [
      {
        type: "horizontal",
        position: "top",
        occurrence: "012",
      },
      {
        type: "horizontal",
        position: "middle",
        occurrence: "345",
      },
      {
        type: "horizontal",
        position: "bottom",
        occurrence: "678",
      },
      {
        type: "vertical",
        position: "left",
        occurrence: "036",
      },
      {
        type: "vertical",
        position: "middle",
        occurrence: "147",
      },
      {
        type: "vertical",
        position: "right",
        occurrence: "258",
      },
      {
        type: "diagonal",
        position: "left",
        occurrence: "048",
      },
      {
        type: "diagonal",
        position: "right",
        occurrence: "246",
      },
    ];
    /**
     *
     */
    // Check for game winner
    const checkForWinner = () => {
      let winner;

      // Loop through the winning positions and check if we have a winner
      winningPositions.forEach((value) => {
        const splitWinningPositions = value.occurrence.split("");

        // Check if the board values at the winning positions are the same
        if (
          boardValues[splitWinningPositions[0]] ===
            boardValues[splitWinningPositions[1]] &&
          boardValues[splitWinningPositions[0]] ===
            boardValues[splitWinningPositions[2]]
        ) {
          // Check if the board values at the winning positions are not empty
          if (
            boardValues[splitWinningPositions[0]] !== "" &&
            boardValues[splitWinningPositions[1]] !== "" &&
            boardValues[splitWinningPositions[2]] !== ""
          ) {
            winner = boardValues[splitWinningPositions[0]];

            // Set the cells that contains the wins
            setWinLineCells([...value.occurrence.split("")]);

            // Notify of the winner
            // console.log("Player " + winner + " is the winner");
            setWinnerPlayer(winner);

            setHasWinner(true);
          }
        }
      });
    };

    checkForWinner();
  }, [boardValues, setHasWinner, setWinLineCells, setWinnerPlayer]);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Top Layer */}
      <div className="flex border-b-2 border-blue-300">
        <SingleCell
          winLineCells={winLineCells}
          handleClick={handleClick}
          value={boardValues[0]}
          position={0}
        />
        <SingleCell
          winLineCells={winLineCells}
          handleClick={handleClick}
          value={boardValues[1]}
          position={1}
        />
        <SingleCell
          winLineCells={winLineCells}
          handleClick={handleClick}
          value={boardValues[2]}
          position={2}
        />
      </div>

      {/* Middle Layer */}
      <div className="flex border-b-2 border-blue-300">
        <SingleCell
          winLineCells={winLineCells}
          handleClick={handleClick}
          value={boardValues[3]}
          position={3}
        />
        <SingleCell
          winLineCells={winLineCells}
          handleClick={handleClick}
          value={boardValues[4]}
          position={4}
        />
        <SingleCell
          winLineCells={winLineCells}
          handleClick={handleClick}
          value={boardValues[5]}
          position={5}
        />
      </div>

      {/* Bottom Layer */}
      <div className="flex">
        <SingleCell
          winLineCells={winLineCells}
          handleClick={handleClick}
          value={boardValues[6]}
          position={6}
        />
        <SingleCell
          winLineCells={winLineCells}
          handleClick={handleClick}
          value={boardValues[7]}
          position={7}
        />
        <SingleCell
          winLineCells={winLineCells}
          handleClick={handleClick}
          value={boardValues[8]}
          position={8}
        />
      </div>
    </div>
  );
};

export default GameBoard;
