'use client'
import '@styles/global.css'
import {useState, useRef} from "react"
import CartProvider from '@components/CartProvider'
import MobileDialog from '@components/MobileDialog'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import NotCheckout from '@components/NotCheckout'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const metadata = {
    title: "Store",
    description: "Al Mahdi Scouts at Jebchit, fully functional store web application"
}

const RootLayout = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const constraintsRef = useRef(null);
    const config = {
        type: "spring",
        damping: 100,
        stiffness: 100
    };
    

    return (
        
            <html>
                <CartProvider>
                    <body className='bg-gray-800'>
                        <div className='flex justify-between bg-gray-600 pt-2'>
                            <ul className="flex">
                                <li className="mr-1">
                                    <div className="inline-block py-2 px-4 font-semibold">
                                        <button
                                        type="button"
                                        className=" inline-flex items-center justify-center rounded-md text-gray-700"
                                        onClick={() => setMobileMenuOpen(true)}
                                        >
                                        <span className="sr-only">Open main menu</span>
                                        <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <MobileDialog mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                                </li>
                                <li className="mr-1">
                                    <Link className={`inline-block py-2 px-4 font-semibold ${pathname == '/' ? "bg-gray-800 rounded" : ""} `} href="/">Home</Link>
                                </li>
                                <li className="mr-1">
                                    <Link className={`inline-block py-2 px-4 font-semibold ${pathname == '/shop' ? "bg-gray-800 rounded" : ""} `} href="/shop">Shop</Link>
                                </li>
                            </ul>
                            
                            <div>
                        
                                {pathname != '/checkout' && 
                                    <NotCheckout open={open} setOpen={setOpen} />
                                }
                            </div>
                        </div>
                        <AnimatePresence>
                            <motion.div ref={constraintsRef}>
                                <motion.div 
                                    className="app"
                                    dragConstraints={constraintsRef}
                                    transition={config}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ x: 0, opacity: 0 }}
                                >
                                    { children }
                                </motion.div>
                            
                            </motion.div>
                        </AnimatePresence>
                    </body>
                </CartProvider>
            </html>
    )
}

export default RootLayout