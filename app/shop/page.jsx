'use client'
import { redirect } from "next/navigation"
import { useContext } from "react"
import { CartContext } from "@components/CartProvider"

const Main = () => {
    const {setCart} = useContext(CartContext)
    if (localStorage.getItem('cart') === null) {
        setCart([])
    }
    redirect("/shop/1")
}

export default Main