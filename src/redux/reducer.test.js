import { reducer } from "./reducer";
import * as actions from "./actions";

describe("Reducer", () => {
  it("should return to initial state", () => {
    const initialState = {
      history: [[-10, -10, -10, -10, -10, -10, -10, -10, -10]],
      turn: 0,
      player: 2,
      gameCount: 0,
      winner: false,
      score: {
        player1: 0,
        player2: 0
      }
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should add history after click on cell", () => {
    const state = {
      history: [[-10, -10, -10, -10, -10, -10, -10, -10, -10]],
      turn: 1
    };
    const expectedState = {
      history: [
        [-10, -10, -10, -10, -10, -10, -10, -10, -10],
        [-10, -10, 2, -10, -10, -10, -10, -10, -10]
      ],
      turn: 1
    };
    expect(reducer(state, actions.cellClick(2, 2))).toEqual(expectedState);
  });

  it("should increase turn", () => {
    const state = {
      turn: 1
    };
    const expectedState = {
      turn: 2
    };
    expect(reducer(state, actions.increaseTurn())).toEqual(expectedState);
  });

  it("should decrease turn after step back", () => {
    const state = {
      turn: 5
    };
    const expectedState = {
      turn: 4
    };
    expect(reducer(state, actions.stepBack())).toEqual(expectedState);
  });

  it("should return turn if turn equals 0 after step back", () => {
    const state = {
      turn: 0
    };
    const expectedState = {
      turn: 0
    };
    expect(reducer(state, actions.stepBack())).toEqual(expectedState);
  });

  it("should increase turn after step forward", () => {
    const state = {
      turn: 1,
      history: [
        [-10, -10, -10, -10, -10, -10, -10, -10, -10],
        [-10, -10, 2, -10, -10, -10, -10, -10, -10]
      ]
    };
    const expectedState = {
      turn: 2,
      history: [
        [-10, -10, -10, -10, -10, -10, -10, -10, -10],
        [-10, -10, 2, -10, -10, -10, -10, -10, -10]
      ]
    };
    expect(reducer(state, actions.stepForward())).toEqual(expectedState);
  });

  it("should set player 2", () => {
    const state = {
      player: 1
    };
    const expectedState = {
      player: 2
    };
    expect(reducer(state, actions.changePlayer())).toEqual(expectedState);
  });
  it("should set player 1", () => {
    const state = {
      player: 2
    };
    const expectedState = {
      player: 1
    };
    expect(reducer(state, actions.changePlayer())).toEqual(expectedState);
  });

  it("should set winner", () => {
    const state = {
      winner: false,
      score: {
        player1: 0,
        player2: 0
      }
    };
    const expectedState = {
      winner: { player: 1, solution: 0 },
      score: {
        player1: 1,
        player2: 0
      }
    };
    expect(reducer(state, actions.setWinner(1, 0))).toEqual(expectedState);
  });

  it("should reset game", () => {
    const state = {
      history: [
        [-10, -10, -10, -10, -10, -10, -10, -10, -10],
        [-10, 1, -10, -10, -10, -10, -10, -10, -10],
        [-10, 1, 2, -10, -10, -10, -10, -10, -10],
        [-10, 1, 2, -10, 1, -10, -10, -10, -10],
        [-10, 1, 2, -10, 1, -10, 2, -10, -10],
        [1, 1, 2, -10, 1, -10, 2, -10, -10]
      ],
      turn: 5,
      player: 2,
      winner: { player: 1, solution: 0 }
    };
    const expectedState = {
      history: [[-10, -10, -10, -10, -10, -10, -10, -10, -10]],
      turn: 0,
      player: 2,
      winner: false
    };
    expect(reducer(state, actions.anew())).toEqual(expectedState);
  });

  it("should increase game counter", () => {
    const state = {
      gameCount: 2
    };
    const expectedState = {
      gameCount: 3
    };
    expect(reducer(state, actions.increaseGameCounter())).toEqual(
      expectedState
    );
  });
});
