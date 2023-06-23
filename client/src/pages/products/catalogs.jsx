import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getByCategory, getP, getByCategoryAndName } from "../../redux/actions";
// import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import Cards from "../../components/containerCards/cards";
import PreFooter from "../../components/preFooter/preFooter";
import Footer from "../../components/footer/footer";
import Filter from "../../components/filters/filter";
import Pages from "../../components/paginated/paginated";
import Loader from "../../components/loader/loader";

import styles from "./styles.module.css";
import NotFound from "../../components/notFound/notFound";

const Catalogs = (props) => {
  const products = useSelector((state) => state.products);
  // const featured = useSelector((state) => state.featured);
  const dispatch = useDispatch();
  const params = useParams();
  let category = params.category;
  let name = params.name;
  // console.log(name);

  const [indexPage, setIndexPage] = useState(1);
  const [byPage] = useState(12);

  // const [cuantity, setCuantity] = useState([]);
  const [order, setOrder] = useState("");

  // let hasta = indexPage * 8 + 8;
  let maximo = Math.ceil(products.length / byPage);
  // console.log(maximo);

  // const [filters, setFilters] = useState([]);

  useEffect(() => {
    if (category === "all") {
      dispatch(getP());
    } else if (category && name === undefined) {
      dispatch(getByCategory(category));
    } else if (category && name) {
      dispatch(getByCategoryAndName(category, name));
    }
  }, []);

  useEffect(() => {
    // Array.isArray(products) &&
    // setCuantity(() => products.slice(indexPage * 8, hasta)); //una parte del array desde/hasta
  }, [products, indexPage, order]);

  // const prevPage = () => {
  //   if (indexPage === 0) return;
  //   setIndexPage((index) => index - 1);
  //   props.inputEvent(setIndexPage);
  // };

  // const nextPage = () => {
  //   hasta < products.length && setIndexPage((index) => index + 1);
  // };

  return (
    <div className={styles.catalogs}>
      {!products.length && <Loader />}
      <div className={styles.catalogsOne}>
        <div className={styles.top}>
          {/* aca con el historial de location creo */}
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
        </div>
        <div className={styles.title}>
          <h1>NUEVOS PRODUCTOS Y LANZAMIENTOS</h1>
          <Filter products={products} setOrder={setOrder} />
        </div>
        <div className={styles.row}>
          <Cards products={products} category={category} name={name} />
          {/* <Pages
            // nextPage={nextPage}
            // prevPage={prevPage}
            index={indexPage}
            setPage={setIndexPage}
            max={maximo}
          /> */}
        </div>
      </div>
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Catalogs;
