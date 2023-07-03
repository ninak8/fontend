import React from "react";
import styles from "./styles.module.css";

const Card = ({ img, name, score, id, tag }) => {
  let start = [];
  for (let i = 0; i < score; i++) {
    if ([i]) {
      start.push("item");
    }
  }
  let key = 0;
  if (name) {
    return (
      <div className={styles.card}>
        <a href={`/detail/${id}`}>
          <img src={img} alt={name} />
          <div className={styles.info}>
            <div className={styles.starts}>
              {start.map((start) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  style={{ fill: "#ffd904" }}
                  key={key++}
                >
                  {start}
                  <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                </svg>
              ))}
            </div>
            <span>{name}</span>
            {/* <span>{tag}</span> */}
          </div>
        </a>
      </div>
    );
  } else {
    return null;
  }
};

export default Card;
