import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./CartWidget.css";

const CartWidget = ({ cantidad }) => {
  return (
    <div className="iconoCart">
      <ShoppingCartIcon />
      <h2>{cantidad}</h2>
    </div>
  );
};

export default CartWidget;
