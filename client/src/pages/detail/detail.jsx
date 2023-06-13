import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductByID, cleanDetail } from "../../redux/actions";

import Carrusel from "./carrusel";
import styles from "./styles.module.css";
import PreFooter from "../../components/preFooter/preFooter";
import Footer from "../../components/footer/footer";
import Loader from "../../components/loader/loader";

const Detail = ({ id }) => {
  const dispatch = useDispatch();
  const productByID = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getProductByID(id));
    return function () {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  return (
    <div className={styles.detail}>
      {!productByID.length && <Loader />}
      {productByID?.map((elem) => (
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.containerCarrusel}>
              <Carrusel images={elem.image} />
            </div>
            <div className={styles.info}>
              <div className={styles.one}>
                <div className={styles.tags}>
                  {elem.tags?.map((el) => (
                    <span>/{el}</span>
                  ))}
                </div>
                <span>{elem.score}</span>
              </div>
              <div className={styles.title}>
                <h1>{elem.name}</h1>
                <span>{elem.brand}</span>
              </div>
              <div className={styles.sizes}>
                <div>
                  <p>Talles disponibles:</p>
                  <div>
                    {elem.sizes?.map((el) => (
                      <span>{el}</span>
                    ))}
                  </div>
                  <div>
                    <p>Colores disponibles:</p>
                    <div>
                      {elem.colors?.map((el) => (
                        <span>{el}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.images}>
                    {elem.image.map((el) => (
                      <img src={el} alt="product" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.two}>
              <details>
                <summary>
                  Detalle{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </summary>
                <p>{elem.detail}</p>
              </details>
              <hr />
              <details>
                <summary>
                  Descripción{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </summary>
                <p>{elem.description}</p>
              </details>
            </div>
            <div className={styles.three}>-</div>
          </div>
        </div>
      ))}
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Detail;
