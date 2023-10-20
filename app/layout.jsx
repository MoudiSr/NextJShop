'use client'
import '@styles/global.css'
import ShoppingCart from 'components/ShoppingCart'
import {useState} from "react"
import CartProvider from '@components/CartProvider'
import { motion, AnimatePresence } from "framer-motion"

const metadata = {
    title: "Store",
    description: "Al Mahdi Scouts at Jebchit, fully functional store web application"
}

const RootLayout = ({ children }) => {
    const [open, setOpen] = useState(false)

    return (
        <AnimatePresence>
        <html>
            <motion.div
                initial="initialState"
                animate="animateState"
                exit="exitState"
                className="base-page-size"
            >
                <CartProvider>
                    <body className='bg-gray-800'>
                        <nav className='w-full bg-[#444444] border-b-2 border-b-[#da0037] shadow-inner h-auto p-4'>
                            <div className='flex justify-between'>
                                <div className='space-x-4'>
                                    <a href='/'>Home</a>
                                    <a href='/shop'>Shop</a>
                                </div>
                                <div>
                                    <button onClick={() => setOpen(true)}>Cart</button>
                                    <ShoppingCart open={open} setOpen={setOpen}/>
                                </div>
                            </div>
                        </nav>
                        
                        <main className="app">
                            { children }
                        </main>
                    </body>
                </CartProvider>
            </motion.div>
        </html>
        </AnimatePresence>
    )
}

export default RootLayout