import AlgoStore from "./stores/AlgoStore";
import React from "react";

export const algoStoreContext = React.createContext<AlgoStore>(new AlgoStore());

export const useAlgoStore = () => {
  return React.useContext(algoStoreContext);
};
