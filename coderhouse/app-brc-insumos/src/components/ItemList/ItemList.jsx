import React from "react";
import Button from "@material-ui/core/Button";
import "./ItemList.css";
import Item from "../Item/Item";

const productos = [
  [
    {
      title: "hamburguesa",
      price: 450,
      thumbnail:
        "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      id: 1,
    },
    {
      title: "pizza",
      price: 800,
      thumbnail:
        "https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      id: 2,
    },
    {
      title: "papas fritas",
      price: 300,
      thumbnail:
        "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      id: 3,
    },
    {
      title: "empanadas",
      price: 920,
      thumbnail:
        "https://images.pexels.com/photos/6535195/pexels-photo-6535195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      id: 4,
    },
    {
      title: "lasaña",
      price: 750,
      thumbnail:
        "https://images.pexels.com/photos/5949900/pexels-photo-5949900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 5,
    },
    {
      title: "カルボナーラ",
      price: 850,
      thumbnail:
        "https://images.pexels.com/photos/5710170/pexels-photo-5710170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 6,
    },
    {
      title: "握り寿司",
      price: 1600,
      thumbnail:
        "https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 7,
    },
  ],
];

const obtenerProductos = new Promise((resolve, reject) => {
  //Este setTimeout va a simular la demora del tiempo de respuesta que pueda tener un servidor al cual le solicito la lista de productos
  const estadoDePromesa = true;

  setTimeout(() => {
    if (estadoDePromesa) {
      //si la promesa se ejecuta satisfactoriamente, entonces enviaré mi respuesta como parámetro del método resolve() en este caso enviaré mi lista de productos.
      resolve(productos);
    } else {
      reject("No se pudo conectar con el servidor");
    }
    //acá indico que quiero que este setTimeout demore 3 segundos
  }, 3000);
});

//Voy a ejecutar mi función, pero como se trata de una promesa, es necesario colocar el .then( ) luego del nombre de mi función para tratar la repuesta


const ItemList = (props) => {    

    
    obtenerProductos
      .then((res) => {
        const { listaProductos } = res;
        console.log(listaProductos);
        console.log(res);
     })
        .catch((err) => console.log(err));
   

    return (
      <div className="ItemList">
        {productos.map((todo, index) => (
          <Item
            key={index}
            className="Item"
            Item={todo.title}
            Image={todo.thumbnail}
            price={todo.price}
            stock="20"
          ></Item>
        ))}
      </div>
    );
};

export default ItemList;
