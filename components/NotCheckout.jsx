import { useContext } from "react"
import { CartContext } from "@components/CartProvider"
import ShoppingCart from "@components/ShoppingCart"
import { BsCart } from "react-icons/bs";

const NotCheckout = ({open, setOpen}) => {
    const {cart, setCart} = useContext(CartContext)

    return (
        <>
            <div className="cart">
                <button className="cartBtn" onClick={() => setOpen(true)}>
                    <BsCart className="text-xl text-[#E4C048]" />
                    <span className="cartCount">{cart.length}</span>
                </button>
            </div>

            <ShoppingCart open={open} setOpen={setOpen}/>
        </>
    )
}

export default NotCheckout