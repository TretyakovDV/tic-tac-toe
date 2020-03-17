import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import TicTacToe from "./container/TicTacToe";

export const App = () => {
  return (
    <Provider store={store}>
      <TicTacToe />
    </Provider>
  );
};
