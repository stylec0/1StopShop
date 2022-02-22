import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ItemsCard from "../..components/ItemsCard/ItemsCard";

export default function HomePage() {

    const [products, setProducts] = useState(ItemsCard);

    return (
        <>
      <Header />
        <h1>This is the HomePage</h1>
        <ItemsCard  />
        <ul>
          <li>Read the Login Model, You can change it to fit your needs</li>
          <li>
            Make sure you read the Login Controller, to know how it is setup to
            find the user!
          </li>
        </ul>
        </>
    );
  }

//export default function HomePage() {
//    return (
//      <>
//        <h1>This is the HomePage</h1>
//        <ul>
//          <li>Read the Login Model, You can change it to fit your needs</li>
//          <li>
//            Make sure you read the Login Controller, to know how it is setup to
//            find the user!
//          </li>
//        </ul>
//      </>
//    );
//  }
