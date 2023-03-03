import Home  from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<ProductList />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
