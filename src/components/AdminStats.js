import React, { useState } from "react";
import api from "../api/api";

const AdminStats = () => {
  const [stats, setStats] = useState(null);

  const fetchStats = async () => {
    const res = await api.get("/admin/stats");
    setStats(res.data);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <button onClick={fetchStats}>Load Stats</button>

      {stats && (
        <div>
          <p>Total Orders: {stats.totalOrders}</p>
          <p>Total Amount: ₹{stats.totalAmount}</p>
          <p>Total Discount: {stats.totalDiscount}%</p>

          <h4>Discount Codes:</h4>
          <ul>
            {stats.discountCodes.map((code, idx) => (
              <li key={idx}>
                {code.code} - {code.used ? "Used" : "Unused"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminStats;
