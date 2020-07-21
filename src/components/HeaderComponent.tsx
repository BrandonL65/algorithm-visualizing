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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-chart-bar"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#00BCD4"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <rect x="3" y="12" width="6" height="8" rx="1" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
        <line x1="4" y1="20" x2="18" y2="20" />
      </svg>
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
