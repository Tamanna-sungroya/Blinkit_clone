import React, { useState } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import OrderHistory from "./pages/OrderHistory"; 
import OrderTrackingPage from "./pages/OrderTrackingPage";
import OrderDetails from "./pages/OrderDetails";   // ✅ fixed capitalization for consistency
import SupportPage from "./pages/SupportPage";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const grandTotal = subtotal - discount;

  const applyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(subtotal * 0.1);
    } else if (coupon === "DISCOUNT20") {
      setDiscount(subtotal * 0.2);
    } else {
      setDiscount(0);
      alert("Invalid Coupon Code");
    }
  };

  const proceedToOrder = () => {
    navigate("/order-tracking");
  };

  let buttonText = `🛒 View Cart`;
  let buttonLink = "/cart";

  if (
    location.pathname === "/cart" ||
    location.pathname === "/order-tracking" ||
    location.pathname.startsWith("/product/") ||
    location.pathname.startsWith("/order-history") ||
    location.pathname.startsWith("/support")
  ) {
    buttonText = "⬅️ Back to Products";
    buttonLink = "/";
  }

  return (
    <div>
      <div className="navbar">
        <h2 className="nav-title">
          <Link to="/" className="nav-logo">
            Zenvy
          </Link>
        </h2>

        <div className="nav-buttons">
          <Link to={buttonLink} className="nav-link">
            <button
              className="cart-button"
              data-count={location.pathname === "/" ? cart.length : ""}
            >
              {buttonText}
            </button>
          </Link>

          {!location.pathname.startsWith("/order-history") &&
            !location.pathname.startsWith("/support") && (
              <button
                className="cart-button"
                onClick={() => navigate("/order-history")}
              >
                My Orders
              </button>
            )}
        </div>
      </div>

      <div style={{ paddingTop: "80px", paddingBottom: "70px" }}>
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cart}
                onRemoveItem={removeFromCart}
                subtotal={subtotal}
                discount={discount}
                grandTotal={grandTotal}
                coupon={coupon}
                setCoupon={setCoupon}
                applyCoupon={applyCoupon}
                onProceed={proceedToOrder}
              />
            }
          />
          <Route path="/order-tracking" element={<OrderTrackingPage />} />

          <Route path="/order-history" element={<OrderHistory />} />

          <Route path="/order-history/:orderId" element={<OrderDetails />} />

          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}