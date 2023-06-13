import React from "react";
import styles from "./styles.module.css";
import Error from "../error/error";
const Loader = ({ notfound }) => {
  return (
    <div className={styles.one}>
      <span className={styles.loader}></span>;{!!notfound && <Error />}
    </div>
  );
};

export default Loader;
