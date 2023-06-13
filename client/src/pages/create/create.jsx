import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";

const Create = () => {
  const [input, useInput] = useState({
    name: "",
    price: "",
    stock: "",
    brand: "",
    detail: "",
    description: "",
    score: "",
    size: [],
    tags: [],
    colors: [],
  });

  return (
    <div className={styles.create}>
      <form action="">
        <label htmlFor="">Nombre del producto</label>
        <input type="text" name="name" value={input.name} />
        <hr />
        <label htmlFor="">precio</label>
        <input type="text" name="price" value={input.price} />
        <hr />
        <label htmlFor="">stock</label>
        <input type="text" />
        <hr />
        <label htmlFor="">marca</label>
        <input type="text" />
        <hr />
        <label htmlFor="">detalle</label>
        <input type="text" />
        <hr />
        <label htmlFor="">descrpcion</label>
        <input type="text" />
        <hr />
        <label htmlFor="">puntaje</label>
        <p>aca va a haber estrellitas</p>

        <select name="Tags" id="2">
          <option value="none">etiquetas</option>
        </select>
        <select name="Sizes" id="1">
          <option value="none">talles</option>
        </select>
        <select name="Colors" id="3">
          <option value="none">colores</option>
        </select>
        <button>Crear Producto</button>
      </form>
    </div>
  );
};

export default Create;
