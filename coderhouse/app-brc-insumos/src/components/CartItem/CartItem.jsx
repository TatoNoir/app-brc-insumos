import React from "react";
import Button from "@material-ui/core/Button";
import "./CartItem.css";

const CartItem = (props) => {
  return (
    <div className="CartItem">
      {props.children}
      <Button>Agregar al carro</Button>
    </div>
  );
};

export default CartItem;
