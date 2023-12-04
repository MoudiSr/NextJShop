'use client'
import { CartContext } from "@components/CartProvider"
import { useContext, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const Checkout = () => {
    const {cart} = useContext(CartContext)
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
        return `${index+1}. ${item.name}\n الفرقة:${item.type}\n الحجم:${item.size}\n الكمية:${item.quantity}\n المبلغ:$${item.price}\n`
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
                    <h1 className="text-2xl text-right">
                        أدخل المعلومات التالية
                    </h1>
                    
                    <div className="text-right">
                        <div className="border-[1px] p-2 rounded-md mt-4 mb-8 bg-[#8966AB]">
                            <div className="flex">
                                <div className="p-4 w-full">
                                    <h1 className="mb-2">الاسم الثلاثي</h1>
                                    <input type="text"  dir="rtl" onChange={e => setName(e.target.value)} className="w-full bg-white text-black rounded-md p-2" style={inputStyle} placeholder=""/>
                                </div>
                                <div className="p-4 w-full">
                                    <h1 className="mb-2">رقم الهاتف</h1>
                                    <input type="number"  onChange={e => setPhone(e.target.value)} className="w-full bg-white text-black rounded-md p-2 text-right" style={inputStyle} placeholder="78 831 474" />
                                </div>
                            </div>
                            
                            <div className="p-4 w-full">
                                <h1 className="mb-2">عنوان السكن</h1>
                                <input type="text" dir="rtl"  onChange={e => setAddress(e.target.value)} className="w-full bg-white text-black rounded-md p-2" style={inputStyle} />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-center ">
                        {(name && phone && address) && <a href={`https://wa.me/+96178831474?text=${encodeURIComponent(cartMessage)}`} className="py-2 p-2 text-white text-center rounded-md text-xl w-full bg-[#E4C048] shadow-lg">تأكيد الطلب</a>}
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