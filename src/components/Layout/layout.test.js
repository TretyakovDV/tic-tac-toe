import React from "react";
import { shallow } from "enzyme";
import { Layout } from "./index";

describe("Layout", () => {
  const history = [[-10, -10, -10, -10, -10, -10, -10, -10, -10]];
  const handleCellClick = jest.fn();
  const handleStepBack = jest.fn();
  const handleStepForward = jest.fn();
  const handleAnew = jest.fn();
  const turn = 0;
  const player = 1;
  const gameCount = 0;
  const score = { player1: 0, player2: 0 };
  const winner = false;

  const component = shallow(
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

  it("button should be rendered", () => {
    expect(component.length).toEqual(1);
  });
});
