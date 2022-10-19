import { useState } from "react";
import { CartContext } from "./CartContext";
import swal from "sweetalert"

export const CartProvider = ({ children }) => {

    const [Cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        const inCart=isInCart(item.id)
        if (inCart) {
            swal({
                title : "El producto ya se encuenta en el carrito",
                icon: "error",
                timer:"3000"
            });
        } else {
            setCart([...Cart, { ...item, cantidad }]);
            swal({
                title : "El producto ya se agrego al carrito correctamente",
                icon: "success",
                timer:"3000"
            });
        }
        console.log("Cart", [...Cart, { ...item, cantidad }]);
    }

    const isInCart = (id) => {
        return Cart.find((item) => item.id === id);
    }

    const removeItem = (productId) => {
        let nuevoArreglo = [];

        Cart.forEach((product) => {
            if (product.id === productId) {
                console.log(product);

            } else {
                nuevoArreglo.push(product)
            }
            setCart(nuevoArreglo);


        })

    }

    const cartTotal = () => {
        return Cart.reduce((acc, item) => acc + item.cantidad, 0)

    }

    const clear = () => {
        setCart([]);
    }


    return (
        <CartContext.Provider value={{ Cart, addToCart, removeItem, cartTotal , clear }}>

            {children}

        </CartContext.Provider>
    )
}
