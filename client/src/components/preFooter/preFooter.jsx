import React from "react";
import styles from "./styles.module.css";

const PreFooter = () => {
  return (
    <div className={styles.prefooter}>
      <div className={styles.two}>
        <div className={styles.one}>
          <a href="/catalogs">
            <h4>PRODUCTOS</h4>
          </a>
          <a href="/catalogs/calzado">Calzado</a>
          <a href="/catalogs/ropa">Ropa</a>
          <a href="/catalogs/calzado/botines">Botines</a>
          <a href="/catalogs/accesorio">Accesorios</a>
          <br />
          <a href="/catalogs/novedades">Novedades</a>
          {/* <a href="/catalogs/marcas">Marcas</a> */}
        </div>
        <div className={styles.one}>
          <a href="/catalogs/all">
            <h4>DEPORTE</h4>
          </a>
          <a href="/catalogs/deporte/seleccion">Seleccon Arg</a>
          <a href="/catalogs/deporte/river">River Plate</a>
          <a href="/catalogs/deporte/boca">boca</a>
          <a href="/catalogs/deporte/futbol">Fútbol</a>
          <a href="/catalogs/deporte/basquet">Básquet</a>
        </div>
      </div>
      <div className={styles.two}>
        <div className={styles.one}>
          <a href="#">
            <h4>ASISTENCIA</h4>
          </a>
          {/* <img src={img} alt="boton" /> */}
          <button>--------</button>
          <a href="/faqs">Preguntas Frecuentes</a>
          <span>Guias de Tallas</span>
          <span>Mapa del Sitio</span>
          <span>Realizar Pedidos</span>
          <span>Personalizados</span>
        </div>

        <div className={styles.one}>
          <a href="#">
            <h4>INFORMACIÓN DE LA EMPRESA</h4>
          </a>
          <span>Acerca de MD</span>
          <a href="#">
            <h4>SEGUINOS</h4>
          </a>
          <div>
            <a
              href="https://www.facebook.com/natalia1978todofutbol/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
              >
                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/mercado.deporte?igshid=MzNlNGNkZWQ4Mg=="
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
              >
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
              </svg>
            </a>
            <a href="https://wa.me/541161320815" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
