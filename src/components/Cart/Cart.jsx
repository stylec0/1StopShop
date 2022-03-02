import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function MyShoppingCart(props) {
    console.log(props, "<---Props from ShoppingCart")

    let list = props.cart.map((item) => {
        return (
        
         <ItemsCard item={item} key={item._id}/>
        
        ) 
    });
}