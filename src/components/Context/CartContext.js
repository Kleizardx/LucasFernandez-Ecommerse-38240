import { createContext, useState } from "react";

export const CartContext =  createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (itemAdd) => { 
     const exist = cart.findIndex(exist => exist.id === itemAdd.id)
     
     if (exist > -1) {
          const existOld = cart[exist].quantity;
          cart.splice(exist, 1);
          setCart([...cart, {...itemAdd, quantity: itemAdd.quantity + existOld}])
     } else {
          setCart([...cart, itemAdd])
     }
  }

  const getQuantity = () => { 
       let count = 0;
       cart.forEach(prod => {
            count += prod.quantity
       })
       return count
  }

  const isInCart = (id) => { 
       return cart.find(prod => prod.id === id)
     //   return cart.some(prod => prod.id === id)
  }

  const clearCart = () => { 
       setCart([])
  }

  const removeItem = (id) => { 
        const productos =  cart.filter(prod => prod.id !== id)
        setCart(productos)
     }
     
  return (
    <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, clearCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext 