// backend/controllers/cartController.js
import Cart from '../models/Cart.js';

// Get Cart
export const getCart = async (req, res) => {
  const { userId } = req.params;
  const cart = await Cart.findOne({ userId });
  res.json(cart || { items: [], coupon: {} });
};

// Add Item
export const addItem = async (req, res) => {
  const { userId } = req.params;
  const { productId, name, price, quantity, image } = req.body;
  let cart = await Cart.findOne({ userId });
  if (!cart) cart = new Cart({ userId, items: [] });
  cart.items.push({ productId, name, price, quantity, image });
  await cart.save();
  res.json(cart);
};

// Update Item Quantity
export const updateItem = async (req, res) => {
  const { userId, itemId } = req.params;
  const { quantity } = req.body;
  const cart = await Cart.findOne({ userId });
  const item = cart.items.id(itemId);
  item.quantity = quantity;
  await cart.save();
  res.json(cart);
};

// Remove Item
export const removeItem = async (req, res) => {
  const { userId, itemId } = req.params;
  const cart = await Cart.findOne({ userId });
  cart.items.id(itemId).remove();
  await cart.save();
  res.json(cart);
};

// Apply Coupon
export const applyCoupon = async (req, res) => {
  const { userId } = req.params;
  const { code } = req.body;
  const discount = code === 'CODE123' ? 10000 : 0; // Example logic
  const cart = await Cart.findOne({ userId });
  cart.coupon = { code, discount };
  await cart.save();
  res.json(cart);
};
