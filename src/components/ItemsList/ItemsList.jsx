import React from "react";

import ItemsCard from "../ItemsCard/ItemsCard";

export default function ItemsList(props) {
  let list = props.items.map((item) => {
    return (
      <ItemsCard item={item} key={item._id} handleClick={props.addToCart} />
    );
  });

  return <>{list}</>;
}
