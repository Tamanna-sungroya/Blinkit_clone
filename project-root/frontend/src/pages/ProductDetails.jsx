import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "./ProductData";
import "./ProductDetails.css";

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product?.image);

  if (!product) return <h2>Product Not Found</h2>;

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="product-detail-page">
      <div className="product-container">

        {/* LEFT: Product Image + Thumbnails */}
        <div className="product-images">
          <img className="main-image" src={mainImage} alt={product.name} />
          <div className="thumbnail-row">
            {[product.image, product.image, product.image].map((img, i) => (
              <img
                key={i}
                className={`thumbnail ${mainImage === img ? "active" : ""}`}
                src={img}
                alt={`${product.name} view ${i + 1}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* CENTER: Product Info */}
        <div className="product-info">
          <h2 className="title">{product.name}</h2>
          <div className="rating">
            {product.rating || "⭐⭐⭐⭐☆ (100 ratings)"}
          </div>
          <div className="price-box">
            <span className="current-price">
              ₹{product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <span className="old-price">
                ₹{product.oldPrice.toLocaleString()}
              </span>
            )}
            {product.discount && (
              <span className="discount">{product.discount}</span>
            )}
          </div>
          <p className="description">{product.desc}</p>

          <div className="offers">
            <h4>Available Offers:</h4>
            <ul>
              {product.offers ? (
                product.offers.map((offer, i) => <li key={i}>{offer}</li>)
              ) : (
                <>
                  <li>Up to ₹1500 off on select credit cards</li>
                  <li>7% off on 2 items, 9% off on 3 items</li>
                  <li>Free delivery on your first order</li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* RIGHT: Buy Box */}
        <div className="buy-box">
          <p className="price">₹{product.price.toLocaleString()}</p>
          <p className="stock">{product.stock || "In stock"}</p>
          <p className="ship">
            Ships from: <strong>{product.seller || "Default Seller"}</strong>
          </p>

          <div className="button-group">
            <button className="add-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <button className="buy-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>

          <div className="extra-info">
            <p>✅ Free Delivery</p>
            <p>✅ 10 Days Returnable</p>
            <p>✅ Secure Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}