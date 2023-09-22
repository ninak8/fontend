import React from "react";
import styles from "./styles.module.css";

const Warning = ({ setOpen }) => {
  return (
    <div className={styles.warning}>
      <div className={styles.center}>
        <p>
          HACE TU PEDIDO POR NUESTRO{" "}
          <a href="https://wa.me/541161320815" target="_blank" rel="noreferrer">
            {" "}
            WHATSAPP{" "}
          </a>
        </p>
        <button onClick={() => setOpen(false)}>
          <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="#101010"
            stroke="#000000"
            width="40"
            height="40"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <line x1="16" y1="16" x2="48" y2="48"></line>
              <line x1="48" y1="16" x2="16" y2="48"></line>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Warning;
