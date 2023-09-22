import React from "react";

import styles from "./styles.module.css";

const Map = () => {
  return (
    <div className={styles.map}>
      <h1>MAPA DEL SITIO</h1>
      <div className={styles.center}>
        <div className={styles.children}>
          <h2>HOMBRE</h2>
          <a href="/catalogs/all/hombre">Todo para Hombre</a>
          <a href="/catalogs/calzado/hombre">Zapatillas Hombre</a>
          <a href="/catalogs/ropa/hombre">Ropa Hombre</a>
          <a href="/catalogs/accesorio/hombre">Accesorios Hombre</a>
        </div>
        <div className={styles.children}>
          <h2>MUJER</h2>
          <a href="/catalogs/all/mujer">Todo para Mujer</a>
          <a href="/catalogs/calzado/mujer">Zapatillas Mujer</a>
          <a href="/catalogs/ropa/mujer">Ropa Mujer</a>
          <a href="/catalogs/accesorio/mujer">Accesorios Mujer</a>
        </div>
        <div className={styles.children}>
          <h2>PERFORMANCE</h2>
          <a href="/catalogs/deporte?q=ropa">Ropa deportiva</a>
        </div>
        <div className={styles.children}>
          <h2>FÚTBOL</h2>
          <a href="/catalogs/deporte/futbol">Mercado Deporte Fútbol</a>
          <a href="/catalogs/calzado/botines">Botines Fútbol</a>
          <a href="/catalogs/ropa/futbol">Ropa de Fútbol</a>
          <a href="/catalogs/accesorio/futbol">Accesorios de Fútbol</a>
          <a href="/catalogs/accesorio/pelota">Pelotas de Fútbol</a>
          <a href="/catalogs/deporte/seleccion">Selección Argentina AFA</a>
          <a href="/catalogs/deporte/river">River Plate</a>
          <a href="/catalogs/deporte/boca">Boca Juniors</a>
        </div>
        <div className={styles.children}>
          <h2>BASKETBALL</h2>
          <a href="/catalogs/deporte/basquet">Mercado Deporte Básquet</a>
          <a href="/catalogs/ropa/basquet">Ropa Báquet</a>
          <a href="/catalogs/accesorio/basquet">Accesorios Básquet</a>
        </div>
        <div className={styles.children}>
          <h2>TENIS</h2>
          <a href="/catalogs/deporte/tenis">Mercado Deporte Tenis</a>
          <a href="/catalogs/ropa/tenis">Ropa Tenis</a>
          <a href="/catalogs/accesorio/tenis">Accesorios Tenis</a>
        </div>
        <div className={styles.children}>
          <h2>NATACIÓN</h2>
          <a href="/catalogs/deporte/natacion">Mercado Deporte Natación</a>
          <a href="/catalogs/ropa/tenis">Ropa Natación</a>
          <a href="/catalogs/accesorio/tenis">Accesorios Natación</a>
        </div>
        <div className={styles.children}>
          <h2>TEMAS DE AYUDA</h2>
          <a href="/guia-de-talles">Guía de Talles</a>
          <a href="/catalogs/all">Productos Mercado Deporte</a>
          <a href="https://wa.me/541161320815" target="_blank" rel="noreferrer">
            Realizar Pedidos
          </a>
          <a href="/ayuda/faqs">Preguntas Frecuentes (FAQs)</a>
        </div>
      </div>
    </div>
  );
};

export default Map;
