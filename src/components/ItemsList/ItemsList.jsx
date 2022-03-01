import React from "react";
import { Card } from "semantic-ui-react";
import ItemsCard from "../ItemsCard/ItemsCard";
import Loader from "../Loader/Loader";

export default function ItemsList(props) {
  console.log(props.items, "<----props from ItemsList");

  let list = props.items.map((item) => {
    return (
    
     <ItemsCard item={item} key={item._id}/>
    
    ) 
});

  return (
    <>
      <h1>This is the Items List</h1>
      {list}
    </>
  );
}

//export default function ItemsList(props) {
//    console.log(props.items, "<----props from ItemsList");

//    let list = props.items.map((i, k) => {

//      return (
//        <Card key={k} onClick={() => props.handleClick(i)}>
//          <Card.Content textAlign="left">
//            <Card.Header>
//              {i.itemName} - ${i.price} <br></br>
//            </Card.Header>
//          </Card.Content>
//          <Card.Content>
//            <Card.Description>{i.description}</Card.Description>
//          </Card.Content>
//        </Card>
//      );
//    });

//    return (
//      <>
//        <h1>This is the Items List</h1>
//        {list}
//        <ItemsCard items={list} />
//      </>
//    );
//  }
