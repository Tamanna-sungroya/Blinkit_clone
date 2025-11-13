// src/components/CartItem.jsx
import React from "react";

export default function CartItem({ item }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
      background: "#222",
      padding: "10px",
      borderRadius: "8px"
    }}>
      <span>{item.name} (x{item.quantity})</span>
      <span>₹{item.price * item.quantity}</span>
    </div>
  );
}