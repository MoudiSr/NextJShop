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
import { SpeedInsights } from '@vercel/speed-insights/next';

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
                    <body className='bg-[#76489C]'>
                        <nav className='flex justify-between items-center bg-[#8966AB] p-2 shadow-lg'>
                            <div className='flex'>
                                <div className='py-3 px-6'>
                                    <div className="flex">
                                        <button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(true)}
                                        >
                                        <Bars3Icon className="h-6 w-6 text-white " aria-hidden="true" />
                                        </button>
                                    </div>
                                    <MobileDialog mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                                </div>
                                <div className={`py-3 px-6 text-[1.1rem] ${pathname == "/" ? `activePage` : ``} `}>
                                    <Link href='/'>Home</Link>
                                </div>
                                <div className={`py-3 px-6 text-[1.1rem] ${pathname == "/shop/1" || pathname == "/shop/2" || pathname == "/shop/3" ? `activePage` : ``} `}>
                                    <Link href='/shop'>Shop</Link>
                                </div>
                                {pathname == '/checkout' && <div className={`py-3 px-6 text-[1.1rem] ${pathname == "/checkout" ? `activePage` : ``} `}>
                                    <Link href='/checkout'>Checkout</Link>
                                </div>}
                            </div>
                            
                            <div className='py-2 px-6'>
                                {pathname != '/checkout' && 
                                    <NotCheckout open={open} setOpen={setOpen} />
                                }
                            </div>
                        </nav>
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
                        <SpeedInsights />
                    </body>
                </CartProvider>
            </html>
    )
}

export default RootLayout