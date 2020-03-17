import React from "react";
import { shallow } from "enzyme";
import { Board } from "./index";

describe("Board", () => {
  const history = [[-10, -10, -10, -10, -10, -10, -10, -10, -10]];
  const handleCellClick = jest.fn();
  const turn = 0;
  const player = 1;
  const winner = false;

  const component = shallow(
    <Board
      history={history}
      handleCellClick={handleCellClick}
      turn={turn}
      player={player}
      winner={winner}
    />
  );

  it("button should be rendered", () => {
    expect(component.length).toEqual(1);
  });
});
