import { useEffect, useState } from "react";
import React  from 'react'
import ProductList from "./ProductList";
import ProductCard from "./ProductCard";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });
}, []);
  return (
    <div className="app">
      <h1>Product Listing - 2500031963 AKKI</h1>
      {products.length === 0 ? ( <p>No products available</p>) :
      (<ProductList products={products} />)
      }
    </div>
  )
}