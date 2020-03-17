export const CELL_CLICK = "CELL_CLICK";
export const STEP_BACK = "STEP_BACK";
export const STEP_FORWARD = "STEP_FORWARD";
export const INCREASE_TURN = "INCREASE_TURN";
export const CHANGE_PLAYER = "CHANGE_PLAYER";
export const SET_WINNER = "SET_WINNER";
export const ANEW = "ANEW";
export const INCREASE_GAME_COUNTER = "INCREASE_GAME_COUNTER";

export const cellClick = (player, idx) => ({
  type: CELL_CLICK,
  player,
  idx
});

export const stepBack = () => ({
  type: STEP_BACK
});

export const stepForward = () => ({
  type: STEP_FORWARD
});

export const increaseTurn = () => ({
  type: INCREASE_TURN
});

export const changePlayer = () => ({
  type: CHANGE_PLAYER
});

export const setWinner = (player, solution) => ({
  type: SET_WINNER,
  player,
  solution
});

export const anew = () => ({
  type: ANEW
});

export const increaseGameCounter = () => ({
  type: INCREASE_GAME_COUNTER
});
