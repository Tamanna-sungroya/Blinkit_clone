import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./OrderDetails.css";

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  // Dummy order data (later API se bhi fetch kar sakte ho)
  const orders = {
    "123456": {
      id: "123456",
      date: "12 Aug 25",
      total: "₹120000",
      status: "Delivered",
      items: [
        { name: "Laptop", qty: 1, price: "₹120000" },
      ],
      delivery: "Delivered on 15 Aug 25",
    },
    "123457": {
      id: "123457",
      date: "13 Aug 25",
      total: "₹4000",
      status: "Pending",
      items: [
        { name: "Shoes", qty: 2, price: "₹2000" },
      ],
      delivery: "Expected by 29 Aug 25",
    },
    "123458": {
      id: "123458",
      date: "27 Aug 25",
      total: "₹8500",
      status: "Shipped",
      items: [
        { name: "Smart Watch", qty: 1, price: "₹5000" },
        { name: "Earphones", qty: 1, price: "₹3500" },
      ],
      delivery: "Shipped, expected delivery by 30 Aug 25",
    },
  };

  const order = orders[orderId];

  if (!order) return <h2>Order Not Found</h2>;

  return (
    <div className="order-details-page">
      <h1>Order Details</h1>
      <p><strong>Order ID:</strong> #{order.id}</p>
      <p><strong>Date:</strong> {order.date}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Total:</strong> {order.total}</p>

      <h3>Items:</h3>
      <ul>
        {order.items.map((item, i) => (
          <li key={i}>
            {item.name} (x{item.qty}) — {item.price}
          </li>
        ))}
      </ul>

      <p><strong>Delivery Info:</strong> {order.delivery}</p>

      <button onClick={() => navigate("/order-history")}>
        ⬅ Back to Orders
      </button>
    </div>
  );
};

export default OrderDetails;