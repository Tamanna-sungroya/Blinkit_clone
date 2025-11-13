import Appleiphone15 from "../images/Appleiphone15.png";
import Airpodspro from "../images/Airpodspro.png";
import SamsungGalaxyS23 from "../images/SamsungGalaxyS23.png";
import Sonyheadphones from "../images/Sonyheadphones.png";
import Shoes from "../images/Shoes.png";
import Laptop from "../images/Laptop.png";
import Fruits from "../images/Fruits.png";
import Mobilecharger from "../images/Mobilecharger.png";
import Appleipad from "../images/Appleipad.png";
import Vegetables from "../images/Vegetables.png";

const products = [
  { 
    id: 1, 
    name: "Apple iPhone 15", 
    price: 80000, 
    oldPrice: 90000,
    image: Appleiphone15, 
    desc: "Latest iPhone with A17 chip, improved camera and battery life.",
    rating: "⭐⭐⭐⭐⭐ (1,200 ratings)",
    stock: "In stock",
    seller: "Apple India",
    offers: [
      "Exchange offer available",
      "No-cost EMI available",
      "Free delivery by tomorrow"
    ]
  },
  { 
    id: 2, 
    name: "AirPods Pro", 
    price: 25000, 
    oldPrice: 28000,
    image: Airpodspro, 
    desc: "Noise-cancelling wireless earphones with spatial audio.",
    rating: "⭐⭐⭐⭐☆ (432 ratings)",
    stock: "Only 2 left in stock!",
    seller: "Samsung India",
    offers: [
      "Up to ₹1500 off on select credit cards",
      "7% off on 2 items, 9% off on 3 items",
      "Free delivery on your first order"
    ]
  },
  { 
    id: 3, 
    name: "Samsung Galaxy S23", 
    price: 75000, 
    oldPrice: 79999,
    image: SamsungGalaxyS23, 
    desc: "Flagship Android with Snapdragon 8 Gen 2 processor.",
    rating: "⭐⭐⭐⭐⭐ (980 ratings)",
    stock: "Hurry, only 5 left!",
    seller: "Samsung Store",
    offers: [
      "Up to ₹3000 off with HDFC cards",
      "No-cost EMI available",
      "Free screen replacement (1 year)"
    ]
  },
  { 
    id: 4, 
    name: "Sony Headphones", 
    price: 15000, 
    oldPrice: 18000,
    image: Sonyheadphones, 
    desc: "Wireless headphones with deep bass and long battery life.",
    rating: "⭐⭐⭐⭐ (550 ratings)",
    stock: "In stock",
    seller: "Sony India",
    offers: [
      "Up to ₹1000 off with ICICI cards",
      "Free delivery",
      "Extended 1-year warranty"
    ]
  },
  { 
    id: 5, 
    name: "Shoes", 
    price: 1700, 
    oldPrice: 1900,
    image: Shoes, 
    desc: "Comfortable running shoes with breathable design.",
    rating: "⭐⭐⭐ (210 ratings)",
    stock: "In stock",
    seller: "Nike India",
    offers: [
      "Buy 2 get 10% off",
      "Free delivery on your first order"
    ]
  },
  { 
    id: 6, 
    name: "Laptop", 
    price: 45000, 
    oldPrice: 52000,
    image: Laptop, 
    desc: "High-performance laptop suitable for work and play.",
    rating: "⭐⭐⭐⭐ (1,050 ratings)",
    stock: "Only 3 left in stock!",
    seller: "HP India",
    offers: [
      "Up to ₹4000 off on exchange",
      "Free MS Office (1 year)",
      "No-cost EMI available"
    ]
  },
  { 
    id: 7, 
    name: "Fruits", 
    price: 30, 
    oldPrice: 50,
    image: Fruits, 
    desc: "Fresh and healthy seasonal fruits.",
    rating: "⭐⭐⭐⭐⭐ (320 ratings)",
    stock: "Available",
    seller: "FreshFarm",
    offers: [
      "Buy 1 get 1 free (limited time)",
      "Free delivery on orders above ₹199"
    ]
  },
  { 
    id: 8, 
    name: "Mobile Charger", 
    price: 899, 
    oldPrice: 1299,
    image: Mobilecharger, 
    desc: "Fast charging mobile adapter, 65W output.",
    rating: "⭐⭐⭐⭐ (410 ratings)",
    stock: "In stock",
    seller: "Boat Accessories",
    offers: [
      "Up to ₹100 off with Amazon Pay",
      "Free delivery"
    ]
  },
  { 
    id: 9, 
    name: "Apple iPad", 
    price: 30000, 
    oldPrice: 34999,
    image: Appleipad, 
    desc: "iPad with Retina display and A15 Bionic chip.",
    rating: "⭐⭐⭐⭐⭐ (640 ratings)",
    stock: "Only 4 left in stock!",
    seller: "Apple India",
    offers: [
      "Up to ₹2000 off on HDFC cards",
      "Free delivery",
      "No-cost EMI available"
    ]
  },
  { 
    id: 10, 
    name: "Vegetables", 
    price: 50, 
    oldPrice: 70,
    image: Vegetables, 
    desc: "Organic and fresh vegetables.",
    rating: "⭐⭐⭐⭐⭐ (200 ratings)",
    stock: "Fresh stock available daily",
    seller: "Organic Mart",
    offers: [
      "Buy 2kg get 500g free",
      "Free delivery on orders above ₹149"
    ]
  }
];

export default products;