import React from "react";
import Card from "../card/card";

import styles from "./styles.module.css";

const Cards = ({ products }) => {
  return (
    <div className={styles.cards}>
      {products?.map((elem) => (
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
  );
};

export default Cards;
