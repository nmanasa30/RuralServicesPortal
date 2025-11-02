import React, { useState, useEffect } from "react";
import "./Products.css";

function Products() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  const products = [
    { id: 1, name: "🌾 Rice", price: 40, unit: "kg" },
    { id: 2, name: "🥛 Milk", price: 50, unit: "ltr" },
    { id: 3, name: "🍞 Bread", price: 30, unit: "pc" },
    { id: 4, name: "🧈 Butter", price: 45, unit: "pack" },
    { id: 5, name: "🥚 Eggs", price: 60, unit: "dozen" },
    { id: 6, name: "🐟 Fish", price: 150, unit: "kg" },
  ];

  // 🔄 Load cart data from local storage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // 💾 Save cart data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setMessage(`${product.name} added to cart 🛒`);
    setTimeout(() => setMessage(""), 2000);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cartItems");
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="products-page">
      <h2>🛍️ Available Products</h2>
      <p className="cart-count">Items in cart: <b>{cart.length}</b></p>

      {message && <div className="cart-message">{message}</div>}

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>💰 ₹{product.price}/{product.unit}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="cart-box">
          <h3>🧺 Your Cart</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} — ₹{item.price}/{item.unit}
                <button className="remove-btn" onClick={() => removeFromCart(index)}>❌</button>
              </li>
            ))}
          </ul>
          <p className="total">Total: ₹{totalAmount}</p>
          <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default Products;
