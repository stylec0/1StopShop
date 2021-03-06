import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import userService from "../../utils/userService";
import HomePage from "../HomePage/HomePage";
import CartPage from "../CartPage/CartPage";

function App() {
  const [cart, setCart] = useState([]);

  const [user, setUser] = useState(userService.getUser());

  // U Update in Crud
  function addToCart(item) {
    console.log("Click!");
    setCart([...cart, item]);
    console.log(cart, "<--Cart Items");
  }

  function removeFromCart(item) {
    const cartArr = cart.filter((i) => i._id !== item._id);
    setCart(cartArr);
  }

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  if (user) {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              user={user}
              handleLogout={handleLogout}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/:username"
          element={<ProfilePage user={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/:username/cart"
          element={
            <CartPage
              user={user}
              handleLogout={handleLogout}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
