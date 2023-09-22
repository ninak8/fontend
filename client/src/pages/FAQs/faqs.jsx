import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFaqs } from "../../redux/actions";
// import CardFaq from "../../components/cardFaq/card";
// import faqs from "./faqs.json";
import styles from "./styles.module.css";

const Faqs = () => {
  const dispatch = useDispatch();
  const faqs = useSelector((state) => state.faqs);

  useEffect(() => {
    if (!faqs.length) {
      dispatch(getFaqs());
    }
  }, [dispatch, faqs]);

  return (
    <div className={styles.faqs}>
      <div className={styles.faqsOne}>
        <div className={styles.bottom}>
          <span>PREGUNTAS FRECUENTES</span>
          <div className={styles.questions}>
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
              <p id="100">
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
                    Hipotecario, supervielle
                  </li>
                  <br />
                  <li>
                    Tarjetas de credito o debito con recargo de 20% sobre el
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

            {faqs?.map((elem, i) => (
              <details key={i}>
                <summary>{elem.question}</summary>
                <p>{elem.response}</p>
              </details>
            ))}
          </div>
        </div>
        <div className={styles.noquestion}>
          <div className={styles.childrens}>
            <h3>¿AÚN NO ENCUENTRAS TU RESPUESTA?</h3>
            <p>
              PREGUNTALE A NUESTRO SERVICIO AL CLIENTE: <br /> Lun - Vie: 9:00
              AM a 9:00PM <br /> Sab: 09:00 AM a 15:00 PM
            </p>
            <br />
            <a
              href={`https://wa.me/541161320815`}
              target="_blank"
              rel="noreferrer"
            >
              CONTACTANOS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
