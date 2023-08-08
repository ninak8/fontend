import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import styles from "./styles.module.css";
const Teams = () => {
  const location = useLocation();
  const river = {
    name: "River Plate",
    big: "https://www.cariverplate.com.ar/imagenes/banners/2023-02/42-plantelprofesional.jpg",
    bigTow:
      "https://www.cariverplate.com.ar/imagenes/archivos/2022-05/400-216670-4tos-river-tigre-103.jpg",
    bigThree:
      "https://www.cariverplate.com.ar/imagenes/archivos/2022-05/216698-4tos-river-tigre-130.jpg",
    movilOne:
      "https://www.cariverplate.com.ar/imagenes/archivos/2022-05/400-216670-4tos-river-tigre-103.jpg",
    movilTow:
      "https://www.cariverplate.com.ar/imagenes/contenidos/2022-06/400-21749-galeria.jpg",
  };
  const boca = {
    name: "Boca Juniors",
    big: "https://i.ibb.co/zryv6qG/bombonera.jpg",
    bigTow: "https://i.ibb.co/31VpYrx/CXDMUNLJLKDEEXCE3-WEMU6-MZRQ.jpg",
    bigThree: "https://i.ibb.co/RPxMpZt/tdmlvy8byyasvnshh57g.jpg",
    movilOne: "https://i.ibb.co/RPxMpZt/tdmlvy8byyasvnshh57g.jpg",
    movilTow: "https://i.ibb.co/7z6WGhX/caw-SCa3-SQ-720x0-1.jpg",
  };
  const inter = {
    name: "Inter Miami CF",
    big: "https://i.ibb.co/b70hRgg/inter-Miami.jpg",
    bigTow: "https://i.ibb.co/0YzbfCW/muchachos.png",
    bigThree: "https://i.ibb.co/ZRjPJmb/2-PP4-IQB5-X2-NOYJ6-P6-VKF3-RIKL4.jpg",
    movilOne: "https://i.ibb.co/0YzbfCW/muchachos.png",
    movilTow:
      "https://fotografias.lasexta.com/clipping/cmsimages01/2023/07/22/F9A8D7A1-D240-4266-A141-EECB2E2BA1AB/leo-messi-celebra-gol-inter-miami_98.jpg?crop=1200,675,x0,y0&width=1900&height=1069&optimize=low&format=webply",
  };
  const seleccion = {
    name: "Selección Argentina",
    big: "https://i.ibb.co/3Rh0drF/lg.jpg",
    bigTow: "https://i.ibb.co/WGC8HQG/Atajada-Dibu.jpg",
    bigThree: "https://i.ibb.co/ChMfTr0/026304600-1687241002-Garnacho-4.jpg",
    movilOne:
      "https://media.diariopopular.com.ar/p/2a03122b2cc4bea81fa30e2af1067fab/adjuntos/143/imagenes/008/059/0008059414/1140x0/smart/dibu-martinezjfif.jfif",
    movilTow:
      "https://lmdiario.com.ar/download/multimedia.normal.af6cde1cfcc75bda.6a756c69616e20616c766172657a20466f746f204e41205245555445525320465f6e6f726d616c2e77656270.webp",
  };
  //
  let equipo;
  if (location.pathname === "/catalogs/deporte/river") equipo = river;
  else if (location.pathname === "/catalogs/deporte/boca") equipo = boca;
  else if (location.pathname === "/catalogs/deporte/seleccion")
    equipo = seleccion;
  else if (location.pathname === "/catalogs/deporte/inter") equipo = inter;
  else {
    return null;
  }
  //
  return (
    <div className={styles.teams}>
      <h1>{equipo.name}</h1>
      <img className={styles.big} src={equipo.big} alt="portada" />
      <img className={styles.bigtwo} src={equipo.bigTow} alt="imgOne" />
      <img className={styles.bigtwo} src={equipo.bigThree} alt="imgTwo" />
      <div className={styles.movil}>
        <img
          className={styles.bigtwomovil}
          src={equipo.movilOne}
          alt="imgOne"
        />
        <img
          className={styles.bigtwomovil}
          src={equipo.movilTow}
          alt="imgTwo"
        />
      </div>
    </div>
  );
};

export default Teams;
