import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByName, getTags } from "../../redux/actions";
import CardNav from "../cradsNavBar/cardsNav";
import NotFound from "../notFound/notFound";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const productsSelected = useSelector((state) => state.search);
  const tags = useSelector((state) => state.tags);

  const clearInput = () => {
    setName("");
  };

  const handlerChanges = (event) => {
    const value = event.target.value;
    setName((s) => (s = value));
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch(getProductByName(name));
    // console.log(productsSelected);
  };

  useEffect(() => {
    if (name !== "") {
      dispatch(getProductByName(name));
      // console.log(productsSelected, "+");
    }
    if (!tags.length) {
      dispatch(getTags());
    }
  }, [dispatch, name, tags]);

  return (
    <div className={styles.searchBar}>
      <form action="">
        <input
          type="text"
          placeholder="buscar"
          autocomplete="off"
          onChange={handlerChanges}
          value={name}
          auto="off"
        />
        <button onClick={submit} type="submit" className={styles.button}>
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            style={{ fill: "#ffd904" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
            />
          </svg>
        </button>
      </form>
      {name !== "" && (
        <div className={styles.containerCards}>
          <div className={styles.lateral}>
            <div className={styles.title}>
              <span>SUGERENCIAS</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#f5f5f5" }}
              >
                <path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path>
              </svg>
            </div>
            {tags?.map((tag) => (
              <a href={`/catalogs/deporte/${tag}`} key={tag.length}>
                {tag}
              </a>
            ))}
            <a href={`/catalogs/${name}`}>
              <p>VER TODO DE "{`${name}`}"</p>
            </a>
          </div>
          <div className={styles.results}>
            {productsSelected.length ? (
              productsSelected?.map((product) => (
                <CardNav
                  name={product.name}
                  img={product.image[0]}
                  category={product.category}
                  score={product.score}
                  tags={product.tags}
                  id={product.id}
                  key={product.id}
                />
              ))
            ) : (
              <NotFound></NotFound>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
