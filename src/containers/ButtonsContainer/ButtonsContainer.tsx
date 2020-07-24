import React from "react";
import ButtonsComponent from "../../components/ButtonsComponent/ButtonsComponent";
import { observer } from "mobx-react";
import { useAlgoStore } from "../../contexts";

const ButtonsContainer = observer(() => {
  const algoStore = useAlgoStore();
  const {
    scrambleGraphHeights,
    bubbleSortArray,
    slowDown,
    speedUp,
    isAlreadySorting,
    stopAlgo,
  } = algoStore;

  const handleSort = () => {
    const { selectedAlgorithm } = algoStore;
    if (selectedAlgorithm === "Bubble Sort" && !isAlreadySorting) {
      bubbleSortArray();
    }
  };

  return (
    <>
      <ButtonsComponent
        scramble={() => scrambleGraphHeights()}
        slowDown={() => slowDown()}
        speedUp={() => speedUp()}
        sort={() => handleSort()}
        stop={() => stopAlgo()}
      />
    </>
  );
});

export default ButtonsContainer;
