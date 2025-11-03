import React, { useState } from "react";
import "./Products.css";

function Products() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "🌿 Organic Fertilizer", price: 350 },
    { id: 2, name: "🌾 High-Quality Seeds", price: 120 },
    { id: 3, name: "🚜 Tractor Service", price: 2500 },
    { id: 4, name: "💧 Irrigation Pipes", price: 800 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  // 💰 Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="products-container">
      <h1>🌻 Our Products</h1>
      <p className="subtitle">
        Quality agricultural products to empower rural communities
      </p>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <p className="price">₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-section">
        <h2>🧺 Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <span>
                    {item.name} - ₹{item.price}
                  </span>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="total-price">
              <strong>Total: ₹{totalPrice}</strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Products;
