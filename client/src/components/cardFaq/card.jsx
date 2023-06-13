import React from "react";
import styles from "./styles.module.css";
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const CardFaq = ({ img, name, id }) => {
  return (
    <div className={styles.cardFaq}>
      <img src={img} alt="icono" />
      <span>{name}</span>
    </div>
  );
};

export default CardFaq;
