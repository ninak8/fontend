import React, { useState } from "react";
import SearchBar from "../searcBar/serachBar";

import styles from "./styles.module.css";

const NavBar = () => {
  //
  const [all, setAll] = useState(false);
  const [accessories, setAccessories] = useState(false);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  //
  const [allMovil, setAllMovil] = useState(false);
  const [accessoriesMovil, setAccessoriesMovil] = useState(false);

  return (
    <div className={styles.navBar}>
      <div className={styles.center}>
        <a href="/">
          <img
            src="https://i.ibb.co/XxKd25d/Picsart-23-06-13-16-44-51-813.png"
            alt="logo MD"
            className={styles.icon}
          />
        </a>
        <div className={styles.menus}>
          <div
            onMouseLeave={() => setAll(false)}
            className={styles.containerButtons}
          >
            <div
              onMouseOver={() => setAll(true)}
              className={styles.principalButton}
            >
              <a href="/catalogs/all">
                <span name="all">TODO</span>
              </a>
            </div>
            {all && (
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
                  <a href="/catalogs/ropa/novedades">Novedades</a>
                  <a href="/catalogs/ropa/remera">Remeras</a>
                  <a href="/catalogs/ropa/pantalon">Pantalones</a>
                  <a href="/catalogs/ropa/camiseta">Camisetas de fútbol</a>
                  <a href="/catalogs/ropa/short">Shorts</a>
                  {/* <a href="/catalogs/ropa?q=Rop-original">Originales</a> */}
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
                  <a href="/catalogs/accesorio/guante">Guantes</a>
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
          </div>
          {/* //?--------------------------*/}
          <div
            onMouseLeave={() => setAccessories(false)}
            className={styles.containerButtons}
          >
            <div
              onMouseOver={() => setAccessories(true)}
              className={styles.principalButton}
            >
              <a href="/catalogs/accesorio">
                <p name="accessories">ACCESORIOS</p>
              </a>
            </div>

            {accessories && (
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
                  <a href="/catalogs/accesorio/novedades">Novedades</a>
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
                  <a href="/catalogs/accesorio/novedades">Novedades</a>
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
        </div>

        <div className={styles.rigth}>
          <SearchBar />
          <div className={styles.containerFAQS}>
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
        {/* //!----------------------------------------------------------------------------------------------------- */}
        <div className={styles.movil}>
          <button
            onClick={() => setSearch(true)}
            className={styles.buttonBurger}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              style={{ fill: "#ffd904" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
              />
            </svg>
          </button>

          {search && (
            <div className={styles.movilMenu}>
              <div className={styles.top}>
                <button
                  onClick={() => setSearch(false)}
                  className={styles.buttonOut}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    style={{ fill: "#ffd904" }}
                  >
                    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                  </svg>
                </button>
              </div>
              <div className={styles.nav}>
                <SearchBar />
              </div>
            </div>
          )}

          <button onClick={() => setMenu(true)} className={styles.buttonBurger}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              style={{ fill: "#ffd904" }}
              className={styles.burger}
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </button>
          {menu && (
            <div className={styles.movilMenu}>
              <div className={styles.top}>
                <button
                  onClick={() => setMenu(false)}
                  className={styles.buttonOut}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    style={{ fill: "#ffd904" }}
                  >
                    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                  </svg>
                </button>
              </div>
              {/* +++++++++++ OPTIONS +++++++++++++ */}
              <div className={styles.options}>
                <div>
                  {allMovil ? (
                    // flechita top
                    <button onClick={() => setAllMovil(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        style={{ fill: "#ffd904" }}
                      >
                        <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
                      </svg>
                      TODO
                    </button>
                  ) : (
                    // flechita bottom
                    <button onClick={() => setAllMovil(true)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        style={{ fill: "#ffd904" }}
                      >
                        <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                      </svg>
                      TODO
                    </button>
                  )}
                </div>
                {allMovil && (
                  <div>
                    <div className={styles.dropDownsButtonsMovil}>
                      <a href="/catalogs/calzado">
                        <button className={styles.title}>CALZADOS</button>
                      </a>
                      <a href="/catalogs/all">Todo</a>
                      <a href="/catalogs/calzado/novedades">Novedades</a>
                      <a href="/catalogs/calzado/botines">Botínes</a>
                      <a href="/catalogs?q=calzado?q=Cal-originales">
                        Originales
                      </a>
                    </div>
                    <div className={styles.dropDownsButtonsMovil}>
                      <a href="/catalogs/ropa">
                        <button className={styles.title}>ROPA</button>
                      </a>
                      <a href="/catalogs?q=ropa?q=novedades">Novedades</a>
                      <a href="/catalogs/ropa/remera">Remeras</a>
                      <a href="/catalogs/ropa/pantalon">Pantalones</a>
                      <a href="/catalogs/ropa/camiseta">Camisetas de fútbol</a>
                      <a href="/catalogs/ropa/short">Shorts</a>
                      <a href="/catalogs/ropa?q=Rop-original">Originales</a>
                    </div>
                    <div className={styles.dropDownsButtonsMovil}>
                      <a href="/catalogs/accesorio">
                        <button className={styles.title}>ACCESORIOS</button>
                      </a>
                      <a href="/catalogs/accesorio/pelota">Pelotas</a>
                      <a href="/catalogs/accesorio/gorra">Gorras</a>
                      <a href="/catalogs/accesorio/media">Medias</a>
                      <a href="/catalogs?q=accesorio?q=guante">Guantes</a>
                    </div>
                    <div className={styles.dropDownsButtonsMovil}>
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

                <div>
                  {accessoriesMovil ? (
                    // flechita top
                    <button onClick={() => setAccessoriesMovil(false)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        style={{ fill: "#ffd904" }}
                      >
                        <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
                      </svg>
                      ACCESORIOS
                    </button>
                  ) : (
                    // flechita bottom
                    <button onClick={() => setAccessoriesMovil(true)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        style={{ fill: "#ffd904" }}
                      >
                        <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                      </svg>
                      ACCESORIOS
                    </button>
                  )}
                </div>

                {accessoriesMovil && (
                  <div>
                    <div className={styles.dropDownsButtonsMovil}>
                      <a href="/catalogs/accesorio">
                        <button className={styles.title}>TODO</button>
                      </a>
                      <a href="/catalogs/accesorio/pelota">Pelotas</a>
                      <a href="/catalogs/accesorio/gorra">Gorras</a>
                      <a href="/catalogs/accesorio/media">Medias</a>
                      <a href="/catalogs?q=accesorio?q=guante">Guantes</a>
                    </div>
                    <div className={styles.dropDownsButtonsMovil}>
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
                <div className={styles.question}>
                  <a href="/faqs">
                    <span>PREGUNTAS FRECUENTES</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
