import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import ItemsList from "../../components/ItemsList/ItemsList";
import * as itemService from "../../utils/itemService";
import userService from "../../utils/userService";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";
import ItemsCart from "../../components/ItemsCart/ItemsCart";

export default function HomePage(props) {
  //console.log(user, "<---props from HomePage")
  const [items, setItems] = useState([]);
  //const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // R read in crud
  async function getItems() {
    try {
      const data = await itemService.getAll();

      setItems([...data.items]);

      setLoading(false);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }

  async function logout() {
    //e.preventDefault();
    try {
      await userService.logout();
      //handleLogout()
      //Navigate("/")
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  if (loading) {
    return (
      <>
        <Header handleLogout={logout} user={props.user} />
        <Loading />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header handleLogout={logout} user={props.user} />
        <ErrorMessage error={error} />;
      </>
    );
  }

  return (
    <>
      <Header user={props.user} handleLogout={logout} />

      <h1>Welcome to 1StopShop {props.user.username} !</h1>
      <ItemsList items={items} addToCart={props.addToCart} />
      <h1>This is my Shopping Cart</h1>
      <ItemsCart cart={props.cart} removeFromCart={props.removeFromCart} />
    </>
  );
}

//// C create in Crud
//// we invoke this function in addPost component when the submit button on our form is clicked
//// so we need to pass it as a prop
//async function handleAddItem(item) {
//  try {
//    setLoading(true);
//    const data = await itemService.create(item); // our server is going to return
//    // the created post, that will be inside of data, which is the response from
//    // the server, we then want to set it in state
//    console.log(data, " this is response from the server, in handleAddPost");
//    setItems([data.item, ...items]);
//    setLoading(false);
//  } catch (err) {
//    setError(err.message);
//    console.log(err);
//    setError(err.message);
//  }
//}
