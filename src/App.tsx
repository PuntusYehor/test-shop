import React from "react";
import { Routes, Route } from "react-router";
import ProductPage from "./components/pages/ProductPage";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <>
      <div className="container max-w-[1200px] mx-auto p-5 flex flex-col">
        <Routes>
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="*" element={<ProductsList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
