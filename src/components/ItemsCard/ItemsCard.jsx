import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function ItemsCard(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.handleClick(props.item);
  };

  return (
    <Card onClick={handleClick}>
      <Card.Content textAlign="left">
        <Card.Header>
          {props.item.itemName} - ${props.item.price} <br></br>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>{props.item.description}</Card.Description>
      </Card.Content>
    </Card>
  );
}