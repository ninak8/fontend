import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Pages = ({ setPage, maximo, index }) => {
  useEffect(() => {
    if (parseInt(index) > maximo) {
      setPage(maximo);
    } else if (parseInt(index) < 1 && maximo > 0) {
      setPage(1);
    }
  }, [maximo, index, setPage]);

  const [valueInput, setVauleInput] = useState("");

  const handleChage = (event) => {
    setVauleInput(event.target.value);
  };

  const handleKeyUp = (event) => {
    const { value } = event.target;
    const keycode = event.keyCode || event.which;
    if (keycode === 13) {
      if (value !== "") {
        if (parseInt(value) < 1) {
          setPage(1);
          setVauleInput("");
        } else if (parseInt(value) > maximo) {
          setPage(maximo);
          setVauleInput("");
        } else {
          setPage(value);
          setVauleInput("");
        }
      } else {
        setPage(1);
        setVauleInput("");
      }
    }
  };

  const nextFunction = () => {
    if (index < maximo) setPage(parseInt(index) + 1);
  };

  const previousFunction = () => {
    if (index > 1) setPage(parseInt(index) - 1);
  };

  return (
    <>
      <div className={styles.pages}>
        <button onClick={previousFunction} className={styles.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
          </svg>
        </button>
        <span className={styles.spanPage}> Pagina: {index} </span>
        <button onClick={nextFunction} className={styles.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Pages;
