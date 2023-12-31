'use client'
import { redirect } from "next/navigation"
import { useContext, useEffect } from "react"
import { CartContext } from "@components/CartProvider"

const Main = () => {
    const {setCart} = useContext(CartContext)
    
    useEffect(() => {
        if (localStorage.getItem('cart') === null) {
            setCart([])
        }
    }, [])
    redirect("/shop/1")
}

export default Main
