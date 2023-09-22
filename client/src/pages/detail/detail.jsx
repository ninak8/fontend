import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID, getByCategory } from "../../redux/actions";

import { Loader, Card } from "../../components/index";
import colores from "../../components/filters/colors.json";
import Carrusel from "./carrusel";

import styles from "./styles.module.css";

const Detail = ({ id, category }) => {
  const dispatch = useDispatch();
  const productByID = useSelector((state) => state.detail);
  const products = useSelector((state) => state.products);

  const [openDetail, setOpenDetail] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);

  useEffect(() => {
    dispatch(getProductByID(id));
    if (!products.length) {
      dispatch(getByCategory(category));
    }
  }, [dispatch, id, products, category]);

  let eightProducts = products?.slice(0, 8);
  let start = [];
  for (let i = 0; i < productByID.score; i++) {
    if ([i]) {
      start.push("item");
    }
  }
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
              <div className={styles.starts}>
                {start.map((start, i) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    style={{ fill: "#ffd904" }}
                    key={i}
                  >
                    {start}
                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                  </svg>
                ))}
              </div>
            </div>
            <div className={styles.title}>
              <h1>{productByID.name}</h1>
              <span>{productByID.price}</span>
              <span>Marca: {productByID.brand}</span>
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
                  <div className={styles.containerColors}>
                    {Array.isArray(productByID.colors) ? (
                      productByID.colors.map((color, i) => (
                        <option
                          className={styles.optionColor}
                          key={i}
                          style={{
                            backgroundColor: `${colores[color].color}`,
                          }}
                        ></option>
                      ))
                    ) : (
                      <span>No hay Colores disponibles</span>
                    )}
                  </div>
                </div>
                <div className={styles.images}>
                  {Array.isArray(productByID.image)
                    ? productByID.image.map((img, i) => (
                        <img src={img} alt="product" />
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.two}>
            <div className={styles.open}>
              {openDetail ? (
                // flechita top
                <button
                  onClick={() => setOpenDetail(false)}
                  className={styles.closed}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#ffd904" }}
                  >
                    <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
                  </svg>
                  <span>Detalles</span>
                </button>
              ) : (
                // flechita bottom
                <button
                  onClick={() => setOpenDetail(true)}
                  className={styles.open}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#ffd904" }}
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                  <span>Detalles</span>
                </button>
              )}
              {openDetail ? <p>{productByID.detail}</p> : null}
            </div>

            <div className={styles.open}>
              {openDescription ? (
                // flechita top
                <button
                  onClick={() => setOpenDescription(false)}
                  className={styles.closed}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#ffd904" }}
                  >
                    <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
                  </svg>
                  <span>Descripción</span>
                </button>
              ) : (
                // flechita bottom
                <button
                  onClick={() => setOpenDescription(true)}
                  className={styles.open}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: "#ffd904" }}
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                  <span>Descripción</span>
                </button>
              )}
              {openDescription ? <p>{productByID.description}</p> : null}
            </div>
          </div>
          <div className={styles.containerCards}>
            {eightProducts?.map((elem, i) => (
              <Card
                name={elem?.name}
                score={elem?.score}
                tags={elem?.tags}
                category={elem.category}
                img={elem?.image}
                max={elem.price}
                key={elem?.id}
                id={elem?.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
