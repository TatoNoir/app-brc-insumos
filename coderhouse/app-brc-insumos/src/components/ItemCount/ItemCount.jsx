import React, { useState } from "react";

import "./ItemCount.css";

const ItemCount = ({ Item, stock }) => {
  const [cantidad, setCantidad] = useState(1);
  // este funcion vive solamente en cada <Item/> y se va a encargar de aumentar la cantidad de dicho producto
  // siempre y cuando sea menor que el stock
  function addCant() {
    if (cantidad < stock) setCantidad(cantidad + 1);
  }
  // este funcion vive solamente en cada <Item/> y se va a encargar de disminuir la cantidad de dicho producto
  // siempre y cuando sea mayor a 1 , por que por defecto tiene que estar en 1
  function removeCant() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  return (
    <>
      <h2>{Item}</h2>
      <div className="ItemCount">
        <div className="qty-box">
          <span className="itemButton dec" onClick={() => removeCant()}>
            –
          </span>
          <span className="itemButton qty">{cantidad}</span>
          <span className="itemButton inc" onClick={() => addCant()}>
            +
          </span>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
