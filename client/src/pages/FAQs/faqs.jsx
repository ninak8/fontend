import React from "react";
// import CardFaq from "../../components/cardFaq/card";
import styles from "./styles.module.css";
import PreFooter from "../../components/preFooter/preFooter";
import Footer from "../../components/footer/footer";
// import faqs from "./faqs.json";

const Faqs = () => {
  return (
    <div className={styles.faqs}>
      <div className={styles.faqsOne}>
        <div className={styles.bottom}>
          <span>PREGUNTAS FRECUENTES</span>
          {/*  */}
          <div className={styles.questions}>
            <details>
              <summary>
                ¿Cual es la empresa responsable del envío de los productos?
              </summary>
              <p>
                Los envios se realizan por diferentes plataformas como: Via
                Cargo, Crucero Express, MD Cargas, Correo, OCA, Correo
                Argentino, Andreani etc.
              </p>
            </details>
            <details>
              <summary>¿Realizamos envíos internacionales?</summary>
              <p>Por el momento no realizamos</p>
            </details>
            {/* <details>
            <summary>¿cuanto demora el envío?</summary>
            <p>sepa judas</p>
          </details> */}
            <details>
              <summary>¿Puedo comprar por teléfono?</summary>
              <p>
                Una vez realizado el pedido por Whatsapp se abona y dentro de
                las 48hs se despacha el pedido.
              </p>
            </details>
            {/* <details>
            <summary>¿por que puede retrasarse mi pedido?</summary>
            <p>no lo se che</p>
          </details> */}
            <details>
              <summary>
                ¿Como hago para ver el seguimiento de mi pedido?
              </summary>
              <p>
                Todos los envíos tanto los correos, encomienda, como los
                expresos por camión y avión, tienen un buscador de seguimiento
                del pedido mediante una clave que brinda la empresa de envío y
                así el cliente puede hacer un seguimiento en tiempo real de su
                paquete desde que sale de Buenos Aires hasta que llega a su
                destino.
              </p>
            </details>
            <details>
              <summary>¿Puede un tercero recibir mi pedido?</summary>
              <p>
                Un tercero puede recibír el pedido siempre y cuando el cliente
                firme una autorizacion autorizando al tercero a retirar la
                incomineda alcarando nombre y dni del mismo, en la mayoria de
                los casos las encomiendas se retiran personalmente a nombre de
                quien realizó el pedido. <br />
                En caso de envío a domicilio no necesita ser el titular quíen
                reciba el pedido.
              </p>
            </details>
            <details>
              <summary>¿Como puedo abonar mi pedido?</summary>
              <p>
                Puede abonar mediante:
                <br />
                <br />
                <ul>
                  <li>
                    Billeteras virtuales como: Cuenta DNI, Mercado Pago, Ualá y
                    Brubank
                  </li>
                  <br />
                  <li>
                    Transferencia bancaria con diferentes Bancos como: Banco
                    Galicia, BBVA Francés, Banco Provincia, Banco Nacíon, Banco
                    Hipotecario
                  </li>
                  <br />
                  <li>
                    Targetas de credito o debito con recargo de 20% sobre el
                    total de la cotización final del pedido
                  </li>
                  <br />
                  <li>
                    Sistema integral de cobros como: Rapipago o Pago Fácil{" "}
                    <br />
                    (recordando que cuando se abona por estos medios el cliente
                    debe abonar una comición de 1,5%)
                  </li>
                </ul>
              </p>
            </details>
            <details>
              <summary>¿Quién abona el envío?</summary>
              <p>
                El envío lo abona el cliente, ya sea a provincia o a Buenos
                Aires.
              </p>
            </details>
            <details>
              <summary>¿Puedo realizar un cambio en mi pedido?</summary>
              <p>
                Si, los combios de producto se pueden realizar siempre y cuando
                el cliente requiera cambiarlos por algún error del remitente
                (Mercado Deporte) en ese caso la Empresa se hace cargo del envío
                ya que fue error de la empresa. <br />
                En el caso de que el cliente quiera cambiar el producto porque
                se equivoco al momento de elegir (ya sea talla o colores), el
                cliente se hace cargo de la devolución del paquete a la empresa
                y el reenvio a su destino.
              </p>
            </details>
            <details>
              <summary>
                En caso de querer cambiar mi producto ¿Cómo lo hago?
              </summary>
              <p>
                Comunicandose con nuestro servicio al cliente de Lunes a Viernes
              </p>
            </details>
          </div>
        </div>
        <div className={styles.noquestion}>
          <div className={styles.childrens}>
            <h3>¿AÚN NO ENCUENTRAS TU RESPUESTA?</h3>
            <p>
              PREGUNTALE A NUESTRO SERVICIO AL CLIENTE: <br /> Lun - Vie: 9:00
              AM a 9:00PM <br /> Sab - Dom: 10:00 AM a 18:00 PM
            </p>
            <br />
            <a href={`https://wa.me/541139210786`} target="_blank">
              CONTACTANOS
            </a>
          </div>
          <div className={styles.childrens}>
            <h3>NIDEA JEJEJEEJEJEJ</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto facere assumenda nulla sunt qui sit beatae optio illum
              magni cupiditate ?
            </p>
            <br />
            <a href="#">WHATSAPP</a>
          </div>
        </div>
      </div>
      <PreFooter></PreFooter>
      <Footer></Footer>
    </div>
  );
};

export default Faqs;
