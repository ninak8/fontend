import React from "react";
import styles from "./styles.module.css";
import icon from "../../images/icon.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.one}>
        <img src={icon} alt="Logo MD" />
        <span>
          Mercado Deporte <br /> Somos equipo
        </span>
      </div>
      <div className={styles.two}>
        <div className={styles.data}>
          <a href="/map">Mapa del Sitio</a>
        </div>
        <p className={styles.c}>&#169;2023. Mercado Deporte company. </p>
        <p>Buenos Aires - Argentina</p>
      </div>
    </div>
  );
};

export default Footer;
