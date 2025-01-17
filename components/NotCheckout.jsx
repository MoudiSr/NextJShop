import { useContext, useState, useEffect } from "react"
import { CartContext } from "@components/CartProvider"
import ShoppingCart from "@components/ShoppingCart"
import { BsCart } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion"

const NotCheckout = ({open, setOpen}) => {
    const {cart, setCart} = useContext(CartContext)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const controls = useAnimation()

    useEffect(() => {
        let newTotal = 0;
        cart.forEach(item => {
            newTotal += item.quantity;
        });
        setTotalQuantity(newTotal);

        controls.start({
            scale: [1, 1.3, 1], // Bounce effect
            transition: { duration: 0.3 },
        });

    }, [cart])

    return (
        <>
            <div className="cart">
                <button className="cartBtn" onClick={() => setOpen(true)}>
                    <BsCart className="text-xl text-[#E4C048]" />
                    <motion.span
                    animate={controls}
                    className="cartCount"
                    >
                        {totalQuantity}
                    </motion.span>
                </button>
            </div>

            <ShoppingCart open={open} setOpen={setOpen}/>
        </>
    )
}

export default NotCheckout