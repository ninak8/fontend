import React, { useState } from "react";
import styles from "./styles.module.css";
import icon from "../../images/icon.png";
import SearchBar from "../searcBar/serachBar";

const NavBar = () => {
  const [view, setview] = useState({
    all: false,
    kid: false,
    accessories: false,
  });

  const handleMouse = (name) => {
    setview({
      ...view,
      [name]: true,
    });
  };
  const handleMouseOut = () => {
    setview({
      all: false,
      kid: false,
      accessories: false,
    });
  };
  return (
    <div className={styles.navBar}>
      <a href="/">
        <img src={icon} alt="logo MD" className={styles.icon} />
      </a>
      <div onMouseLeave={handleMouseOut} className={styles.containerButtons}>
        <div
          onMouseOver={() => handleMouse("all")}
          className={styles.principalButton}
        >
          <a href="/catalogs/all">
            <span name="all">TODO</span>
          </a>
        </div>
        {view.all && (
          <div className={styles.dropDowns}>
            <div className={styles.dropDownsButtons}>
              {/* <a href="/catalogs?q=calzado"> */}
              <a href="/catalogs/calzado">
                <button className={styles.title}>CALZADOS</button>
              </a>
              {/* </a> */}
              <img
                src="https://i.ibb.co/dJ8hHmB/My-project-1-27.png"
                alt="imagen calzado"
                width={170}
                height={130}
              />
              <a href="/catalogs/calzado/novedades">Novedades</a>
              <a href="/catalogs/calzado/botines">Botínes</a>
              <a href="/catalogs?q=calzado?q=Cal-originales">Originales</a>
            </div>
            <div className={styles.dropDownsButtons}>
              {/* <a href="/catalogs?q=ropa"> */}
              <a href="/catalogs/ropa">
                <button className={styles.title}>ROPA</button>
              </a>
              {/* </a> */}
              <img
                src="https://i.ibb.co/YbxRVxB/My-project-1-26.png"
                alt="imagen remera"
                width={170}
                height={130}
              />
              <a href="/catalogs?q=ropa?q=novedades">Novedades</a>
              <a href="/catalogs/ropa/remera">Remeras</a>
              <a href="/catalogs/ropa/pantalon">Pantalones</a>
              <a href="/catalogs/ropa/camiseta">Camisetas de fútbol</a>
              <a href="/catalogs/ropa/short">Shorts</a>
              <a href="/catalogs/ropa?q=Rop-original">Originales</a>
            </div>
            <div className={styles.dropDownsButtons}>
              {/* <a href="/catalogs?q=accesorio"> */}
              <a href="/catalogs/accesorio">
                <button className={styles.title}>ACCESORIOS</button>
              </a>
              {/* </a> */}
              <img
                src="https://i.ibb.co/bNYGzN6/My-project-1-28.png"
                alt="imagen guantes"
                width={170}
                height={130}
              />
              <a href="/catalogs/accesorio/pelota">Pelotas</a>
              <a href="/catalogs/accesorio/gorra">Gorras</a>
              <a href="/catalogs/accesorio/media">Medias</a>
              <a href="/catalogs?q=accesorio?q=guante">Guantes</a>
            </div>
            <div className={styles.dropDownsButtons}>
              <a href="/catalogs/deporte">
                <button className={styles.title}>DEPORTE</button>
              </a>
              <a href="/catalogs/deporte/futbol">Fútbol</a>
              <a href="/catalogs/deporte/basquet">Básquet</a>
              <a href="/catalogs/deporte/tenis">Tenis</a>
              <a href="/catalogs/deporte/voley">Voley</a>
            </div>
          </div>
        )}
        {/* <div
          onMouseOver={() => handleMouse("kid")}
          className={styles.principalButton}
        >
          <a href="/catalogs?q=kids">
            <span name="kid">NIÑOS</span>
          </a>
        </div>
        {view.kid && (
          <div className={styles.dropDowns}>
            <div className={styles.dropDownsButtons}>
              <a href="/catalogs/calzado">
              <span>CALZADOS</span>
              </a>
              <a href="/catalogs?q=calzado?q=novedades">Novedades</a>
              <a href="/catalogs?q=calzado?q=botines">Botínes</a>
              <a href="/catalogs?q=calzado?q=Cal-originales">Originales</a>
            </div>
            <div className={styles.dropDownsButtons}>
              <span>ROPA</span>
              <p>Novedades</p>
              <p>Remeras</p>
              <p>Pantalones</p>
              <p>Camisetas de fútbol</p>
              <p>Shorts</p>
              <p>Originales</p>
            </div>
            <div className={styles.dropDownsButtons}>
              <span>ACCESORIOS</span>
              <p>Pelotas</p>
              <p>Gorras</p>
              <p>Medias</p>
              <p>Guantes</p>
            </div>
            <div className={styles.dropDownsButtons}>
              <span>DEPORTES</span>
              <p>Fútbol</p>
              <p>Básquet</p>
              <p>Tenis</p>
              <p>Voley</p>
            </div>
          </div>
        )} */}
        <div
          onMouseOver={() => handleMouse("accessories")}
          className={styles.principalButton}
        >
          <a href="/catalogs/accesorio">
            <p name="accessories">ACCESORIOS</p>
          </a>
        </div>
        {view.accessories && (
          <div className={styles.dropDowns}>
            <div className={styles.dropDownsButtons}>
              <a href="/catalogs/accesorio/futbol">
                <button className={styles.title}>FÚTBOL</button>
              </a>
              <img
                src="https://st1.uvnimg.com/dims4/default/68ed1d3/2147483647/thumbnail/1240x698/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fd5%2F28%2F25d52bb54b53b79e1749cbc31009%2F3b7464589f9240c0b8e9de7f073c2826"
                alt="img fútbol"
                width={175}
                height={100}
              />
              <a href="/catalogs/accesorio?q=novedades">Novedades</a>
              <a href="/catalogs/accesorio/guantes">Gauntes</a>
              <a href="/catalogs/accesorio/canilleras">Canilleras</a>
              <a href="/catalogs/accesorio/medias">Medias</a>
              <a href="/catalogs/accesorio/pelotas">Pelotas</a>
              <a href="/catalogs/accesorio/bolso">Bolso Deportivo</a>
              <a href="/catalogs/accesorio/targetas">Tarjetas</a>
              <a href="/catalogs/accesorio/silbatos">Silbatos</a>
              <a href="/catalogs/accesorio/conos">Conos</a>
              <a href="/catalogs/accesorio/venda">Venda Elastica</a>
            </div>
            <div className={styles.dropDownsButtons}>
              <a href="/catalogs/accesorio/basquet">
                <button className={styles.title}>BÁSQUET</button>
              </a>
              <img
                src="https://ca-times.brightspotcdn.com/dims4/default/991942e/2147483647/strip/true/crop/5659x3773+0+0/resize/1200x800!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7a%2Fcb%2F111797d34e4fb786efb9ad76589a%2Fwarriors-lakers-basketball-75586.jpg"
                alt="img básquet"
                width={155}
                height={100}
              />
              <a href="/catalogs/accesorio?q=novedades">Novedades</a>
              <a href="/catalogs/accesorio/pelotas">Pelotas</a>
              <a href="/catalogs/accesorio/red">Red</a>
              <a href="/catalogs/accesorio/shorts">Shorts</a>
              <a href="/catalogs/accesorio/venda">Venda Elastica</a>
            </div>
            <div className={styles.dropDownsButtons}>
              <a href="/catalogs/accesorio/voley">
                <button className={styles.title}>VOLEY</button>
              </a>
              <img
                src="https://resizer.glanacion.com/resizer/20_FmomeWH9PW_ag6w4zWawOLu8=/1200x800/filters:format(webp):quality(80):focal(3516x1082:3526x1072)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/AGEXE65LKFAY3I2WCGRLNUBIWY.jpg"
                alt="img deporte"
                width={155}
                height={100}
              />
              <a href="/catalogs/accesorio/novedades">Novedades</a>
              <a href="/catalogs/accesorio/pelotas">Pelotas</a>
              <a href="/catalogs/accesorio/bolsos">Bolsos</a>
            </div>
            <div className={styles.dropDownsButtons}>
              <a href="/catalogs/accesorio/otros">
                <button className={styles.title}>OTROS</button>
              </a>
              <a href="/catalogs/accesorio/protector">Protector Bucal</a>
              <a href="/catalogs/accesorio/antiparras">Antiparras</a>
              <a href="/catalogs/accesorio/soga">Soga Para Saltar</a>
              <a href="/catalogs/accesorio/conos">Conos</a>
              <a href="/catalogs/accesorio/bandas">Bandas Elásticas</a>
              <a href="/catalogs/accesorio/pesas">Pesas</a>
            </div>
          </div>
        )}
      </div>
      <div className={styles.rigth}>
        <div>
          <SearchBar></SearchBar>
          <a href="/faqs">
            <div className={styles.divFaqs}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#101010" }}
              >
                <path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
