import React from "react";
import colores from "./colors.json";

import styles from "./opens.module.css";
const OpenItems = ({ open, setOpen, options, title, fnFilter }) => {
  //   console.log(options);
  return (
    <div className={styles.open}>
      {/* <div className={styles.top}> */}
      {open ? (
        // flechita top
        <button onClick={() => setOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            style={{ fill: "#ffd904" }}
          >
            <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
          </svg>
          <span>{title}</span>
        </button>
      ) : (
        // flechita bottom
        <button onClick={() => setOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            style={{ fill: "#ffd904" }}
          >
            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
          </svg>
          <span>{title}</span>
        </button>
      )}
      {/* </div> */}
      {open ? (
        <div className={styles.containerColors}>
          {options?.map((elem, i) =>
            title === "Talles" ? (
              <option
                value={elem.size}
                key={i}
                onClick={(e) => fnFilter(e)}
                className={styles.sizes}
              >
                <span>{elem.size}</span>
              </option>
            ) : (
              <option
                className={styles.optionColor}
                key={i}
                value={elem.name}
                onClick={(e) => fnFilter(e)}
                style={{
                  backgroundColor: `${colores[elem.name].color}`,
                }}
              ></option>
            )
          )}
        </div>
      ) : null}
    </div>
  );
};

export default OpenItems;
