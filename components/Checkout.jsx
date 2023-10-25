'use client'
import { CartContext } from "@components/CartProvider"
import { useContext, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Checkout = () => {
    const {cart} = useContext(CartContext)
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const [total, setTotal] = useState(0)

    useEffect(() => {
        cart.forEach(p => {
            setTotal(prevTotal => prevTotal+p.price)
        })
    }, [])

    const cartMessage = cart.map((item, index) => {
        return `${index+1}. ${item.name} الفرقة:${item.type} الحجم:${item.size} الكمية:${item.quantity} المبلغ:$${item.price}`
      }).join('\n') + `\n${name}\n${address}\n${phone}` +`\n\nالمجموع:${total}$`;

    const inputStyle = {
    }

    return (
        <div>
            {cart.length
                 > 0 ? 
                 <>
            <div className="">
                <div>
                    <h1 className="text-right text-2xl">
                        أدخل المعلومات التالية
                    </h1>
                    <div className="text-right">
                        <div className="flex ">
                            <div className="p-4 w-full">
                                <h1 className="mb-2">الاسم الثلاثي</h1>
                                <input type="text"  dir="rtl" onChange={e => setName(e.target.value)} className="w-full bg-gray-700 rounded-md p-2" style={inputStyle} placeholder=""/>
                            </div>
                            <div className="p-4 w-full">
                                <h1 className="mb-2">رقم الهاتف</h1>
                                <input type="number"  onChange={e => setPhone(e.target.value)} className="w-full bg-gray-700 rounded-md p-2 text-right" style={inputStyle} placeholder="78 831 474" />
                            </div>
                        </div>
                        
                        <div className="p-4 w-full">
                            <h1 className="mb-2">عنوان السكن</h1>
                            <input type="text" dir="rtl"  onChange={e => setAddress(e.target.value)} className="w-full bg-gray-700 rounded-md p-2" style={inputStyle} />
                        </div>
                        <div className=" w-full text-center">
                            <button onClick={() => setOpen(prevOpen => !prevOpen)}>Cart items </button>
                            
                            <AnimatePresence>
                                
                                {open && <motion.ul 
                                    className="text-[#e5e5e5]"
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                      open: { opacity: 1, height: "auto" },
                                      collapsed: { opacity: 0, height: 0 }
                                    }}>
                                    {cart.map((item, index) => (
                                        <li key={index} className=" rounded-md flex">
                                            <div className="bg-gray-700 m-4 rounded-md w-full">
                                                <ul className="py-4 text-right mr-4">
                                                    <li>الكمية: {item.quantity}</li>
                                                    <li>$السعر: {item.price}</li>
                                                    {item.name === 'قميص' && <li>الحجم: {item.size}</li>}
                                                </ul>
                                            </div>
                                            <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full ml-auto mr-4 pt-4" />
                                        </li>
                                    ))}
                                </motion.ul>}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="flex w-full justify-center ">
                        {(name && phone && address) && <a href={`https://wa.me/+96178831474?text=${encodeURIComponent(cartMessage)}`} className="bg-gray-200 py-2 p-2 text-black rounded-md">تأكيد الطلب</a>}
                    </div>
                </div>
            </div>
            </>
            : 
            <div className="text-center my-40 grid justify-center">
                <h1 className="mb-8 text-5xl">لا يوجد منتجات</h1>
                <a href="/" className="text-xl bg-gray-700 rounded-md w-full py-8">Return to Home</a>
            </div>
            }
        </div>
    )
}

export default Checkout