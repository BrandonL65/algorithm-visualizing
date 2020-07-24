import React from "react";
import styles from "./GraphComponent.module.scss";
import { observer } from "mobx-react";
import { useAlgoStore } from "../../contexts";

const GraphComponent = observer(() => {
  const algoStore = useAlgoStore();
  const { graphHeights, loopIndex } = algoStore;

  let allDivs = graphHeights.map((height, idx) => {
    if (idx === loopIndex || idx === loopIndex + 1) {
      return (
        <div
          key={idx}
          style={{ height: height }}
          className={styles["highlighted-mini-div"]}
        ></div>
      );
    } else {
      return (
        <div
          key={idx}
          style={{ height: height }}
          className={styles["mini-div"]}
        ></div>
      );
    }
  });

  return (
    <div className={styles["container"]}>
      <h1>{algoStore.selectedAlgorithm || "Graph Component"}</h1>
      <div className={styles["graph"]}>{allDivs}</div>
    </div>
  );
});

export default GraphComponent;
