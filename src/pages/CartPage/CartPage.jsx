import React from "react";
import Header from "../../components/Header/Header";
import ItemsCart from "../../components/ItemsCart/ItemsCart";

export default function CartPage(props) {
  return (
    <>
      <Header handleLogout={props.handleLogout} user={props.user} />

      <h1>This is my Shopping Cart</h1>
      <ItemsCart cart={props.cart} removeFromCart={props.removeFromCart} />
    </>
  );
}
