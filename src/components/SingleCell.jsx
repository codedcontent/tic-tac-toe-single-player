import React from "react";

const borderAndColor = "border-x-2 border-blue-300";
const SingleCell = ({ value, position, handleClick, winLineCells }) => {
  return (
    <div
      className={`h-20 w-20 bg-orange-400 cursor-pointer font-bold text-lg hover:bg-orange-200 flex justify-center items-center ${
        position === 1
          ? borderAndColor
          : position === 4
          ? borderAndColor
          : position === 7
          ? borderAndColor
          : ""
      }
      ${
        winLineCells.includes(position.toString()) &&
        "bg-green-600 text-white font-black animate-pulse"
      }
      `}
      onClick={() => {
        handleClick(position);
      }}
    >
      {value}
    </div>
  );
};

export default SingleCell;
