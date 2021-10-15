import React from "react";
import Button from "@material-ui/core/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

const Item = ({ Item, image, price, stock }) => {
  return (
    <div className="Item">
      <ItemCount Item={Item} stock={stock} />
      <img src={image} alt={Item} className="Item-img" />
      <h3>Precio: {price}</h3>
      <Button>Ver detalle</Button>
    </div>
  );
};

export default Item;
