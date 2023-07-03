import React from "react";
import Card from "../card/card";

import styles from "./styles.module.css";

const Cards = ({ products }) => {
  return (
    <div className={styles.cards} key={products.length * 2}>
      {products?.map((elem) => (
        <Card
          name={elem?.name}
          score={elem?.score}
          tags={elem?.tags}
          img={elem?.image[0]}
          key={elem?.id}
          id={elem?.id}
        />
      ))}
    </div>
  );
};

export default Cards;
