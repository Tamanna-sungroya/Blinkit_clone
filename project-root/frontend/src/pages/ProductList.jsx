// src/pages/ProductList.js
import React from "react";
import { Link } from "react-router-dom";
import './ProductList.css';
import products from "./ProductData";

export default function ProductList() {
  return (
    <div className="product-page">
      <h1 className="page-title">Explore Our Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="img-wrapper">
              <img src={product.image} alt={product.name} className="product-img" />
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹ {product.price.toLocaleString()}</p>

              {/* ✅ View Details link */}
              <Link to={`/product/${product.id}`}>
                <button className="view-btn">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}