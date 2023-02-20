import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <div className={`${styles.dot} ${styles.dot1}`}></div>
      <div className={`${styles.dot} ${styles.dot2}`}></div>
      <div className={`${styles.dot} ${styles.dot3}`}></div>
    </div>
  );
}

export default Loader;
