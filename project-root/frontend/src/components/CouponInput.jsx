// src/components/CouponInput.jsx
import React, { useState } from "react";

export default function CouponInput({ onApply }) {
  const [code, setCode] = useState("");

  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter coupon code"
        style={{ padding: "5px" }}
      />
      <button
        onClick={() => onApply(code)}
        style={{ marginLeft: "5px", padding: "5px 10px" }}
      >
        Apply
      </button>
    </div>
  );
}
