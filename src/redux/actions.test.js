import * as actions from "./actions";

describe("Actions", () => {
  it("should create an action when click on cell", () => {
    const player = 1;
    const idx = 2;
    const expectedAction = {
      type: actions.CELL_CLICK,
      player,
      idx
    };

    expect(actions.cellClick(player, idx)).toEqual(expectedAction);
  });

  it("should create an action to step back", () => {
    const expectedAction = {
      type: actions.STEP_BACK
    };

    expect(actions.stepBack()).toEqual(expectedAction);
  });

  it("should create an action to step forward", () => {
    const expectedAction = {
      type: actions.STEP_FORWARD
    };

    expect(actions.stepForward()).toEqual(expectedAction);
  });

  it("should create an action to increase turn", () => {
    const expectedAction = {
      type: actions.INCREASE_TURN
    };

    expect(actions.increaseTurn()).toEqual(expectedAction);
  });

  it("should create an action to change player", () => {
    const expectedAction = {
      type: actions.CHANGE_PLAYER
    };

    expect(actions.changePlayer()).toEqual(expectedAction);
  });

  it("should create an action to set winned", () => {
    const player = 1;
    const solution = 2;
    const expectedAction = {
      type: actions.SET_WINNER,
      player,
      solution
    };

    expect(actions.setWinner(player, solution)).toEqual(expectedAction);
  });

  it("should create an action to restart game", () => {
    const expectedAction = {
      type: actions.ANEW
    };

    expect(actions.anew()).toEqual(expectedAction);
  });

  it("should create an action to increase game counter", () => {
    const expectedAction = {
      type: actions.INCREASE_GAME_COUNTER
    };

    expect(actions.increaseGameCounter()).toEqual(expectedAction);
  });
});
