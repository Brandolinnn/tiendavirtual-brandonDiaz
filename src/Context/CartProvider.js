import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {

    const [Cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            alert("YA ESTA EN EL CARRITO")
        } else {
            setCart([...Cart, { ...item, cantidad }]); 
        }
        console.log("Cart" , [...Cart, { ...item, cantidad }]);
    }
    
    const isInCart = (id) => {
        return Cart.some((item) => item.id === id);
    }

    const clear = () => {
        setCart([]);
    }

        return (
            <CartContext.Provider value={{ Cart, addToCart }}>

                {children}

            </CartContext.Provider>
        )
    }
