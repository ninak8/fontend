import React, { useState } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { filter, getP, order } from "../../redux/actions";

const Filter = ({ products, setOrder }) => {
  const dispatch = useDispatch();

  const [selection, setSelections] = useState([]);
  const [view, setview] = useState({
    filters: false,
  });

  const handleMouse = (name) => {
    setview({
      ...view,
      [name]: true,
    });
  };
  const handleMouseOut = () => {
    setview({
      filters: false,
    });
  };

  // -------------------------------

  const orderByAlphabet = (e) => {
    const value = e.target.value;
    dispatch(order(value));
    setOrder(value);
  };

  const filterBySize = (e) => {
    const value = e.target.value;
    // console.log(products);s
    const selectedSizes = products.filter((elem) => elem.sizes.includes(value));
    setSelections([...selection, value]);
    dispatch(filter(selectedSizes));
  };

  const filterByColors = (e) => {
    const value = e.target.value;
    const selectedColor = products.filter((elem) =>
      elem.colors.includes(value)
    );
    setSelections([...selection, value]);
    dispatch(filter(selectedColor));
  };

  const filterByTag = (e) => {
    const value = e.target.value;

    const selectedTags = products.filter((elem) => elem.tags.includes(value));
    dispatch(filter(selectedTags));
  };

  const filterByCategory = (e) => {
    const value = e.target.value;

    const selectedCategories = products.filter(
      (elem) => elem.category === value
    );
    dispatch(filter(selectedCategories));
  };

  const filterByGenre = (e) => {
    const value = e.target.value;
    const selectedGenre = products.filter((elem) => elem.genre === value);
    dispatch(filter(selectedGenre));
  };

  const removeFilters = () => {
    dispatch(getP());
    setSelections([]);
  };

  // -------------------------------

  return (
    <div className={styles.filter}>
      <button onClick={() => handleMouse("filters")}>
        <span name="filters">FILTRAR Y ORDENAR</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M13 5h9v2h-9zM2 7h7v2h2V3H9v2H2zm7 10h13v2H9zm10-6h3v2h-3zm-2 4V9.012h-2V11H2v2h13v2zM7 21v-6H5v2H2v2h3v2z"></path>
        </svg>
      </button>
      {view.filters && (
        <div className={styles.dropDowns}>
          <div className={styles.top}>
            <span>FILTRAR Y ORDENAR</span>
            <div className={styles.right}>
              <button onClick={() => handleMouseOut()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                </svg>
              </button>
              {selection != false && (
                <span value="remove" onClick={removeFilters}>
                  remover filtros
                </span>
              )}
            </div>
          </div>
          {selection && (
            <div className={styles.selections}>
              {selection.map((elem) => (
                <span className={styles.select}>{elem}</span>
              ))}
            </div>
          )}
          <div className={styles.dropDownsButtons}>
            <details>
              <summary>
                ORDENAR POR{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </summary>
              <option value="A-z" onClick={(e) => orderByAlphabet(e)}>
                ORDEN ALFABÉTICO (A-z)
              </option>
              <option
                value="Z-a"
                onClick={(e) => orderByAlphabet(e)}
                className={styles.back}
              >
                ORDEN ALFABÉTICO (Z-a)
              </option>
            </details>
            <details>
              <summary>
                TALLE{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </summary>
              <option onClick={(e) => filterBySize(e)} value="S">
                S
              </option>
              <option onClick={(e) => filterBySize(e)} value="M">
                M
              </option>
              <option
                onClick={(e) => filterBySize(e)}
                className={styles.back}
                value="XL"
              >
                XL
              </option>
            </details>
            <details>
              <summary>
                COLORES{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </summary>
              <option onClick={(e) => filterByColors(e)} value="negro">
                NEGRO
              </option>
              <option onClick={(e) => filterByColors(e)} value="blanco">
                BLANCO
              </option>
              <option onClick={(e) => filterByColors(e)} value="gris">
                GRIS
              </option>
              <option
                onClick={(e) => filterByColors(e)}
                className={styles.back}
                value="amarillo"
              >
                AMARILLO
              </option>
            </details>
            <details>
              <summary>
                DEPORTE{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </summary>
              <option onClick={(e) => filterByTag(e)} value="futbol">
                FÚTBOL
              </option>
              <option onClick={(e) => filterByTag(e)} value="tenis">
                TENIS
              </option>
              <option
                onClick={(e) => filterByTag(e)}
                className={styles.back}
                value="basquet"
              >
                BÁSQUET
              </option>
            </details>
            <details>
              <summary>
                CATEGORIA{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </summary>
              <option onClick={(e) => filterByCategory(e)} value="ropa">
                ROPA
              </option>
              <option onClick={(e) => filterByCategory(e)} value="calzado">
                CALZADO
              </option>
              <option
                onClick={(e) => filterByCategory(e)}
                className={styles.back}
                value="accesorio"
              >
                ACCESORIO
              </option>
            </details>
            <details>
              <summary>
                GENERO{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                </svg>
              </summary>
              <option onClick={(e) => filterByGenre(e)} value="unisex">
                UNISEX
              </option>
              <option onClick={(e) => filterByGenre(e)} value="mujer">
                MUJER
              </option>
              <option
                onClick={(e) => filterByGenre(e)}
                className={styles.back}
                value="hombre"
              >
                HOMBRE
              </option>
            </details>
            {/* <button>FILTRAR</button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
