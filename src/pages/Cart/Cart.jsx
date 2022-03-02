import React from "react";
import Header from "../../components/Header/Header";
import userService from "../../utils/userService";

export default function Cart(props) {

return (
    <>
   <Header handleLogout={props.handleLogout} user={props.user}/>
  
    <h1>This is my Shopping Cart</h1>
 
    </>
);
}