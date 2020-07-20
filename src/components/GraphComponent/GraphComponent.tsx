import React from "react";
import styles from "./GraphComponent.module.scss";
import { observer } from "mobx-react";
import { useAlgoStore } from "../../contexts";

const GraphComponent = observer(() => {
  const algoStore = useAlgoStore();

  return (
    <div className={styles["container"]}>
      <h1>{algoStore.selectedAlgorithm || "Graph Component"}</h1>
      <div className={styles["graph"]}></div>
    </div>
  );
});

export default GraphComponent;
