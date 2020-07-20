import React from "react";
import { observer } from "mobx-react";
import { useAlgoStore } from "../contexts";
import styles from "./HeaderComponent.module.scss";
import { Button } from "antd";

const HeaderComponent = observer(() => {
  const algoStore = useAlgoStore();
  console.log(algoStore.selectedAlgorithm);

  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>Algo Visualizer</h1>
      <Button
        className={styles["button"]}
        onClick={() => (algoStore.selectedAlgorithm = "Bubble Sort")}
      >
        Bubble Sort
      </Button>
      <Button
        className={styles["button"]}
        onClick={() => (algoStore.selectedAlgorithm = "Merge Sort")}
      >
        Merge Sort
      </Button>
    </div>
  );
});

export default HeaderComponent;
