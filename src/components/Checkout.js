import React, { useState } from "react";
import api from "../api/api";

const Checkout = ({ userId, onCheckout }) => {
  const [discountCode, setDiscountCode] = useState("");
  const [message, setMessage] = useState("");

  const handleCheckout = async () => {
    try {
      const res = await api.post(`/checkout/${userId}`, {
        discountCode: discountCode.trim() || undefined,
      });
      setMessage(res.data.message + ` | Order Total: ₹${res.data.order.total}`);
      onCheckout(); // Clearing cart display
    } catch (err) {
      setMessage(err.response?.data?.message || "Checkout failed");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <input
        placeholder="Discount code (optional)"
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value)}
      />
      <button onClick={handleCheckout}>Checkout</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Checkout;
