'use client'
import {useState} from "react"
import {useContext, useEffect} from "react"
import { CartContext } from "@components/CartProvider"
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"

const Card = ({id, name, image, price, has}) => {
    const [quantity, setQuantity] = useState(1)
    const [totalPrice, setTotalPrice] = useState(price)
    const [size, setSize] = useState("M")
    const [type, setType] = useState("كشافة")
    const [imageSrc, setImageSrc] = useState(has ? image+"3.png" : image+"1.png")
    const [animate, setAnimation] = useState(0)

    const {cart, setCart} = useContext(CartContext)
   

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const handleAdd = () => {
        setCart([...cart, {
            id: cart.length+1,
            name: name,
            image: imageSrc,
            price: totalPrice,
            quantity: quantity,
            size: size,
            type: type
        }])
        const cartButton = document.querySelector(".cart")
        cartButton.classList.add("shake")
        setTimeout(() => {
            cartButton.classList.remove("shake")
        }, 500)
    }

    return (
        <div key={id} className="group border-gray-100/30 m-8 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-[#8966AB] shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                <AnimatePresence>
                    <motion.img 
                        className="peer absolute top-0 right-0 h-full w-full object-cover" 
                        src={imageSrc}
                        key={imageSrc}
                        alt="product image"
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }} 
                    />
                </AnimatePresence>
            </a>
            <div className="mt-4 px-5 pb-5">
                <div className="flex justify-between">
                    <Link href="#">
                        <h5 className="text-xl tracking-tight text-white">{name}</h5>
                    </Link>
                    <div>
                        <select className="text-black w-14 h-10 border-[1px] rounded-md" onChange={e => {setQuantity(e.target.value);setTotalPrice(e.target.value*price)}} defaultValue={1}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-white">${totalPrice}</span>
                    </p>
                    {name === "قميص" && <div>
                        <select className="text-black w-14 h-10 border-[1px] rounded-md" onChange={e => {setSize(e.target.value)}} defaultValue={"M"}>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="2XL">2XL</option>
                            <option value="3XL">3XL</option>
                            <option value="4XL">4XL</option>
                            <option value="5XL">5XL</option>
                            <option value="6XL">6XL</option>
                        </select>
                    </div>}
                </div>
                <div className="flex justify-between mx-8 mb-4 ">
                    <input type="radio" className="bg-[#2e3b72]" name={`type${id}`} value="براعم" onChange={e => {
                        setType(e.target.value);
                        setImageSrc(image+"1.png");
                    }}/>
                    <input type="radio" className="bg-[#fff200]" name={`type${id}`} value="أشبال" onChange={e => {
                        setType(e.target.value);
                        setImageSrc(name === "حبسة" ? image + "1.png" : image+"2.png");
                    }}/>
                    <input type="radio" className="bg-[#128b49]" name={`type${id}`} value="كشافة" onChange={e => {
                        setType(e.target.value);
                        setImageSrc(name === "حبسة" ? image + "1.png" : image+"3.png");
                    }} defaultChecked/>
                    <input type="radio" className="bg-[#ed1c24]" name={`type${id}`} value="جوالة" onChange={e => {
                        setType(e.target.value);
                        setImageSrc(name === "حبسة" ? image + "2.png" : image+"4.png");
                    }}/>
                </div>
                 <motion.a onClick={() => handleAdd()} id="addToCart" className={`flex transition-colors duration-300 ease-in-out items-center justify-center rounded-md border border-transparent ${type == "براعم" ? `bg-[#2e3b72]` : type == "أشبال" ? `bg-[#fff200]` : type == "كشافة" ? `bg-[#128b49]` : `bg-[#ed1c24]`} px-5 py-2.5 text-center font-medium ${type === "أشبال" ? `text-black` : `text-white`} text-xl hover:cursor-pointer `}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                 >
                    <motion.svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" 
                        
                    >
                        <motion.path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </motion.svg>
                    Add to cart
                </motion.a>
            </div>
        </div>
    )

}

export default Card