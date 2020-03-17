import {
  CELL_CLICK,
  INCREASE_TURN,
  STEP_BACK,
  STEP_FORWARD,
  CHANGE_PLAYER,
  SET_WINNER,
  ANEW,
  INCREASE_GAME_COUNTER
} from "./actions";

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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CELL_CLICK:
      return {
        ...state,
        history:
          state.turn === state.history.length
            ? [
                ...state.history,
                state.history[state.history.length - 1].map((el, idx) =>
                  idx === action.idx ? action.player : el
                )
              ]
            : [
                ...state.history.filter((_, idx) => idx <= state.turn),
                state.history[state.turn].map((el, idx) =>
                  idx === action.idx ? action.player : el
                )
              ]
      };
    case INCREASE_TURN:
      return {
        ...state,
        turn: state.turn + 1
      };
    case STEP_BACK:
      return {
        ...state,
        turn: state.turn > 0 ? state.turn - 1 : state.turn
      };
    case STEP_FORWARD:
      return {
        ...state,
        turn: state.turn < state.history.length ? state.turn + 1 : state.turn
      };
    case CHANGE_PLAYER:
      return {
        ...state,
        player: state.player === 1 ? 2 : 1
      };
    case SET_WINNER:
      return {
        ...state,
        winner: {
          player: action.player,
          solution: action.solution
        },
        score: {
          ...state.score,
          ["player" + action.player]: state.score["player" + action.player] + 1
        }
      };
    case ANEW:
      return {
        ...state,
        history: [[-10, -10, -10, -10, -10, -10, -10, -10, -10]],
        turn: 0,
        player: 2,
        winner: false
      };
    case INCREASE_GAME_COUNTER:
      return {
        ...state,
        gameCount: state.gameCount + 1
      };
    default:
      return state;
  }
};
