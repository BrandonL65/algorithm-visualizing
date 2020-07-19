import React from "react";
import styles from "./App.module.scss";
import HeaderContainer from "./containers/HeaderContainer";
import "antd/dist/antd.css";

function App() {
  return (
    <div className={styles["App"]}>
      <div className={styles["header-container"]}>
        <HeaderContainer />
      </div>
      <div className={styles["algosection"]}>
        <h1>Algo section</h1>
      </div>
    </div>
  );
}

export default App;
