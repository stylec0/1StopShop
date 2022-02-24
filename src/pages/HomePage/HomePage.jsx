import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import ItemsList from "../../components/ItemsList/ItemsList";
import * as itemService from "../../utils/itemService"

export default function HomePage() {
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 
  // C create in Crud
  // we invoke this function in addPost component when the submit button on our form is clicked
  // so we need to pass it as a prop
  async function handleAddItem(item) {
    try {
      setLoading(true);
      const data = await itemService.create(item); // our server is going to return
      // the created post, that will be inside of data, which is the response from
      // the server, we then want to set it in state
      console.log(data, " this is response from the server, in handleAddPost");
      setItems([data.item, ...items]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      console.log(err);
      setError(err.message);
    }
  }

  // R read in crud
  async function getItems() {
    try {
      const data = await itemService.getAll();
      console.log(data, " this is data,");
      setItems([...data.items]);
      setLoading(false);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }
  
  useEffect(() => {
    getItems();
  }, []);

    return (
        <>
      <Header />
      
        <h1>This is the HomePage</h1>
        <ItemsList />
     
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


//useEffect(() => {
//  Axios.post('/api/item/getItems')
//  .then(response => {
//    if(response.data.success) {

//    } else {
//      alert('Failed to fetch item datas')
//    }
//  })
//})