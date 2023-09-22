import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useParams,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import {
  getByCategory,
  getP,
  getByCategoryAndName,
  getProductquery,
} from "../../redux/actions";

import { Cards, Filter, Loader, Pages, NotFound } from "../../components";
import Teams from "../../components/soccerPictures/seleccion";

import styles from "./styles.module.css";

const Catalogs = () => {
  const location = useLocation();
  const products = useSelector((state) => state.products);
  const params = useParams();
  const dispatch = useDispatch();

  const search = location.search.split("=").at(1);
  let category = params.category;
  let name = params.name;

  const [order, setOrder] = useState("");

  // ******************* paginate

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    if (search !== undefined) {
      dispatch(getProductquery(search));
      // console.log("11111");
    } else if (category === "all" && search === undefined && !name) {
      dispatch(getP());
      // console.log("22222");
    } else if (category && name === undefined) {
      dispatch(getByCategory(category));
      // console.log("33333");
    } else if (category && name) {
      dispatch(getByCategoryAndName(category, name));
      // console.log("44444");
    }
  }, []);

  useEffect(() => {}, [order]);

  const path = location.pathname;

  return (
    <div className={styles.catalogs}>
      <div className={styles.catalogsOne}>
        <div
          className={
            path !== "/catalogs/deporte/Selección ARG"
              ? styles.topSin
              : styles.topCon || path !== "/catalogs/deporte/River Plate"
              ? styles.topSin
              : styles.topCon || path !== "/catalogs/deporte/Boca Juniors"
              ? styles.topSin
              : styles.topCon || path !== "/catalogs/deporte/Inter"
              ? styles.topSin
              : styles.topCon
          }
        >
          <a href="/" className={styles.back}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 11h6v7h2v-8a1 1 0 0 0-1-1h-7V6l-5 4 5 4v-3z"></path>
            </svg>
            <span>ATRÁS</span>
          </a>
          <Teams />
        </div>
        <div
          className={
            path !== "/catalogs/deporte/Selección ARG"
              ? styles.titleSin
              : styles.title || path !== "/catalogs/deporte/River Plate"
              ? styles.titleSin
              : styles.title || path !== "/catalogs/deporte/Boca Juniors"
              ? styles.titleSin
              : styles.title || path !== "/catalogs/deporte/Inter"
              ? styles.titleSin
              : styles.title
          }
        >
          <h1>NUEVOS PRODUCTOS Y LANZAMIENTOS</h1>
          <Filter products={products} setOrder={setOrder} />
        </div>
        {/* {search ? (
          <div className={styles.results}>
            <span>Resultados de: "{search}"</span>
          </div>
        ) : null} */}
        <div className={styles.row}>
          <Cards products={currentPosts} category={category} name={name} />
          {products[0] == null ? (
            <NotFound />
          ) : !products.length ? (
            <Loader />
          ) : null}
          <Pages
            totalPosts={products.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Catalogs;
