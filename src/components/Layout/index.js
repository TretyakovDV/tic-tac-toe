import React from "react";
import "./styles.css";

import { Button } from "../Button";
import { Board } from "../Board";
import { InfoText } from "../InfoText";

export const Layout = ({
  history,
  handleCellClick,
  handleStepBack,
  handleStepForward,
  handleAnew,
  turn,
  player,
  gameCount,
  score,
  winner
}) => (
  <div className="container">
    <h1 className="title">Tic Tac Toe</h1>
    <div className="button-group">
      <Button disabled={turn === 0 || winner} onClick={handleStepBack}>
        &#8592; Step Back
      </Button>
      <Button disabled={!(turn === 9 || winner)} onClick={handleAnew}>
        ⟳ Anew
      </Button>
      <Button
        disabled={turn === history.length - 1 || winner}
        onClick={handleStepForward}
      >
        Step Forward &#8594;
      </Button>
    </div>
    <InfoText text="Turn" value={player === 1 ? "X" : "O"} />
    <Board
      history={history}
      handleCellClick={handleCellClick}
      turn={turn}
      player={player}
      winner={winner}
    />
    <InfoText text="Sets played" value={gameCount} />
    <InfoText text="Player 1 (X) wins" value={score.player1} />
    <InfoText text="Player 2 (O) wins" value={score.player2} />
  </div>
);
