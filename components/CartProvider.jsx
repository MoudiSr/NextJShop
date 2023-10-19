'use client'
import React, {useState} from "react"

export const CartContext = React.createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"))

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider