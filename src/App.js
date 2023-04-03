import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="createuser" element={<CreateUser />} /> */}
          <Route path="cart_products" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
