import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  console.log(cart)

  const addCart = (param) => {
    setCart([...cart, param])
  }

  const isInCart = (id) => {
    return cart.some((param) => param.id === id)
  }

  const emptyCart = () => {
    setCart([])
  }

  const totalCart = () => {
    return cart.reduce((acc, param) => acc + param.stock, 0)
  }

  const totalPrice = () => {
    return cart.reduce((acc, param) => acc + param.price, 0)
  }

  const removeItem = (id) => {
    setCart(cart.filter((param) => param.id !== id))
  }

  return (
    <CartContext.Provider value={{
      cart,
      addCart,
      isInCart,
      emptyCart,
      totalCart,
      totalPrice,
      removeItem,
    }}>
      {children}
    </CartContext.Provider>
  )

}