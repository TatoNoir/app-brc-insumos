import React, { useEffect, useState } from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = (props) => {
  const [result, setResult] = useState([]);

  const tarea = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Iphone 6",
          descripcion: "Celular",
          stock: 10,
          img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png",
        },
        {
          id: 2,
          name: "Samsung S21",
          descripcion: "Celular",
          stock: 3,
          img: "https://i.blogs.es/d9faf7/samsung-galaxy-s21-ultra-00-02/450_1000.jpg",
        },
        {
          id: 3,
          name: "Alcatel 1V",
          descripcion: "Celular",
          stock: 6,
          img: "https://i.blogs.es/6947e3/alcatel1v2020/450_1000.jpg",
        },
        {
          id: 4,
          name: "Iphone XS",
          descripcion: "Celular",
          stock: 4,
          img: "https://m.media-amazon.com/images/I/81wcv7XP3cL._AC_SL1500_.jpg",
        },
      ]);
    }, 3000);
  });

  useEffect(() => {
    if (!result) {
      tarea
        .then((res, err) => {
          if (err) console.log(err);
          setResult(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => console.log("Finalizado"));
    }
    console.log(result);
  }, [result]);

  // Recuerde que result , setResult es el hook de useState

  return (
    <div className="ItemList">
      {result.map((item) => (
        <Item
          key={item.id}
          className="Item"
          Item={item.descripcion}
          Image={item.img}
          /*price={item.price}*/
          stock="20"
        ></Item>
      ))}
    </div>
  );
};

export default ItemList;
