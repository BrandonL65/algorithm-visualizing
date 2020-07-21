import React from "react";
import { Button } from "antd";
import styles from "./ButtonsComponent.module.scss";

interface ButtonsComponentProps {
  scramble: () => void;
  slowDown: () => void;
  speedUp: () => void;
  sort: () => void;
  stop: () => void;
}

const ButtonsComponent = (props: ButtonsComponentProps) => {
  const { scramble, slowDown, speedUp, sort, stop } = props;

  return (
    <div className={styles["container"]}>
      <div className={styles["top-row"]}>
        <Button onClick={slowDown}>Slow Down</Button>
        <Button onClick={speedUp}>Speed Up</Button>
      </div>
      <div className={styles["bottom-row"]}>
        <Button onClick={scramble}>Generate Random</Button>
        <Button onClick={sort}>Sort</Button>
        <Button onClick={stop}>Stop</Button>
      </div>
    </div>
  );
};

export default ButtonsComponent;
