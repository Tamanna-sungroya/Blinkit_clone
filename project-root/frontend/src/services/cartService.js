// src/services/cartService.js
const API_URL = "http://localhost:5000/api/cart"; // your backend API

export async function getCart() {
  const res = await fetch(API_URL);
  return res.json();
}

export function getCartItems() {
  return [
    { id: 1, name: "Wireless Mouse", price: 499, quantity: 2 },
    { id: 2, name: "Mechanical Keyboard", price: 2499, quantity: 1 },
  ];
}

export async function applyCoupon(code) {
  const res = await fetch(`${API_URL}/apply-coupon`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  });
  return res.json();
}
