import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  cellClick,
  stepBack,
  stepForward,
  increaseTurn,
  changePlayer,
  setWinner,
  anew,
  increaseGameCounter
} from "../redux/actions";

import { Layout } from "../components/Layout";

export default () => {
  const d = useDispatch();
  const { history, turn, player, gameCount, score, winner } = useSelector(
    state => state
  );

  const handleCellClick = (player, idx) => {
    if (!winner) {
      d(cellClick(player, idx));
      d(increaseTurn());
    }
  };

  const handleStepBack = () => {
    d(stepBack());
  };

  const handleStepForward = () => {
    d(stepForward());
  };

  const handleAnew = () => {
    d(anew());
    d(increaseGameCounter());
  };

  useEffect(() => {
    if (turn >= 4) {
      const lastHistory = history[turn];
      let solution1 = lastHistory[0] + lastHistory[1] + lastHistory[2];
      let solution2 = lastHistory[3] + lastHistory[4] + lastHistory[5];
      let solution3 = lastHistory[6] + lastHistory[7] + lastHistory[8];
      let solution4 = lastHistory[0] + lastHistory[3] + lastHistory[6];
      let solution5 = lastHistory[1] + lastHistory[4] + lastHistory[7];
      let solution6 = lastHistory[2] + lastHistory[5] + lastHistory[8];
      let solution7 = lastHistory[0] + lastHistory[4] + lastHistory[8];
      let solution8 = lastHistory[2] + lastHistory[4] + lastHistory[6];
      const solutions = [
        solution1,
        solution2,
        solution3,
        solution4,
        solution5,
        solution6,
        solution7,
        solution8
      ];
      for (let i = 0; i < solutions.length; i++) {
        if (solutions[i] === 3 * player) {
          d(setWinner(player, i));
        }
      }
    }
    d(changePlayer());
  }, [turn]);

  return (
    <Layout
      history={history}
      handleCellClick={handleCellClick}
      handleStepBack={handleStepBack}
      handleStepForward={handleStepForward}
      turn={turn}
      player={player}
      gameCount={gameCount}
      score={score}
      winner={winner}
      handleAnew={handleAnew}
    />
  );
};
