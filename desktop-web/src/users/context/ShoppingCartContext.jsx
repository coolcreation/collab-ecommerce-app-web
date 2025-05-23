import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((inCartItems) => {
            const foundInCart = inCartItems.find((item) => item.id === product.id);
            if(foundInCart) {
                return inCartItems.map((item) =>
                    item.id === product.id 
                ? 
                    {...item, quantity: item.quantity +1} 
                : item
                );
            } else {
                return [...inCartItems, {...product, quantity: 1}];
            }
        });
    };

    const removeFromCart = (product) => {
        setCartItems((items) =>
            items.filter((item) =>
                item.id !== product.id));
    };

    const updateQuantity = (id, newValue) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + newValue) }
                    : item
                )
            );
    };

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, updateQuantity}}
        >
            {children}
        </CartContext.Provider>
    );
};