import { createContext, useState } from "react";

export const CartContext =  createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (itemAdd) => { 
       setCart([...cart, itemAdd])
  }

  const getQuantity = () => { 
       let count = 0;
       cart.forEach(prod => {
            count += prod.quantity
       })
       return count
  }

  const isInCart = (id) => { 
     return cart.some(prod => prod.id === id)
  }

  const clearCart = () => { 
       setCart([])
  }

  const removeItem = (id) => { 
        const productos =  cart.filter(prod => prod.id !== id)
        setCart(productos)
     }

console.log(cart)

  return (
    <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, clearCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext 