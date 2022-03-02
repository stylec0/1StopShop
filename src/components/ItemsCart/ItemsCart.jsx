import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import ItemsCard from "../ItemsCard/ItemsCard";

export default function ItemsCart(props) {

    let list = props.cart?.map((item) => {
        return (
        
         <ItemsCard item={item} key={item._id} handleClick={props.removeFromCart} />
        ) 
    });

    return (
        <>
          {list}
        </> 
      );
    }