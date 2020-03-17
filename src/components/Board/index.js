import React from "react";
import "./index.css";

import { Cell } from "../Cell";

export const Board = ({ history, handleCellClick, turn, player, winner }) => (
  <div className={`board ${winner ? ` solution-${winner.solution}` : ""}`}>
    {history[turn].map((cell, idx) => (
      <Cell
        key={idx}
        player={cell}
        onClick={() => cell === -10 && handleCellClick(player, idx)}
      />
    ))}
  </div>
);
