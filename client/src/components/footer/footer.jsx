import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.one}>
        <img src="https://i.ibb.co/qgTdpd0/icon.png" alt="Logo MD" />
        <span>
          Mercado Deporte <br /> Somos equipo
        </span>
      </div>
      <div className={styles.two}>
        <a href="/mapa-del-sitio">Mapa del Sitio</a>
        <p className={styles.c}>&#169;2023. Mercado Deporte company.</p>
        <p>Buenos Aires - Argentina</p>
      </div>
    </footer>
  );
};

export default Footer;
