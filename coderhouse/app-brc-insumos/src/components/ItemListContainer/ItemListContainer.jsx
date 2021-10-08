import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";
import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <div className="ItemListContainer">
        {/*<Item
          Item="Remera"
          Image="https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          price="100"
          stock="20"
        ></Item> */}
        <ItemList></ItemList>
      </div>
    </>
  );
};

export default ItemListContainer;
