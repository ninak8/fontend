import React from "react";
// import img from "../../images/ejemplo.png";
import styles from "./styles.module.css";
import Carrusel from "../../components/carruselCards/carruselCards";
import PreFooter from "../../components/preFooter/preFooter";
import Footer from "../../components/footer/footer";
import Carousel from "../../components/carrusel/carrusel";
import Sale from "../../components/sale/sale";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFeatured, getP } from "../../redux/actions";
import Loader from "../../components/loader/loader";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const featured = useSelector((state) => state.featured);

  useEffect(() => {
    if (!featured.length) {
      dispatch(getFeatured());
    }
    if (!products.length) {
      dispatch(getP());
    }
  }, [dispatch, featured, products]);

  return (
    <div className={styles.home}>
      {!products.length && !featured.length && <Loader />}
      <div className={styles.homeTop}>
        <div className={styles.contentCarr}>
          <Carousel></Carousel>
        </div>
        <div className={styles.carrCards}>
          <Carrusel featured={featured}></Carrusel>
        </div>
      </div>
      <Sale></Sale>
      <PreFooter></PreFooter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
