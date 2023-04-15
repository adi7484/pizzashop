import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // fetch products from API endpoint
    axios
      .get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}{" "}
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}{" "}
            <button onClick={() => handleRemoveFromCart(item)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
