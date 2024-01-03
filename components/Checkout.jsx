'use client'
import { CartContext } from "@components/CartProvider"
import { useContext, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import axios from 'axios';

const Checkout = () => {
    const {cart, setCart} = useContext(CartContext)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')


    const total = cart.reduce((prevTotal, p) => prevTotal + p.price, 0);

    const cartMessage = cart.map((item, index) => {
        return `${index+1}. ${item.name}\n الفرقة:${item.type}\n الحجم:${item.size}\n الكمية:${item.quantity}\n المبلغ:$${item.price}\n`
      }).join('\n') + `\n${name}\n${address}\n${phone}` +`\n\nالمجموع:${total}$`;

    const sendOrderToTelegram = async (cartMessage) => {
        const botToken = '6881444650:AAFjGWEJepUU0hqNh2zl4a-6wvJV-4Qjogk';
        const chatId = '-4044713593';
    
        try {
            await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                chat_id: chatId,
                text: cartMessage
            });
        } catch (error) {
            console.error('Error sending message to Telegram:', error);
        }
        localStorage.removeItem('cart')
        setCart([])
    }

    return (
        <div>
            {cart.length
                 > 0 ? 
                 <>
            <div className="">
                <div>
                    <h1 className="text-2xl text-right">
                        أدخل المعلومات التالية
                    </h1>
                    
                    <div className="text-right">
                        <div className="border-[1px] p-2 rounded-md mt-4 mb-8 bg-[#8966AB]">
                            <div className="flex">
                                <div className="p-4 w-full">
                                    <h1 className="mb-2">الاسم الثلاثي</h1>
                                    <input type="text"  dir="rtl" onChange={e => setName(e.target.value)} className="w-full bg-white text-black rounded-md p-2" placeholder=""/>
                                </div>
                                <div className="p-4 w-full">
                                    <h1 className="mb-2">رقم الهاتف</h1>
                                    <input type="number"  onChange={e => setPhone(e.target.value)} className="w-full bg-white text-black rounded-md p-2 text-right" placeholder="70 123 456" />
                                </div>
                            </div>
                            
                            <div className="p-4 w-full">
                                <h1 className="mb-2">عنوان السكن</h1>
                                <input type="text" dir="rtl"  onChange={e => setAddress(e.target.value)} className="w-full bg-white text-black rounded-md p-2" />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-center ">
                        {(name && phone && address) 
                            && 
                            <motion.button 
                                onClick={() => sendOrderToTelegram(cartMessage)} 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="py-2 p-2 text-white text-center rounded-md text-xl w-full bg-[#E4C048] shadow-lg">
                                    تأكيد الطلب
                            </motion.button>
                            }
                    </div>
                </div>
            </div>
            </>
            : 
            <div className="text-center my-40 grid justify-center">
                <h1 className="mb-8 text-5xl">لا يوجد منتجات</h1>
                <Link href="/" className="text-xl bg-[#00B49F] rounded-md w-full py-8">Return to Home</Link>
            </div>
            }
        </div>
    )
}

export default Checkout