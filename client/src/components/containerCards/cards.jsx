import React from "react";
import Card from "../card/card";

import styles from "./styles.module.css";
import NotFound from "../../components/notFound/notFound";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/actions";

const Cards = ({ products, category, name }) => {
  const dispatch = useDispatch();

  // if (category) {
  //   const selectedByCategory = products.filter(
  //     (elem) => elem.category === category
  //   );
  //   console.log(selectedByCategory);
  //   dispatch(filter(selectedByCategory));
  // }

  return (
    <div className={styles.cards}>
      {products == false && <NotFound />}
      {products.map((elem) => (
        <Card
          name={elem.name}
          score={elem.score}
          tags={elem.tags}
          img={elem.image[0]}
          key={elem.id}
          id={elem.id}
        />
      ))}
    </div>
  );
};

export default Cards;
