// backend/models/Cart.js
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const CartItemSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  name: { type: String },
  price: { type: Number },
  quantity: { type: Number, default: 1 }, // ✅ type + default
  image: { type: String }
});

const CartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [CartItemSchema],
  coupon: {
    code: { type: String },
    discount: { type: Number, default: 0 } // ✅ type + default
  }
}, { timestamps: true });

export default mongoose.model('Cart', CartSchema);
