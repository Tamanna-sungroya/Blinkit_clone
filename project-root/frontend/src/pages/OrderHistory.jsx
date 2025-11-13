import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import "./OrderHistory.css";

const OrderHistory = () => {
  const navigate = useNavigate();

  const orders = [
    { id: "123456", date: "12 Aug 25", total: "₹1200", status: "Delivered" },
    { id: "123457", date: "13 Aug 25", total: "₹4000", status: "Pending" },
    { id: "123458", date: "15 Aug 25", total: "₹8500", status: "Shipped" },
  ];

  return (
    <div className="order-history-page">
      {/* Page Title */}
      <h1 className="order-title">Past Orders</h1>

      {/* Table Wrapper */}
      <div className="order-table-wrapper">
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>#{order.id}</td>
                <td>{order.date}</td>
                <td>{order.total}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => navigate(`/order-history/${order.id}`)} // ✅ navigate to details
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;