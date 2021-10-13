import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ Item }) => {
  const [item, setItem] = useState([]);

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: item.id,
          name: item.name,
          stock: item.stock,
          img: item.img,
        },
      ]);
    }, 2000);
  });

  useEffect(() => {
    if (item) {
      getItem
        .then((res, err) => {
          if (err) console.log(err);
          setItem(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => console.log("Finalizado"));
    }
    console.log(item);
  }, [item]);

  // Recuerde que result , setResult es el hook de useState

  return (
    <div className="ItemDetailContainer">
      <ItemDetail Item={item}>{console.log("este es item", item)}</ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
