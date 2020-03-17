import React from "react";
import "./styles.css";

export const Cell = ({ player, onClick }) => {
  const value = (player === 1 && "X") || (player === 2 && "O") || "";
  return (
    <div className="cell" onClick={onClick}>
      {value}
    </div>
  );
};
