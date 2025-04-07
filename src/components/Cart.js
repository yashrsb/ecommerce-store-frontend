import React, { useEffect, useState } from "react";
import api from "../api/api";

const Cart = ({ userId, refreshTrigger }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const res = await api.get(`/cart/${userId}`);
      setCart(res.data);
    };
    fetchCart();
  }, [userId, refreshTrigger]);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, idx) => (
            <li key={idx}>
              Product ID: {item.productId} | Quantity: {item.quantity} | Price: ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
