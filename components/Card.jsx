'use client'
import {useState} from "react"
import {useContext, useEffect} from "react"
import { CartContext } from "@components/CartProvider"
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"

const Card = ({id, inititalName, image, price, has}) => {
    const [quantity, setQuantity] = useState(1)
    const [totalPrice, setTotalPrice] = useState(price)
    const [size, setSize] = useState("M")
    const [type, setType] = useState("كشافة")
    const [imageSrc, setImageSrc] = useState(has ? image+"3.jpg" : image+"1.jpg")
    const [animate, setAnimation] = useState(0)
    const [name, setName] = useState(inititalName)
    const [success, setSuccess] = useState(false)
    const {cart, setCart} = useContext(CartContext)
   

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const handleAdd = () => {
        let isAvailable = false
        cart.map(item => {
            if (item.name === name && item.size === size && item.type === type) {
                isAvailable = true
                item.quantity += quantity
                item.price += totalPrice
            }
        })
        setCart(!isAvailable ? [...cart, {
            id: cart.length+1,
            name: name,
            image: imageSrc,
            price: totalPrice,
            quantity: quantity,
            size: size,
            type: type
        }] : [...cart])
        
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 1300)
    }

    const [imgIsValid, setImgIsValid] = useState(true);
    
    return (
        <div key={id} className="group border-gray-100/30 m-8 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-[#8966AB] shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                <AnimatePresence>
                    {imgIsValid ? <motion.img 
                        className="peer absolute top-0 right-0 h-full w-full object-cover" 
                        src={imageSrc}
                        key={imageSrc}
                        alt=""
                        onError={() => setImgIsValid(false)}
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }} 
                    />
                    :
                    <motion.div className="flex items-center justify-center w-full">
                        <h1 className="font-bold text-2xl">سيتم اضافة الصورة قريباً</h1>
                    </motion.div>
                }
                </AnimatePresence>
            </a>
            <div className="mt-4 px-5 pb-5">
                <div className="flex justify-between">
                    <Link href="#">
                        <h5 className="text-xl tracking-tight text-white">{name}</h5>
                    </Link>
                    <div>
                        <p className="text-xl font-bold text-white">{type}</p>
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
                        setImageSrc(image+"1.jpg");
                        setImgIsValid(true);
                        {name === "قميص" ? setTotalPrice(8) : name === "فولار" ? setTotalPrice(1.5) : ""}
                        {id === 6 ? setName("طاقية") : ""}
                    }}/>
                    <input type="radio" className="bg-[#fff200]" name={`type${id}`} value="أشبال" onChange={e => {
                        setType(e.target.value);
                        setImageSrc(name === "حبسة" ? image + "1.jpg" : id == 5 ? image + "1.jpg" : image+"2.jpg");
                        setImgIsValid(true);
                        {name === "قميص" ? setTotalPrice(9) : name === "فولار" ? setTotalPrice(1.5) : ""}
                        {id === 6 ? setName("طاقية") : ""}
                    }}/>
                    <input type="radio" className="bg-[#128b49]" name={`type${id}`} value="كشافة" onChange={e => {
                        setType(e.target.value);
                        setImageSrc(name === "حبسة" ? image + "1.jpg" : id == 5 ? image + "1.jpg" : image+"3.jpg");
                        setImgIsValid(true);
                        {name === "قميص" ? setTotalPrice(10) : name === "فولار" ? setTotalPrice(1.5) : ""}
                        {id === 6 ? setName("بيريه") : ""}
                    }} defaultChecked/>
                    <input type="radio" className="bg-[#ed1c24]" name={`type${id}`} value="جوالة" onChange={e => {
                        setType(e.target.value);
                        setImageSrc(name === "حبسة" ? image + "2.jpg" : id == 5 ? image + "1.jpg" : image+"4.jpg");
                        setImgIsValid(true);
                        {name === "قميص" ? setTotalPrice(12) : name === "فولار" ? setTotalPrice(2) : ""}
                        {id === 6 ? setName("بيريه") : ""}
                    }}/>
                </div>
                 <motion.a onClick={() => !success ? handleAdd() : ""} id="addToCart" className={`flex transition-colors duration-300 ease-in-out items-center justify-center rounded-md border border-transparent ${type == "براعم" ? `bg-[#2e3b72]` : type == "أشبال" ? `bg-[#fff200]` : type == "كشافة" ? `bg-[#128b49]` : `bg-[#ed1c24]`} px-5 py-2.5 text-center font-medium ${type === "أشبال" ? `text-black` : `text-white`} text-xl hover:cursor-pointer ${success ? `bg-[#fff] text-black` : ""} `}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    animate={
                        success
                            ? {
                                  x: [0, -10, 10, -10, 10, 0],
                                  rotate: [0, -5, 5, -5, 5, 0],
                                  borderColor: "#000",
                              }
                            : {
                                borderColor: "transparent"
                            }
                    }
                    transition={{ duration: 0.5 }}
                 >
                    
                    <AnimatePresence>
                        {success ? 
                            <motion.span 
                                initial={{scale: 0}}
                                animate={{scale: 1.2}}

                                className="addToCardText text-black">
                                    Success !!
                            </motion.span>
                            :
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                className="flex">
                                <motion.svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6 addToCardIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" 
                                
                                >
                                    <motion.path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </motion.svg>
                                <motion.span className="addToCardText">Add To Cart</motion.span>
                            </motion.div>
                        }
                    </AnimatePresence>
                </motion.a>
            </div>
        </div>
    )

}

export default Card