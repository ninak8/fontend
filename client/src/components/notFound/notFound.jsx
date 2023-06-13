import React from "react";
import styles from "./styles.module.css";

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 24 24"
        style={{ fill: "grey" }}
      >
        <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"></path>
        <path d="M11 6h2v8h-2zm0 10h2v2h-2z"></path>
      </svg>
      <span>No se encuentra :(</span>
    </div>
  );
};

export default NotFound;
