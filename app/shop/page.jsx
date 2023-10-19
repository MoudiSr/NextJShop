'use client'
import Card from "components/Card"
import {useContext, useEffect} from "react"
import { CartContext } from "@components/CartProvider"

const products = [
    {
        id: 1,
        image: "/assets/images/kamis.png",
        name: "قميص",
        price: 8.5
    },
    {
        id: 2,
        image: "/assets/images/foular.png",
        name: "فولار",
        price: 1.5
    },
    {
        id: 3,
        image: "/assets/images/habse.png",
        name: "حبسة",
        price: 1
    },
    {
        id: 4,
        image: "/assets/images/kitayfet.png",
        name: "كتيفات",
        price: 1
    }
]

const Shop = () => {
    const {cart, setCart} = useContext(CartContext)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <div>
            <h1 className="text-center text-2xl">Products</h1>
            <div>
                <div className="flex flex-wrap p-4 justify-center">
                    {products.map((product) => (
                      <Card id={product.id} setCart={setCart} cart={cart} name={product.name} image={product.image} price={product.price} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop