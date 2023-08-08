import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  filter,
  getAllColors,
  getAllSizes,
  getP,
  getTags,
  order,
} from "../../redux/actions";
import OpenItems from "./open";
import OptionSTR from "./openSTR";

import styles from "./styles.module.css";

const Filter = ({ products, setOrder }) => {
  const dispatch = useDispatch();
  const sizes = useSelector((state) => state.sizes);
  const tags = useSelector((state) => state.tags);
  const colors = useSelector((state) => state.colors);

  const categories = ["ropa", "calzado", "accesorio"];
  const genre = ["unisex", "mujer", "hombre"];

  useEffect(() => {
    if (!sizes.length) {
      dispatch(getAllSizes());
    }
    if (!colors.length) {
      dispatch(getAllColors());
    }
    if (!tags.length) {
      dispatch(getTags());
    }
  }, [sizes, dispatch, colors, tags]);

  const [selection, setSelections] = useState([]);
  const [filters, setFilters] = useState(false);
  // opens
  const [orders, setOrders] = useState(false);
  //
  const [openSizes, setOpenSizes] = useState(false);
  const [openColors, setOpenColors] = useState(false);
  const [sports, setSports] = useState(false);
  const [category, setCategory] = useState(false);
  const [openGenre, setOpenGenre] = useState(false);

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
      <button onClick={() => setFilters(true)}>
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
      {filters && (
        <div className={styles.oneFilter}>
          <div className={styles.dropDowns}>
            <div className={styles.top}>
              <span>FILTRAR Y ORDENAR</span>
              <div className={styles.right}>
                <button onClick={() => setFilters(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                  </svg>
                </button>
                {selection !== false && (
                  <span value="remove" onClick={removeFilters}>
                    remover filtros
                  </span>
                )}
              </div>
            </div>
            {selection && (
              <div className={styles.selections}>
                {selection.map((elem, i) => (
                  <span key={i} className={styles.select}>
                    {elem}
                  </span>
                ))}
              </div>
            )}
            <div className={styles.dropDownsButtons}>
              <OpenItems
                open={openSizes}
                setOpen={setOpenSizes}
                title={"talles"}
                options={sizes}
                fnFilter={filterBySize}
              />
              <OpenItems
                open={openColors}
                setOpen={setOpenColors}
                title={"colores"}
                options={colors}
                fnFilter={filterByColors}
              />
              <OpenItems
                open={sports}
                setOpen={setSports}
                title={"deportes"}
                options={tags}
                fnFilter={filterByTag}
              />
              <OptionSTR
                open={category}
                setOpen={setCategory}
                title={"categorias"}
                options={categories}
                fnFilter={filterByCategory}
              />
              <OptionSTR
                open={openGenre}
                setOpen={setOpenGenre}
                title={"generos"}
                options={genre}
                fnFilter={filterByGenre}
              />
              <button onClick={() => setFilters(false)}>FILTRAR</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
