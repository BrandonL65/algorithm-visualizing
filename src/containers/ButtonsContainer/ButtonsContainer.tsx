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
  } = algoStore;

  const handleSort = () => {
    const { selectedAlgorithm } = algoStore;
    if (selectedAlgorithm === "Bubble Sort") {
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
        stop={() => (algoStore.stopPressed = true)}
      />
    </>
  );
});

export default ButtonsContainer;
