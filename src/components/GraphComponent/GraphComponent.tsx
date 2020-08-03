import React from "react";
import styles from "./GraphComponent.module.scss";
import { observer } from "mobx-react";
import { useAlgoStore } from "../../contexts";

const GraphComponent = observer(() => {
  const algoStore = useAlgoStore();
  const { graphHeights, loopIndex } = algoStore;

  let allDivs = graphHeights.map((height, idx) => {
    let heightDisplayed = height > 5 ? height : null;
    if (idx === loopIndex || idx === loopIndex + 1) {
      return (
        <div
          key={idx}
          style={{ height: `${height}%` }}
          className={styles["highlighted-mini-div"]}
        >
          <p className={styles["height-text-selected"]}>{heightDisplayed}</p>
        </div>
      );
    } else {
      return (
        <div
          key={idx}
          style={{ height: `${height}%` }}
          className={styles["mini-div"]}
        >
          <p className={styles["height-text"]}>{heightDisplayed}</p>
        </div>
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
