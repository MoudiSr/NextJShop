import { useContext } from "react"
import { CartContext } from "@components/CartProvider"
import ShoppingCart from "@components/ShoppingCart"

const NotCheckout = ({open, setOpen}) => {
    const {cart, setCart} = useContext(CartContext)

    return (
        <>
            <div className="cart" data-totalitems={cart.length}>
                <button onClick={() => setOpen(true)}>Cart</button>
            </div>

            <ShoppingCart open={open} setOpen={setOpen}/>
        </>
    )
}

export default NotCheckout