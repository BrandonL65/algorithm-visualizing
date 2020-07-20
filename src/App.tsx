import React from "react";
import styles from "./App.module.scss";
import HeaderContainer from "./containers/HeaderContainer";
import AlgoContainer from "./containers/AlgoContainer";
import "antd/dist/antd.css";

function App() {
  return (
    <div className={styles["App"]}>
      <div className={styles["header-container"]}>
        <HeaderContainer />
      </div>
      <div className={styles["algosection"]}>
        <AlgoContainer />
      </div>
    </div>
  );
}

export default App;
