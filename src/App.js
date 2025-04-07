import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import AdminStats from "./components/AdminStats";

function App() {
  const userId = "frontendUser";
  const [refreshCart, setRefreshCart] = useState(0);

  const triggerRefresh = () => setRefreshCart((prev) => prev + 1);

  return (
    <div className="App">
      <h1>🏪 Ecommerce Store</h1>
      <ProductList userId={userId} onAddToCart={triggerRefresh} />
      <Cart userId={userId} refreshTrigger={refreshCart} />
      <Checkout userId={userId} onCheckout={triggerRefresh} />
      <hr />
      <AdminStats />
    </div>
  );
}

export default App;
