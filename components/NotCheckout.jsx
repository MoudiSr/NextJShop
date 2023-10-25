import { useContext } from "react"
import { CartContext } from "@components/CartProvider"
import ShoppingCart from "@components/ShoppingCart"

const NotCheckout = ({open, setOpen}) => {
    const {cart} = useContext(CartContext)

    return (
        <>
            <button onClick={() => setOpen(true)}>Cart {cart.length}</button>
            <ShoppingCart open={open} setOpen={setOpen}/>
        </>
    )
}

export default NotCheckout