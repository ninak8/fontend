import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getFeatured,
  getImages,
  getByCategoryAndName,
} from "../../redux/actions";
import {
  Carrusel,
  Carousel,
  Sale,
  Loader,
  Equipment,
  Warning,
  Faqs,
} from "../../components/index";

import styles from "./styles.module.css";

const Home = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const featured = useSelector((state) => state.featured);
  const images = useSelector((state) => state.images);

  // console.log(products);
  useEffect(() => {
    if (!featured.length) {
      dispatch(getFeatured());
    }
    if (!products.length) {
      dispatch(getByCategoryAndName("accesorio", "medias"));
    }
    if (!images.length) {
      dispatch(getImages());
    }
  }, [dispatch, featured, products, images]);

  return (
    <div className={styles.home}>
      {!featured.length && <Loader />}
      <div className={styles.homeTop}>
        <Faqs />
        <div className={styles.contentCarr}>
          <Carousel images={images} />
        </div>
        <Equipment />
        {open === true ? <Warning setOpen={setOpen} /> : null}
        <div className={styles.title}>
          <div>
            <span>DESTACADOS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </div>
          <a href="/catalogs/all">VER TODO</a>
        </div>
        <Carrusel featured={featured?.slice(0, 10)}></Carrusel>
        <Sale />
        <div className={styles.title}>
          <div>
            <span>MEDIAS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </div>
          <a href="/catalogs/accesorio/medias">VER TODO</a>
        </div>
        <Carrusel featured={products} />
      </div>
    </div>
  );
};

export default Home;
