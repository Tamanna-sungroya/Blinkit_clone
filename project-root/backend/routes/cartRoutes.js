// backend/routes/cartRoutes.js
import express from 'express';
import { getCart, addItem, updateItem, removeItem, applyCoupon } from '../controllers/cartController.js';
const router = express.Router();

router.get('/:userId', getCart);          // Get user's cart
router.post('/:userId', addItem);         // Add item to cart
router.put('/:userId/:itemId', updateItem); // Update quantity
router.delete('/:userId/:itemId', removeItem); // Remove item
router.post('/:userId/coupon', applyCoupon); // Apply coupon

export default router;
