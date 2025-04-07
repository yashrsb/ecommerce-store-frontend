import React, { useEffect, useState } from "react";
import api from "../api/api";

const ProductList = ({ userId, onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Using same hardcoded product list here
    setProducts([
      { id: "p1", name: "Product 1", price: 50000 },
      { id: "p2", name: "Product 2", price: 30000 },
    ]);
  }, []);

  const handleAdd = async (productId) => {
    await api.post(`/cart/${userId}/add`, { productId, quantity: 1 });
    // Refreshing cart
    onAddToCart(); 
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => handleAdd(p.id)}> Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
