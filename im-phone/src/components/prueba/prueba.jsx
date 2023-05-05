import React, { useState } from 'react';

export const iPhoneStore = () => {
  // Estado de los productos de la tienda
  const [products, setProducts] = useState([
    { id: 1, name: 'iPhone X', price: 999 },
    { id: 2, name: 'iPhone XR', price: 749 },
    { id: 3, name: 'iPhone XS', price: 1099 },
    { id: 4, name: 'iPhone 11', price: 699 },
    { id: 5, name: 'iPhone 12', price: 829 },
  ]);

  // Estado del carrito de compras
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito de compras
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>iPhone Store</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};