import { createContext, useEffect, useState } from "react";

export const CartContext= createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Function to add an item to the cart or update quantity
  function cartItem(product) {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // If product already exists, increase the quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1; // Increase quantity by 1
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // If product doesn't exist, add a new item with quantity 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  // Function to remove an item
  function removeItem(productId) {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <CartContext.Provider value={{ cart, cartItem, removeItem, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
