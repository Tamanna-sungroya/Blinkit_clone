import React, { useState } from "react";
import "./CartPage.css";

export default function CartPage({
  cartItems,
  onRemoveItem,
  subtotal,
  discount,
  grandTotal,
  coupon,
  setCoupon,
  applyCoupon,
  onProceed,
}) {
  const [message, setMessage] = useState("");

  // ✅ Load Razorpay script dynamically
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // ✅ Handle Payment with Razorpay
  const handlePayment = async () => {
    if (cartItems.length === 0) {
      setMessage("⚠️ Please select products to continue with checkout!");
      return;
    }

    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

console.log("🔑 Razorpay Key:", import.meta.env.REACT_APP_RAZORPAY_KEY_ID);


    const options = {
      key: import.meta.env.REACT_APP_RAZORPAY_KEY_ID || "rzp_test_R7Uel8ZLxHMEv9",
      amount: grandTotal * 100, // Razorpay expects amount in paise
      currency: "INR",
      name: "My Shop",
      description: "Purchase Payment",
      image: "https://yourstorelogo.com/logo.png", // optional logo
      handler: function (response) {
        alert("✅ Payment Successful! Payment ID: " + response.razorpay_payment_id);
        onProceed(); // Redirect to order status page
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "My Shop Corporate Office",
      },
      theme: {
        color: "#6b4226",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="cart-container">
      <div className="cart-box">
        <h1>🛒 CART</h1>

        {/* ✅ Cart Table */}
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="6" className="empty-msg">
                  Your cart is empty!
                </td>
              </tr>
            ) : (
              cartItems.map((item, i) => (
                <tr key={i}>
                  <td>
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>₹ {item.price.toLocaleString()}</td>
                  <td>₹ {(item.price * item.qty).toLocaleString()}</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => onRemoveItem(i)}
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* ✅ Coupon input */}
        <div className="coupon-box">
          <input
            type="text"
            placeholder="Enter coupon"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button onClick={applyCoupon}>Apply</button>
        </div>

        {/* ✅ Totals */}
        <div className="totals">
          <p>Subtotal: ₹ {subtotal.toLocaleString()}</p>
          <p>Discount: ₹ {discount.toLocaleString()}</p>
          <hr />
          <p className="grand">Grand Total: ₹ {grandTotal.toLocaleString()}</p>
        </div>

        {/* ✅ Proceed to Payment Button */}
        <button className="pay-btn" onClick={handlePayment}>
          Proceed to Payment
        </button>

        {/* ✅ Warning message if cart is empty */}
        {message && <p className="warning">{message}</p>}
      </div>
    </div>
  );
}
