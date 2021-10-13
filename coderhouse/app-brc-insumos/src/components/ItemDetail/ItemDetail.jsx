import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ Item }) => {
  return (
    <div className="ItemDetail">
      <p>Descripcion: {Item.descripcion}</p>
      <img src={Item.img} alt={Item.name} className="Item-img" />
      <h3>Precio: 200</h3>
    </div>
  );
};

export default ItemDetail;
