import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByID,
  // cleanDetail,
  // getProductByName,
  getByCategory,
} from "../../redux/actions";

import { SaleDetail, Loader, Card } from "../../components/index";
import Carrusel from "./carrusel";

import styles from "./styles.module.css";

const Detail = ({ id, category }) => {
  const dispatch = useDispatch();
  const productByID = useSelector((state) => state.detail);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductByID(id));
    if (!products.length) {
      dispatch(getByCategory(category));
    }
  }, [dispatch, id, products, category]);

  let sixProducts = products?.slice(0, 6);
  return (
    <div className={styles.detail}>
      {!productByID && <Loader />}
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.containerCarrusel}>
            <Carrusel images={productByID.image} />
          </div>
          <div className={styles.info}>
            <div className={styles.one}>
              <div className={styles.tags}>
                {Array.isArray(productByID.tags)
                  ? productByID.tags.map((tag, i) => (
                      <span key={i}>/ {tag}</span>
                    ))
                  : null}
              </div>
              <span>{productByID.score}</span>
            </div>
            <div className={styles.title}>
              <h1>{productByID.name}</h1>
              <span>{productByID.brand}</span>
            </div>
            <div className={styles.sizes}>
              <div>
                <p>Talles disponibles:</p>
                <div>
                  {Array.isArray(productByID.sizes) ? (
                    productByID.sizes.map((size, i) => (
                      <span key={i}>{size}</span>
                    ))
                  ) : (
                    <span>No hay talles</span>
                  )}
                </div>
                <div>
                  <p>Colores disponibles:</p>
                  <div>
                    {Array.isArray(productByID.colors) ? (
                      productByID.colors.map((color, i) => (
                        <span key={i}>{color}</span>
                      ))
                    ) : (
                      <span>No hay Colores disponibles</span>
                    )}
                  </div>
                </div>
                <div className={styles.images}>
                  {Array.isArray(productByID.image)
                    ? productByID.image.map((img, i) => (
                        <img src={img} alt="product" key={i} />
                      ))
                    : null}
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
              <p>{productByID.detail}</p>
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
              <p>{productByID.description}</p>
            </details>
            <div className={styles.containerCards}>
              {sixProducts?.map((elem, i) => (
                <Card
                  name={elem?.name}
                  score={elem?.score}
                  tags={elem?.tags}
                  category={elem.category}
                  img={elem?.image[0]}
                  key={elem?.id}
                  id={elem?.id}
                />
              ))}
            </div>
          </div>
          <div className={styles.three}>
            <SaleDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
