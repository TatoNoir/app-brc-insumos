import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";
import CartItem from "../CartItem/CartItem";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <div className="ItemListContainer">
        <CartItem>
          <ItemCount Item="Camisa" stock="10" />
        </CartItem>
        <CartItem>
          <ItemCount Item="Pantalon" stock="20" />
        </CartItem>
        <CartItem>
          <ItemCount Item="Remera" stock="30" />
        </CartItem>
      </div>
    </>
  );
};

export default ItemListContainer;
