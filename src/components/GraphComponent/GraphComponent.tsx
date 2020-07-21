import React from "react";
import styles from "./GraphComponent.module.scss";
import { observer } from "mobx-react";
import { useAlgoStore } from "../../contexts";

const GraphComponent = observer(() => {
  const algoStore = useAlgoStore();
  const { graphHeights } = algoStore;

  let allDivs = graphHeights.map((height) => {
    return (
      <div style={{ height: height }} className={styles["mini-div"]}></div>
    );
  });

  return (
    <div className={styles["container"]}>
      <h1>{algoStore.selectedAlgorithm || "Graph Component"}</h1>
      <div className={styles["graph"]}>{allDivs}</div>
    </div>
  );
});

//bad commit 1
//bad commit 2
export default GraphComponent;
