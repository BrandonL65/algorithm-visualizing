import React from "react";
import styles from "./HeaderComponent.module.scss";
import { Button } from "antd";

const HeaderComponent = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>Algo Visualizer</h1>
      <Button className={styles["button"]}>Bubble Sort</Button>
      <Button className={styles["button"]}>Merge Sort</Button>
    </div>
  );
};

export default HeaderComponent;
