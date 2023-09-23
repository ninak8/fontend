import React, { useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import styles from "./styles.module.css";

const Card = ({ img, name, score, id, category, max }) => {
  const location = useLocation();
  const [viewImg, setViewImg] = useState(false);

  let start = [];
  for (let i = 0; i < score; i++) {
    if ([i]) {
      start.push("item");
    }
  }
  let twoImgs;
  if (img?.length > 1) {
    twoImgs = img.slice(0, 2);
  }

  const name1 = name?.split(" ")[0];

  if (name) {
    return (
      <div
        itemscope
        itemtype="https://schema.org/Product"
        className={location.pathname === "/" ? styles.card : styles.cardMovil}
      >
        <a href={`/detail/${id}/${name1}`}>
          {img.length > 1 ? (
            <>
              {viewImg === false ? (
                <img
                  itemprop="image"
                  src={twoImgs[0]}
                  alt=""
                  onMouseOver={() => setViewImg(true)}
                />
              ) : (
                <img
                  itemprop="image"
                  src={twoImgs[1]}
                  alt=""
                  onMouseOut={() => setViewImg(false)}
                />
              )}
            </>
          ) : (
            <img itemprop="image" src={img} alt="" />
          )}
          <div
            className={
              location.pathname === "/" ? styles.starts : styles.startsBottom
            }
          >
            {start.map((start, i) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                style={{ fill: "#ffd904" }}
                key={i}
              >
                {start}
                <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
              </svg>
            ))}
          </div>
          <div className={styles.info}>
            <span itemprop="name">{name}</span>
            <p itemprop="reviewBody">{max}</p>
          </div>
        </a>
      </div>
    );
  } else {
    return null;
  }
};

export default Card;
